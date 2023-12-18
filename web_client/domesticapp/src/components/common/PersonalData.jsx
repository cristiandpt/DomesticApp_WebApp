import { useFormContext } from "react-hook-form";

import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InvalidField from "./InvalidField";
import { INVALID_FIELD_CLASSNAMES } from "@/utils/common/styles/constants";

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
  const requiredInput = "This input is required";
  const FIRST_NAME_REQUIRED = validateField("first_name", "required");
  const LAST_NAME_REQUIRED = validateField("last_name", "required");
  const PHONE_REQUIRED = validateField("phone", "required");
  const VALID_PHONE = validateField("phone", "pattern");
  const PHONE_LENGTH = validateField("phone", "maxLength");
  const BIRTH_DATE_REQUIRED = validateField("phone", "required");
  const EMAIL_REQUIRED = validateField("email", "required");
  const ADDRESS_REQUIRED = validateField("address", "required");

  return (
    <>
      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          First Name
        </label>
        <input
          type="text"
          {...register("first_name", { required: true })}
          placeholder="John"
          className={`block w-full px-5 py-3 mt-2 text-gray-700 ${
            fieldHasErrors("first_name") ? INVALID_FIELD_CLASSNAMES : ``
          } placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
        />
        {FIRST_NAME_REQUIRED && <InvalidField message={requiredInput} />}
      </div>
      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Last name
        </label>
        <input
          type="text"
          {...register("last_name", { required: true })}
          placeholder="Doe"
          className={`block w-full px-5 py-3 mt-2 ${
            fieldHasErrors("last_name") ? INVALID_FIELD_CLASSNAMES : ``
          }text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
        />
        {LAST_NAME_REQUIRED && <InvalidField message={requiredInput} />}
      </div>
      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Phone number
        </label>
        <input
          type="number"
          {...register("phone", {
            required: true,
            pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
            maxLength: 10,
          })}
          placeholder="XXX-XXX-XXXX"
          className={`block w-full px-5 py-3 mt-2 ${
            fieldHasErrors("phone") ? INVALID_FIELD_CLASSNAMES : ``
          } text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
        />
        {(PHONE_REQUIRED && <InvalidField message={requiredInput} />) ||
          (VALID_PHONE && (
            <InvalidField message={"This does not look like a phone number"} />
          )) ||
          (PHONE_LENGTH && (
            <InvalidField message={"Your phone cannot exceed 10 digits"} />
          ))}
      </div>
      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Email address
        </label>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="johnsnow@example.com"
          className={`block w-full px-5 py-3 mt-2 ${
            fieldHasErrors("phone") ? INVALID_FIELD_CLASSNAMES : ``
          } text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
        />
        {EMAIL_REQUIRED && <InvalidField message={requiredInput} />}
      </div>
      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Birth date
        </label>
        <input
          type="date"
          {...register("birth_date", { required: true })}
          placeholder="01-02-2023"
          className={`block w-full px-5 py-3 mt-2 ${
            fieldHasErrors("phone") ? INVALID_FIELD_CLASSNAMES : ``
          } text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
        />
        {BIRTH_DATE_REQUIRED && <InvalidField message={requiredInput} />}
      </div>
      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          {isClient ? "Street addres (Main)" : "Street address"}
        </label>
        <input
          type="text"
          placeholder="Cra. 100 #91-64"
          {...register("address", { required: true })}
          onClick={handleClick}
          className={`block w-full px-5 py-3 mt-2 ${
            fieldHasErrors("phone") ? INVALID_FIELD_CLASSNAMES : ``
          } text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
        />
        {ADDRESS_REQUIRED && <InvalidField message={requiredInput} />}

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
