import { useRouter } from "next/router";

const JobSearch = () => {
  const router = useRouter();
  const query = router.query;
  console.log("The searched job is: ", query);
  return <></>;
};

export default JobSearch;
