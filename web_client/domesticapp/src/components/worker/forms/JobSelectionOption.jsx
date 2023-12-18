import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useFormContext } from "react-hook-form";

const jobType = [
  {
    id: 1,
    name: "Hourly",
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "One time payment",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Daily",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Monthly",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    name: "Weekly",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const JobSelectionOption = ({ jobName }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useFormContext();
  const [checked, setChecked] = React.useState(false);
  const [selected, setSelected] = useState(jobType[3]);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="flex flex-col mb-3 justify-between md:flex-row md:items-center">
      <div>
        <input
          type="checkbox"
          {...register(`checkbox_${jobName}`)}
          checked={checked}
          onChange={handleChange}
          aria-label="controlled"
        />
        <label className="inline mb-2 text-sm text-gray-600 dark:text-gray-200">
          {jobName}
        </label>
      </div>

      {checked && (
        <>
          <div className="relative mt-2 flex">
            <select
              className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-3 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
              {...register(`job_periodicity_${jobName}`, { required: true })}
            >
              {jobType.map((person) => (
                <>
                  <option key={person.id} value={person.id}>
                    {person.name}
                  </option>
                </>
              ))}
            </select>
            <input
              type="number"
              {...register(`price-${jobName}`, { required: true })}
              className="block w-full ml-3 px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </>
      )}
    </div>
  );
};
export default JobSelectionOption;
