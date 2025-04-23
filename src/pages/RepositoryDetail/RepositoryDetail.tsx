import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRepoCommitsDetail, getRepoDetail } from "../../api/repositories";
import { GitHubRepoCommit, GitHubRepoItem } from "../../models/modelStack";

type Props = {
  repoQueryFn?: () => Promise<unknown>;
  commitsQueryFn?: () => Promise<unknown>;
};

const RepositoryDetail = ({ repoQueryFn, commitsQueryFn }: Props) => {
  const { owner, name } = useParams<{ owner: string; name: string }>();

  const {
    data: repo,
    isLoading: isRepoLoading,
    error: repoError,
  } = useQuery<GitHubRepoItem>({
    queryKey: ["repo", owner, name],
    queryFn: repoQueryFn || (() => getRepoDetail(owner!, name!)),
  });

  const {
    data: commits,
    isLoading: isCommitsLoading,
    error: commitsError,
  } = useQuery<GitHubRepoCommit[]>({
    queryKey: ["commits", owner, name],
    queryFn: commitsQueryFn || (() => getRepoCommitsDetail(owner!, name!)),
  });

  if (isRepoLoading || isCommitsLoading) return <p className="text-center text-gray-500">Loading...</p>;
  if (repoError || commitsError) return <p className="text-center text-red-500">Error loading data</p>;

  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h1 className="text-2xl font-semibold mt-8 text-indigo-400 mb-4">{repo?.name}</h1>
          <p className="mb-8 font-light text-gray-500 sm:text-xl">{repo?.description || "No description available"}</p>

          <div className="text-sm text-gray-500">
            <p>
              <span className="font-medium text-gray-800">Owner:</span> {repo?.owner.login}
            </p>
            <p>
              <span className="font-medium text-gray-800">Stars:</span> {repo?.stargazers_count || 0}
            </p>
          </div>
        </div>

        <div className=" mt-16">
          <h2 className="text-2xl font-semibold mb-4 ml-2 text-indigo-400 text-left">Last 5 commits</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {commits?.slice(0, 5).map((commit) => (
            <div key={commit.sha} className="flex flex-col justify-start items-start p-8 text-left bg-gray-50 border-b border-gray-200 md:p-12 w-full">
              <div className="mb-2 max-w-full text-gray-500">
                <p className="my-2">
                  <span className="font-medium text-gray-800">Author:</span> {commit.commit.author.name}
                </p>
                <p className="my-2">
                  <span className="font-medium text-gray-800">Date:</span> {new Date(commit.commit.author.date).toLocaleString()}
                </p>
                <p className="my-2">
                  <span className="font-medium text-gray-800">Message:</span> {commit.commit.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepositoryDetail;
