import Link from "next/link";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LockIcon from "@mui/icons-material/Lock";
const LoginForm = () => {
  return (
    <form className="w-full max-w-md">
      <img
        className="w-auto h-7 sm:h-8"
        src="https://merakiui.com/images/logo.svg"
        alt="App logo"
      />
      <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">
        Log in
      </h1>
      <div className="relative flex items-center mt-8">
        <span className="absolute">
          <LocalPhoneIcon className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
        </span>
        <input
          type="number"
          className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Phone number"
        />
      </div>
      <div className="relative flex items-center mt-4">
        <span className="absolute">
          <LockIcon className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
        </span>
        <input
          type="password"
          className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Password"
        />
      </div>
      <div className="mt-6">
        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
          Sign in
        </button>

        <div className="mt-6 text-center ">
          <Link
            href="/sign-up"
            className="text-sm text-blue-500 hover:underline dark:text-blue-400"
          >
            Don’t have an account yet? Sign up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
