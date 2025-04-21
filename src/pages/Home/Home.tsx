import Repositories from "../../components/Repositories/Repositories";
import SidebarProfile from "../../components/SidebarProfile/SidebarProfile";

const Home = () => {
  return (
    <div className="min-h-screen text-gray-800">
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <SidebarProfile />
        </div>
        <div className="md:col-span-3">
          <Repositories />
        </div>
      </div>
    </div>
  );
};

export default Home;
