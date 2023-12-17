const RequestService = ({ worker, price }) => {
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <section className="flex flex-col">
      <form onSubmit={handleSumbit}>
        <div className="space-y-1 flex items-center">
          <label htmlFor="firstname" className="font-medium">
            Worker:
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            defaultValue={worker?.first_name}
            readOnly
            className="block w-full rounded-lg ml-3 px-3 py-2 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div className="space-y-1 flex items-center">
          <label htmlFor="jobname" className="font-medium">
            Job:
          </label>
          <input
            type="text"
            id="jobname"
            name="jobname"
            defaultValue={worker?.job?.id}
            readOnly
            className="block w-full rounded-lg ml-3 px-3 mt-3 y-2 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 "
          />
        </div>
        <div className="space-y-1 flex items-center">
          <label htmlFor="price" className="font-medium">
            Price:
          </label>
          <input
            type="text"
            id="price"
            name="price"
            defaultValue={price}
            readOnly
            className="block w-full rounded-lg ml-3 mt-3 px-3 py-2 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 "
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="suggestions" className="font-medium">
            Suggestions:
          </label>
          <textarea
            type="text"
            id="suggestions"
            name="suggestions"
            className="block w-full rounded-lg mt-3 border border-gray-200 px-3 py-2 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-500"
          ></textarea>
        </div>
        <button
          type="submit"
          class="inline-flex items-center mt-3 justify-center space-x-2 rounded-lg border border-teal-700 bg-teal-700 px-4 py-2 font-semibold leading-6 text-white hover:border-teal-600 hover:bg-teal-600 hover:text-white focus:ring focus:ring-teal-400 focus:ring-opacity-50 active:border-teal-700 active:bg-teal-700 dark:focus:ring-teal-400 dark:focus:ring-opacity-90"
        >
          Create
        </button>
      </form>
    </section>
  );
};

export default RequestService;
