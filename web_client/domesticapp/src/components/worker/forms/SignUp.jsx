import PasswordFields from "@/components/common/PasswordFields";
import PersonalData from "@/components/common/PersonalData";
import JobSelection from "./JobSelection";
import { FormProvider, useForm } from "react-hook-form";
import InvalidField from "@/components/common/InvalidField";

const SignUpForm = () => {
  const formMethods = useForm();
  const { register } = formMethods;
  const validateField = (field, validation) => {
    return formMethods.formState.errors[`${field}`]?.type === validation;
  };
  const fieldHasErrors = (field) => {
    return formMethods.formState.errors[`${field}`];
  };
  const PFP_REQUIRED = validateField("pfp_url", "required");
  const CC_REQUIRED = validateField("cc_url", "required");
  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(
          (fields) => console.log("Sumbitted data:", fields),
          (e) => console.log("There was this error", e)
        )}
      >
        <section className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
          <PersonalData />
          <PasswordFields />
          <div className="w-full">
            <div>
              <label
                htmlFor="file"
                className="block text-sm text-gray-500 dark:text-gray-300"
              >
                Profile picture
              </label>
              <label
                htmlFor="dropzone-pfp-file"
                className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-500 dark:text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                  Profile picture file
                </h2>
                <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                  Upload your file SVG, PNG, JPG or GIF.{" "}
                </p>
                <input
                  id="dropzone-pfp-file"
                  type="file"
                  {...register("pfp_url", { required: true })}
                  className="hidden"
                />
              </label>
              {PFP_REQUIRED && (
                <InvalidField message={"This field is required"} />
              )}
            </div>
          </div>
          <div className="w-full">
            <div>
              <label
                htmlFor="file"
                className="block text-sm text-gray-500 dark:text-gray-300"
              >
                Identification
              </label>
              <label
                htmlFor="dropzone-id-file"
                className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-500 dark:text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                  ID file
                </h2>
                <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                  Upload your file SVG, PNG, JPG or GIF.{" "}
                </p>
                <input
                  id="dropzone-id-file"
                  {...register("cc_url", { required: true })}
                  type="file"
                  className="hidden"
                />
              </label>
              {CC_REQUIRED && (
                <InvalidField message={"This field is required"} />
              )}
            </div>
          </div>
        </section>

        <JobSelection />
        <div className="flex items-end">
          <div>
            <button
              type="submit"
              className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
