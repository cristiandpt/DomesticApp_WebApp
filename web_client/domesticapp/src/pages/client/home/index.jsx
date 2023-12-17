import JobsCarousel from "@/components/client/home/JobsCarousel";
import Navbar from "@/components/common/Navbar";

const Index = () => {
  return (
    <>
      <Navbar isClient />

      <section className="m-16 grid">
        <JobsCarousel />
      </section>
    </>
  );
};

export default Index;
