import { useQuery } from "@tanstack/react-query";
import { getRepositoriesOfUser } from "../../api/repositories";
import { GitHubRepoItem } from "../../models/modelStack";
import RepositoryItem from "../RepositoryItem/RepositoryItem";

type Props = {
  username?: string;
  queryFn?: () => Promise<GitHubRepoItem[]>;
};

const Repositories = ({ username = "JakeWharton", queryFn }: Props) => {
  const { data, isLoading, error } = useQuery<GitHubRepoItem[]>({
    queryKey: ["repos", username],
    queryFn: queryFn || (() => getRepositoriesOfUser(username)),
  });

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error loading repositories</div>;

  return (
    <div>
      <h1 className="text-2xl font-semibold mt-8 text-indigo-400">Repositories</h1>
      <h4 className="text-2xl font-semibold mb-10 mt-0 text-indigo-300 transform translate-x-[60px] translate-y-[-13px] italic">from an Awesome Man!</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data?.map((repo) => (
          <RepositoryItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default Repositories;
