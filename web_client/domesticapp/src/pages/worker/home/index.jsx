import JobsCarousel from "@/components/worker/home/UpdatesCarousel";
import Navbar from "@/components/common/Navbar";
import { Typography } from "@mui/material";
import JobSearch from "@/pages/client/search/[jobId]";
import JobDashboard from "./dashboard/[jobId]";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import GlobalLayout from "@/components/common/GlobalLayout";


const Index = () => {
  return (
    <GlobalLayout userType={'worker'}>
      <JobDashboard></JobDashboard>
    </GlobalLayout>
       
    
  );
};

export default Index;
