import JobsCarousel from "@/components/worker/home/UpdatesCarousel";
import Navbar from "@/components/common/Navbar";
import { Typography } from "@mui/material";
import JobSearch from "@/pages/client/search/[jobId]";
import JobDashboard from "./dashboard/[jobId]";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";


const Index = () => {
  return (
    <>
       <Header isClient={false} isWorker={true} />

      <section className="m-16 grid">
        <JobDashboard />
      </section>
      <Footer></Footer>
    </>
  );
};

export default Index;
