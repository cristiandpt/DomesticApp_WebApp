import JobsCarousel from "@/components/client/home/JobsCarousel";
import GlobalLayout from "@/components/common/GlobalLayout";
import Navbar from "@/components/common/Navbar";

const Index = () => {
  return (
    <GlobalLayout userType={'client'}>
      <section className="m-16 grid">
        <JobsCarousel />
      </section>
    </GlobalLayout>
  );
};

export default Index;
