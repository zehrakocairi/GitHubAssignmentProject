import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import RepositoryDetail from "./RepositoryDetail";
import { GitHubRepoCommit, GitHubRepoItem } from "../../models/modelStack";

const wrapper = (ui: React.ReactElement, route: string = "/zehra/test-repo") => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  // I had no idea how to test parameters in url and I used AI to help me. All credits goes to ChatGPT :)
  return render(
    <MemoryRouter initialEntries={[route]}>
      <QueryClientProvider client={client}>
        <Routes>
          <Route path="/:owner/:name" element={ui} />
        </Routes>
      </QueryClientProvider>
    </MemoryRouter>
  );
};

describe("RepositoryDetail", () => {
  it("renders repo details and commits successfully", async () => {
    const fakeRepo = {
      id: 1,
      name: "test-repo",
      description: "A cool test repo",
      owner: { login: "zehra" },
      stargazers_count: 99,
    } as GitHubRepoItem;

    const fakeCommits = [
      {
        sha: "abc123",
        commit: {
          author: { name: "Zehra", date: "2024-04-22T08:00:00Z" },
          message: "Added test coverage",
        },
      } as GitHubRepoCommit,
    ];

    const repoQueryFn = () => Promise.resolve(fakeRepo);
    const commitsQueryFn = () => Promise.resolve(fakeCommits);

    wrapper(<RepositoryDetail repoQueryFn={repoQueryFn} commitsQueryFn={commitsQueryFn} />);

    expect(await screen.findByText("test-repo")).toBeInTheDocument();
    expect(await screen.findByText("A cool test repo")).toBeInTheDocument();
    expect(await screen.findByText("Owner:")).toBeInTheDocument();
    expect(await screen.findByText("Zehra")).toBeInTheDocument();
    expect(await screen.findByText("99")).toBeInTheDocument();
    expect(await screen.findByText("Added test coverage")).toBeInTheDocument();
  });

  it("shows error if queryFns throw errors", async () => {
    const repoQueryFn = () => Promise.reject(new Error("Repo failed"));
    const commitsQueryFn = () => Promise.reject(new Error("Commits failed"));

    wrapper(<RepositoryDetail repoQueryFn={repoQueryFn} commitsQueryFn={commitsQueryFn} />);

    expect(await screen.findByText("Error loading data")).toBeInTheDocument();
  });

  it("shows loading state", () => {
    const repoQueryFn = () => new Promise(() => {});
    const commitsQueryFn = () => new Promise(() => {});

    wrapper(<RepositoryDetail repoQueryFn={repoQueryFn} commitsQueryFn={commitsQueryFn} />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
