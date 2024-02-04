"use client";
import { handleLogin } from "app/actions";
import "../../styles/globals.css";
export const LoginForm = () => {
  const handleSubmit = async (event: any) => {
    const formData = new FormData(event.target);
    event.preventDefault();
    await handleLogin(formData);
  };
  return (
    <div className="NewAccountForm">
      <h1 className=" text-center">Login</h1>
      <form>
        <input
          onSubmit={handleSubmit}
          type="text"
          name="email"
          placeholder="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" name="submit" value="Login" />
      </form>
    </div>
  );
};
