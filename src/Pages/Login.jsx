import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Login successful!");
    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>

        <div className="mb-4">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <input
            {...register("password", {
              required: "Password is required",
            })}
            placeholder="Password"
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white rounded bg-primary hover:bg-secondary focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>

        <div className="mt-4 text-center">
          <h3>
            Not registered?{" "}
            <Link to="/register" className="text-red-700 underline">
              Create an account
            </Link>
          </h3>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
}
