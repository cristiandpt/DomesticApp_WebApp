import JobsCarousel from "@/components/client/home/JobsCarousel";
import MapWidget from "@/components/client/location/MapWidget";
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
