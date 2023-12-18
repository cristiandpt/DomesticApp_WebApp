import Dashboard from "@/components/worker/home/Dashboard";
import GlobalLayout from "@/components/common/GlobalLayout";

const Index = () => {
  return (
    <GlobalLayout userType={"worker"}>
      <Dashboard />
    </GlobalLayout>
  );
};

export default Index;
