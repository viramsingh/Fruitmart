import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      let response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      let result = await response.text();
      console.log(data, result);

      // Reset the form after successful submission
      reset({});
    } catch (error) {
      console.error(error);
      // Optionally, you can set a form-wide error here
      errors.formError = { message: "Registration failed. Please try again." };
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold text-center">Register</h2>

        <div className="mb-4">
          <input
            placeholder="Username"
            {...register("username", {
              required: { value: true, message: "Username is required" },
              minLength: {
                value: 2,
                message: "Username must be at least 2 characters",
              },
              maxLength: {
                value: 20,
                message: "Username must be at most 20 characters",
              },
            })}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.username && (
            <div className="mt-1 text-sm text-red-500">
              {errors.username.message}
            </div>
          )}
        </div>

        <div className="mb-4">
          <input
            placeholder="Email"
            {...register("email", {
              required: { value: true, message: "Email is required" },
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
              required: { value: true, message: "Password is required" },
              minLength: {
                value: 4,
                message: "Password must be at least 4 characters",
              },
              maxLength: {
                value: 20,
                message: "Password must be at most 20 characters",
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

        <div className="mb-4">
          <input
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Confirm Password is required",
              },
              validate: (value) =>
                value === getValues("password") || "Passwords do not match",
            })}
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirmPassword && (
            <div className="mt-1 text-sm text-red-500">
              {errors.confirmPassword.message}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2 font-bold text-white rounded bg-primary hover:bg-secondary focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>

        {errors.formError && (
          <div className="mt-4 text-sm text-red-500">
            {errors.formError.message}
          </div>
        )}

        <div className="mt-4 text-center">
          <h3>
            Already have an account?{" "}
            <Link to="/Login" className="text-red-700 underline">
              Login
            </Link>
          </h3>
        </div>
      </form>
    </div>
  );
}
