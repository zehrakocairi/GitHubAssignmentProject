import { useQuery } from "@tanstack/react-query";
import { getRepositoriesOfUser } from "../../api/repositories";
import { GitHubRepoItem } from "../../models/modelStack";
import RepositoryItem from "../RepositoryItem/RepositoryItem";

const Repositories = ({ username = "JakeWharton" }: { username?: string }) => {
  const { data, isLoading, error } = useQuery<GitHubRepoItem[]>({
    queryKey: ["repos", username],
    queryFn: () => getRepositoriesOfUser(username),
  });

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error loading repositories</div>;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-10 mt-8 text-slate-800">Repositories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data?.map((repo) => (
          <RepositoryItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default Repositories;
