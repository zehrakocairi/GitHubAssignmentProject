import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../../api/user";

const SidebarProfile = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserInfo("JakeWharton"),
  });

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error loading user info</div>;

  return (
    <div className="bg-slate-50 md:min-h-[90vh] shadow-xs rounded-lg p-6 text-center">
      <img src={data.avatar_url} alt="profile" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200" />
      <h2 className="text-xl font-semibold">{data.login}</h2>
      <p className="text-gray-500">GitHub User</p>
    </div>
  );
};

export default SidebarProfile;
