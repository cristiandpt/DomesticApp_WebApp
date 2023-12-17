import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Dashboard from "@/components/worker/home/Dashboard";

const Index = () => {
  return (
    <>
      <Header isClient={false} isWorker={true} />
      <section className="m-16 grid">
        <Dashboard />
      </section>
      <Footer></Footer>
    </>
  );
};

export default Index;
