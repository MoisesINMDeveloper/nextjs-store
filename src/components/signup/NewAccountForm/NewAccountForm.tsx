"use client";
import { useState } from "react";
import "../../../styles/globals.css";
import { handleCreateUser } from "app/actions";

export const NewAccountForm = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formDataValues: FormDataValues = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      password: formData.get("password") as string,
      password_confirmation: formData.get("password_confirmation") as string,
    };
    await handleCreateUser(formDataValues);
  };
  return (
    <section className=" NewAccountForm text-center flex-col items-center justify-center">
      <h1>New Account</h1>
      <form className="m-[2rem]" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Name"
          disabled={loading}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Lastname"
          disabled={loading}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          disabled={loading}
        />
        <input
          type="text"
          name="phone"
          placeholder="phone number"
          pattern="^[0-9]*$"
          disabled={loading}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          disabled={loading}
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="re-type password"
          disabled={loading}
        />
        <input
          type="submit"
          name="submit"
          value="Crear cuenta"
          disabled={loading}
        />
      </form>
      {errors.length > 0 && (
        <div>
          {errors.map((error, index) => {
            return <p key={index}>{error}</p>;
          })}
        </div>
      )}
    </section>
  );
};
