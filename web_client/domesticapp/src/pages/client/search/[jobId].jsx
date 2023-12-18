import JobSearcher from "@/components/client/search/JobSearcher";
import JobSorter from "@/components/client/search/JobSorter";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  defaultJobSearchOption,
  defaultJobSortOption,
} from "@/utils/client/constants";
import { Avatar, Button, Rating } from "@mui/material";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import { useRouter } from "next/router";
import { useState } from "react";
import RequestServiceModal from "@/components/client/modals/RequestServiceModal";
import RequestService from "@/components/client/forms/RequestService";

const jobOptions = [
  {
    id: 1,
    name: "Wade Cooper",
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Arlene Mccoy",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Devon Webb",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Tom Cook",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    name: "Tanya Fox",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    name: "Hellen Schmidt",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 7,
    name: "Caroline Schultz",
    avatar:
      "https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 8,
    name: "Mason Heaney",
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 9,
    name: "Claudie Smitham",
    avatar:
      "https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 10,
    name: "Emil Schaefer",
    avatar:
      "https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const sortOptions = [
  {
    id: 1,
    name: "Rating",
  },
  {
    id: 2,
    name: "Distance",
  },
  {
    id: 3,
    name: "Price",
  },
];

const workers = [
  {
    id: "cbb2392b-debc-42f1-afa2-ed696ae8c67f",
    first_name: "Miltie",
    last_name: "Kettlesing",
    rating: 3.0,
    distance: 3.6,
    price: 1,
  },
  {
    id: "ca70f1c7-d31e-4cab-bfd9-ff8a3fa1f530",
    first_name: "Catlin",
    last_name: "Claessens",
    rating: 4.2,
    distance: 4.14,
    price: 64,
  },
  {
    id: "91049cbc-3432-4dc2-b2a5-0178a5d00dad",
    first_name: "Axel",
    last_name: "Dronsfield",
    rating: 1.3,
    distance: 3.91,
    price: 31,
  },
  {
    id: "b84ef89b-33f5-42ba-b2a8-276703ca29b9",
    first_name: "Trenna",
    last_name: "Bonnell",
    rating: 2.1,
    distance: 1.09,
    job: {
      id: 1,
      name: "Landscaping",
    },
    price: 69,
  },
  {
    id: "090ef182-53f2-4fe0-92af-26b14dce740f",
    first_name: "Arv",
    last_name: "Cannavan",
    rating: 2.3,
    distance: 1.88,
    price: 32,
  },
  {
    id: "79f390e0-d550-4d8e-871e-4159b8b77df4",
    first_name: "Kipper",
    last_name: "Dumphrey",
    rating: 4.8,
    distance: 6.22,
    price: 17,
  },
  {
    id: "3477763e-70eb-455a-9cdc-4c5de7325213",
    first_name: "Jada",
    last_name: "Westwick",
    rating: 1.8,
    distance: 9.46,
    price: 22,
  },
  {
    id: "3ee9c3f4-0628-4d14-a8d8-5423655c7ed0",
    first_name: "Jeniffer",
    last_name: "Koppel",
    rating: 1.7,
    distance: 9.34,
    price: 84,
  },
  {
    id: "4a656a5b-8bb5-4a0b-a881-3be41ea3a8a8",
    first_name: "Kerrie",
    last_name: "Hockell",
    rating: 2.7,
    distance: 1.88,
    price: 63,
  },
  {
    id: "5010957b-d5ee-414d-99d1-ba21705abdad",
    first_name: "Robbyn",
    last_name: "Gowdridge",
    rating: 3.1,
    distance: 2.49,
    price: 21,
  },
];
const JobSearch = () => {
  const router = useRouter();
  const query = router.query;
  const allJobs = "all";
  const [selectedJob, setSelectedJob] = useState(defaultJobSearchOption);
  const [selectedSortOption, setSelectedSortOption] =
    useState(defaultJobSortOption);
  const [requestModal, setRequestModal] = useState(false);
  const [requestWorker, setRequestWorker] = useState(null);
  console.log("The requested worker is:", requestWorker);
  console.log("The selected job is:", selectedJob);
  return (
    <>
      <p> The job your are looking for is: {query.jobId}</p>
      <main className="m-6">
        <section className="mb-3 flex justify-between md:justify-start">
          <JobSearcher
            selectedJob={selectedJob}
            setSelectedJob={setSelectedJob}
            jobOptions={jobOptions}
          />
          <JobSorter
            selectedSortOption={selectedSortOption}
            setSelectedSortOption={setSelectedSortOption}
            sortOptions={sortOptions}
          />
        </section>

        <section>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 ">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider md:text-left"
                        >
                          Worker
                        </th>
                        {selectedJob?.id === allJobs && (
                          <th
                            scope="col"
                            className="max-[768px]:hidden px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider md:text-left"
                          >
                            Job
                          </th>
                        )}
                        <th
                          scope="col"
                          className="max-[768px]:hidden px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Rating
                        </th>
                        <th
                          scope="col"
                          className="max-[768px]:hidden px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Distance
                        </th>
                        <th
                          scope="col"
                          className="max-[768px]:hidden px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="max-[768px]:hidden px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Request
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {workers?.map((worker) => (
                        <>
                          <tr className="md:hidden ">
                            <td className="flex justify-between gap-x-6 py-5 px-3">
                              <div className="flex min-w-0 gap-x-4 items-center">
                                <img
                                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                  src="https://picsum.photos/200"
                                  alt=""
                                />
                                <div className="min-w-0 flex-auto">
                                  <p className="text-sm font-semibold leading-6 text-gray-900">
                                    {`${worker?.first_name} ${worker?.last_name}`}
                                  </p>
                                  <Rating
                                    name={`${worker?.id}-rating`}
                                    defaultValue={worker?.rating}
                                    precision={0.1}
                                    readOnly
                                    size="small"
                                  />
                                  {selectedJob?.id === allJobs && (
                                    <p className="text-sm font-semibold leading-6 text-gray-900">
                                      {worker?.job?.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <div className="mb-1 flex justify-between">
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold bg-green-100 text-green-800">
                                    {`${worker?.distance} km`}
                                  </span>
                                  <span className="px-2 inline-flex ml-5 items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                                    {`$${worker?.price}`}
                                  </span>
                                </div>

                                <Button
                                  variant="outlined"
                                  endIcon={<RequestPageIcon />}
                                  onClick={() => {
                                    setRequestModal(true);
                                    setRequestWorker({
                                      ...requestWorker,
                                      ...worker,
                                    });
                                  }}
                                >
                                  Request
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr
                            className="max-[768px]:hidden"
                            key={`product-item-${worker.id}`}
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <Avatar>
                                    <AccountCircleIcon />
                                  </Avatar>
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {/* {product.title} */}{" "}
                                    {`${worker?.first_name} ${worker?.last_name}`}
                                  </div>
                                </div>
                              </div>
                            </td>
                            {selectedJob?.id === allJobs && (
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                  {worker?.job?.name}
                                </div>
                              </td>
                            )}
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                <Rating
                                  name={`${worker?.id}-rating`}
                                  defaultValue={worker?.rating}
                                  precision={0.1}
                                  readOnly
                                />
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {/* {`$ ${product.price}`} */}{" "}
                                {`${worker?.distance} km`}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                                {`$${worker?.price}`}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                              <button
                                type="button"
                                className="text-indigo-600 hover:text-indigo-900"
                                onClick={() => {
                                  setRequestModal(true);
                                  setRequestWorker({
                                    ...requestWorker,
                                    ...worker,
                                  });
                                }}
                              >
                                Request
                              </button>
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <RequestServiceModal
          open={requestModal}
          setOpen={setRequestModal}
          modalTitle={"Request information"}
        >
          <RequestService worker={requestWorker} price={24} />
        </RequestServiceModal>
      </main>
    </>
  );
};

export default JobSearch;
