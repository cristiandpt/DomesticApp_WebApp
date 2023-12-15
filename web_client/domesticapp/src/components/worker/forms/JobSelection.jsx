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
    <>
      {jobs?.map((job) => (
        <JobSelectionOption key={job.id} jobName={job?.title} />
      ))}
    </>
  );
};

export default JobSelection;
