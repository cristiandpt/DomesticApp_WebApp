import { useFormContext } from "react-hook-form";

import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const PersonalData = ({ isClient }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();
  const validateField = (field, validation) => {
    return errors[`${field}`]?.type === validation;
  };
  const fieldHasErrors = (field) => {
    return errors[`${field}`];
  };
  const FIRST_NAME_REQUIRED = validateField("first_name", "required");
  const LAST_NAME_REQUIRED = validateField("last_name", "required");
  const PHONE_REQUIRED = validateField("phone", "required");

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
          onClick={handleClick}
          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>
            Please follow this structure, Street Name Street Number # Plate,
            City, Country
          </Typography>
        </Popover>
      </div>
    </>
  );
};

export default PersonalData;
