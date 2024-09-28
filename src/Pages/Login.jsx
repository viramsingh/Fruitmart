import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await r.text();
    console.log(data, res);

    // <div>User has been successfull</div>;
    reset({});
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
        >
          <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>

          <div className="mb-4">
            <input
              placeholder="Email"
              {...register("email", {
                required: { value: true, message: "This field is required" },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <div className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </div>
            )}
          </div>

          <div className="mb-4">
            <input
              placeholder="Password"
              {...register("password", {
                required: { value: true, message: "This field is required" },
                minLength: {
                  value: 4,
                  message: "Min length is 4",
                },
                maxLength: {
                  value: 20,
                  message: "Max length is 20",
                },
              })}
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <div className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 font-bold text-white rounded bg-primary hover:bg-secondary focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>

          {errors.formError && (
            <div className="mt-4 text-sm text-red-500">
              {errors.formError.message}
            </div>
          )}
          <div>
            <h3>
              Not registered?
              <Link to="/Login" className="text-red-700 underline">
                Create an account
              </Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
}
