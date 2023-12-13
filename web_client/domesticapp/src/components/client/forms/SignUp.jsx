const SignUpForm = () => {
  return (
    <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          First Name
        </label>
        <input
          type="text"
          placeholder="John"
          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Last name
        </label>
        <input
          type="text"
          placeholder="Snow"
          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Phone number
        </label>
        <input
          type="text"
          placeholder="XXX-XX-XXXX-XXX"
          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Email address
        </label>
        <input
          type="email"
          placeholder="johnsnow@example.com"
          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Confirm password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div className="w-full">
        <div>
          <label
            htmlFor="file"
            className="block text-sm text-gray-500 dark:text-gray-300"
          >
            File
          </label>
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-gray-500 dark:text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
            <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
              Payment File
            </h2>
            <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
              Upload or darg &amp; drop your file SVG, PNG, JPG or GIF.{" "}
            </p>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>
      <div className="flex items-end">
        <div>
          <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            <span>Sign Up </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 rtl:-scale-x-100"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
