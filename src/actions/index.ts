"use server";
import { GraphQLClientSingleton } from "app/graphql";
import { createUserMutation } from "app/graphql/mutations/createUserMutation";
import { createAccessToken } from "app/utils/auth/createAccessToken";
import { redirect } from "next/navigation";
export const handleCreateUser = async (formData: FormDataValues) => {
  const formDataObject = Object.fromEntries(Object.entries(formData));
  delete formData["password_confirmation"];
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const variables = {
    input: {
      ...formDataObject,
      phone: "+58" + formDataObject.phone,
    },
  };
  const { customerCreate }: any = await graphqlClient.request(
    createUserMutation,
    variables
  );
  const { customerUserErrors, customer } = customerCreate;
  if (customer?.firstName) {
    await createAccessToken(
      formDataObject.email as string,
      formDataObject.password as string
    );
    redirect("/store");
  }
};

export const handleLogin = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  const accesToken = await createAccessToken(
    formDataObject.email as string,
    formDataObject.password as string
  );
  if (accesToken) {
    redirect("/store");
  }
};
