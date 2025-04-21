import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../../api/user";
const DEFAULT_GITHUB_USER = import.meta.env.VITE_GITHUB_BASE_URL;

const SidebarProfile = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserInfo(DEFAULT_GITHUB_USER),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading user info</div>;

  return (
    <div>
      <div>
        <img src={data.avatar_url} alt="profile" />
      </div>
      <div>
        <p>{data.login} </p>
      </div>
    </div>
  );
};

export default SidebarProfile;
