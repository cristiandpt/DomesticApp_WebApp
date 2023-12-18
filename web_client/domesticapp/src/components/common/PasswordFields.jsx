import { INVALID_FIELD_CLASSNAMES } from "@/utils/common/styles/constants";
import { useFormContext } from "react-hook-form";
import InvalidField from "./InvalidField";

const PasswordFields = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useFormContext();
  const validateField = (field, validation) => {
    return errors[`${field}`]?.type === validation;
  };
  const fieldHasErrors = (field) => {
    return errors[`${field}`];
  };
  const PASSWORD_REQUIRED = validateField("password", "required");
  const CONFPASSWORD_REQUIRED = validateField("confirm_passwor", "required");
  const PASSWORDS_MATCH = validateField("confirm_password", "validate");

  return (
    <>
      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Password
        </label>
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Enter your password"
          className={`block w-full px-5 py-3 mt-2 ${
            fieldHasErrors("password") ? INVALID_FIELD_CLASSNAMES : ``
          } text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
        />
        {PASSWORD_REQUIRED && (
          <InvalidField message={"This input is required"} />
        )}
      </div>
      <div>
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Confirm password
        </label>
        <input
          type="password"
          {...register("confirm_password", {
            required: true,
            validate: (confirm) => {
              if (watch("password") != confirm) {
                return "Your passwords do no match";
              }
            },
          })}
          placeholder="Re-enter your password"
          className={`block w-full px-5 py-3 mt-2 ${
            fieldHasErrors("confirm_password") ? INVALID_FIELD_CLASSNAMES : ``
          } text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
        />
        {CONFPASSWORD_REQUIRED && (
          <InvalidField message={"This input is required"} />
        )}
        {PASSWORDS_MATCH && (
          <InvalidField message={"The passwords do not match"} />
        )}
      </div>
    </>
  );
};

export default PasswordFields;
