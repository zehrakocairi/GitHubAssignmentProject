import { Link } from "react-router-dom";
import { GitHubRepoItem } from "../../models/modelStack";

type Props = {
  repo: GitHubRepoItem;
};

const RepositoryItem = ({ repo }: Props) => {
  return (
    <Link
      to={`/repo/${repo.owner.login}/${repo.name}`}
      className="block bg-white shadow-md rounded-md p-6 hover:shadow-lg transition-shadow border border-gray-200"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-md font-semibold text-sky-500 text-left hover:text-sky-700 transition-colors">{repo.name}</h3>
        <span className="bg-fuchsia-50 text-indigo-600 text-xs font-medium px-2 py-1 rounded-full">{repo.owner.login}</span>
      </div>
      <p className="text-gray-600 mt-3 text-sm text-left">{repo.description || "No description available"}</p>
      <div className="mt-4 flex items-center text-gray-500 text-xs">
        <span className="mr-2">⭐</span>
        <span>Stars: {repo.stargazers_count || 0}</span>
      </div>
    </Link>
  );
};

export default RepositoryItem;
