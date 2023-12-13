"use client";
import Link from "next/link";
import * as React from "react";
import PropTypes from "prop-types";
import ClientSignUpForm from "@/components/client/forms/SignUp";
import WorkerSignUpForm from "@/components/worker/forms/SignUp";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SignUp = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center min-h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/5"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80")',
          }}
        ></div>
        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
              Get your account now.
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Lets get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>
            <div className="mt-3">
              <Link
                href="/login"
                className="text-sm text-blue-500 hover:underline dark:text-blue-400"
              >
                Already have an account? Log in
              </Link>
            </div>
            <div className="mt-6">
              <h1 className="text-gray-500 dark:text-gray-300">
                Select type of account
              </h1>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="primary"
                    aria-label="basic tabs example"
                  >
                    <Tab
                      sx={{
                        color: "white",
                      }}
                      icon={<PersonIcon />}
                      label="Client"
                      iconPosition="end"
                      {...a11yProps(0)}
                    />
                    <Tab
                      sx={{
                        color: "white",
                      }}
                      icon={<BusinessCenterIcon />}
                      label="Worker"
                      iconPosition="end"
                      {...a11yProps(1)}
                    />
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                  <ClientSignUpForm />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <WorkerSignUpForm />
                </CustomTabPanel>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
