import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate} from "react-router-dom";

import {login} from "../../features/auth/authSlice.js"
const Login = () => {
  const isLoggedIn = useSelector(state => state.auth.authStatus);
  if(isLoggedIn) return <Navigate to="/app/" />
  const {register, handleSubmit, reset, setFocus, formState: {errors}} = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = ({username, password}) => {
    localStorage.setItem("authStatus", "true");
    localStorage.setItem("userData", JSON.stringify({username, password}));
    dispatch(login({userData :{username, password}}))
    navigate("/app/");
  }
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="mb-8 text-center">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-slate-900 transition-colors hover:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-4"
          >
            Money<span className="text-purple-600">Flow</span>
          </Link>

          <p className="mt-3 text-sm text-slate-500">
            Welcome back. Sign in to continue.
          </p>
        </div>


        {/* Form Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="mb-7">
            <h1 className="text-xl font-semibold text-slate-900">
              Sign in
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Enter your details to access your account.
            </p>
          </div>


          <form className="space-y-5" onSubmit={handleSubmit(handleLogin)} method="post">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all hover:border-slate-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 active:border-purple-500"
                {...register("email", {
                  required : {
                    value : true,
                    message : "email cannot remain empty"
                  }
                })}
              />
            </div>


            {/* Password */}
            <div>
              <div className="mb-1.5 flex items-center justify-between">

                <label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-700"
                >
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-xs font-medium text-purple-600 transition-colors hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                >
                  Forgot password?
                </Link>

              </div>

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all hover:border-slate-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 active:border-purple-500"
                {...register("password", {
                  required : {
                    value : true,
                    message : "email cannot remain empty"
                  }
                })}
              />
            </div>


            {/* Remember me */}
            <div className="flex items-center gap-2">

              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-purple-600 accent-purple-600 focus:ring-2 focus:ring-purple-500/30"
              />

              <label
                htmlFor="remember"
                className="text-sm text-slate-600"
              >
                Remember me
              </label>

            </div>


            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-purple-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 active:scale-[0.99]"
            >
              Sign in
            </button>

          </form>


          {/* Register */}
          <p className="mt-7 text-center text-sm text-slate-500">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="font-semibold text-purple-600 transition-colors hover:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            >
              Create one
            </Link>

          </p>

        </div>


        {/* Back to landing */}
        <div className="mt-6 text-center">

          <Link
            to="/"
            className="text-xs font-medium text-slate-400 transition-colors hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
          >
            ← Back to MoneyFlow
          </Link>

        </div>

      </div>

    </main>
  );
};

export default Login;