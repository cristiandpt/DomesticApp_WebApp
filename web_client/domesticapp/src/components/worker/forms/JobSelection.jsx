import JobSelectionOption from "./JobSelectionOption";

const jobs = [
  {
    id: 1,
    title: "Landscaping",
  },
  {
    id: 2,
    title: "Lawn mower",
  },
  {
    id: 3,
    title: "Electrician",
  },
  {
    id: 4,
    title: "Private chef",
  },
  {
    id: 5,
    title: "Babysitter",
  },
];

const JobSelection = () => {
  return (
    <div className="mt-6">
      <p className="mb-1 dark:text-gray-200">
        Select one or more jobs you are proficient at:
      </p>
      <section className="flex flex-col mb-6 p-3 border border-gray-500 rounded">
        {jobs?.map((job) => (
          <JobSelectionOption key={job.id} jobName={job?.title} />
        ))}
      </section>
    </div>
  );
};

export default JobSelection;
