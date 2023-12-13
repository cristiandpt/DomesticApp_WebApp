const PersonalData = ({ isClient }) => {
  return (
    <>
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
          placeholder="Doe"
          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Phone number
        </label>
        <input
          type="number"
          placeholder="XXX-XXX-XXXX"
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
          Birth date
        </label>
        <input
          type="date"
          placeholder="01-02-2023"
          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          {isClient ? "Street addres (Main)" : "Street address"}
        </label>
        <input
          type="text"
          placeholder="Cra. 100 #91-64"
          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
    </>
  );
};

export default PersonalData;
