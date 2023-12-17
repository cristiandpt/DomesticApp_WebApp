import JobsCarousel from "@/components/client/home/JobsCarousel";
import GlobalLayout from "@/components/common/GlobalLayout";
import Navbar from "@/components/common/Navbar";

const Index = () => {
  return (
    <GlobalLayout userType={'client'}>
        <JobsCarousel />
    </GlobalLayout>
  );
};

export default Index;
