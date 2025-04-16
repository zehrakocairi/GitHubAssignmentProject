import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRepoCommitsDetail, getRepoDetail } from "../../api/repositories";
import { GitHubRepoCommit, GitHubRepoItem } from "../../models/modelStack";

const RepositoryDetail = () => {
  const { owner, name } = useParams<{ owner: string; name: string }>();

  const {
    data: repo,
    isLoading: isRepoLoading,
    error: repoError,
  } = useQuery<GitHubRepoItem>({
    queryKey: ['repo', owner, name],
    queryFn: () => getRepoDetail(owner!, name!),
  });

  const {
    data: commits,
    isLoading: isCommitsLoading,
    error: commitsError,
  } = useQuery<GitHubRepoCommit[]>({
    queryKey: ['commits', owner, name],
    queryFn: () => getRepoCommitsDetail(owner!, name!),
  });

  if (isRepoLoading || isCommitsLoading) return <p>Loading...</p>;
  if (repoError || commitsError) return <p>Error loading data</p>;

  return (
    <div>
      <h1>Repository Details</h1>
      <h2>{repo?.name}</h2>
      <p>{repo?.description}</p>
  
      <h3>Last 5 Commits</h3>
      <div>
        {commits?.slice(0, 5).map((commit) => (
          <div key={commit.sha} style={{ marginBottom: "1rem" }}>
            <p><strong>Author:</strong> {commit.commit.author.name}</p>
            <p><strong>Date:</strong> {new Date(commit.commit.author.date).toLocaleString()}</p>
            <p><strong>Message:</strong> {commit.commit.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default RepositoryDetail;
