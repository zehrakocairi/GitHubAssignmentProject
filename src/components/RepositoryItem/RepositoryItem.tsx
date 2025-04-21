import { Link } from "react-router-dom";
import { GitHubRepoItem } from "../../models/modelStack";

type Props = {
  repo: GitHubRepoItem;
};

const RepositoryItem = ({ repo }: Props) => {
  return (
    <Link to={`/repo/${repo.owner.login}/${repo.name}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div>
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
      </div>
    </Link>
  );
};

export default RepositoryItem;
