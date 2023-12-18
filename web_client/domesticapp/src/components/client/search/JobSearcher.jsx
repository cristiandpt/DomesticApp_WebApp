import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";
import { defaultJobSearchOption } from "@/utils/client/constants";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const JobSearcher = ({ selectedJob, setSelectedJob, jobOptions }) => {
  return (
    <Listbox value={selectedJob} onChange={setSelectedJob}>
      {({ open }) => (
        <>
          <div className="relative mt-2 mr-3">
            <Listbox.Label className="inline text-sm font-medium leading-6 text-gray-900">
              Search jobs
            </Listbox.Label>
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selectedJob.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <KeyboardArrowDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <Link
                  href={{
                    pathname: "/client/search/[jobId]",
                    query: { jobId: "all" },
                  }}
                >
                  <Listbox.Option
                    key={"all"}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={defaultJobSearchOption}
                  >
                    {({ selectedJob, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selectedJob ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            All jobs
                          </span>
                        </div>

                        {selectedJob ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                </Link>

                {jobOptions.map((job) => (
                  <Link
                    href={{
                      pathname: "/client/search/[jobId]",
                      query: { jobId: job?.id },
                    }}
                  >
                    <Listbox.Option
                      key={job.id}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-indigo-600 text-white" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={job}
                    >
                      {({ selectedJob, active }) => (
                        <>
                          <div className="flex items-center">
                            <span
                              className={classNames(
                                selectedJob ? "font-semibold" : "font-normal",
                                "ml-3 block truncate"
                              )}
                            >
                              {job.name}
                            </span>
                          </div>

                          {selectedJob ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  </Link>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default JobSearcher;
