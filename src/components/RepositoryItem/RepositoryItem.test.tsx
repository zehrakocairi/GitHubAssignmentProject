import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RepositoryItem from "./RepositoryItem";
import { GitHubRepoItem } from "../../models/modelStack";

const wrapper = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("RepositoryItem", () => {
  it("renders repo info correctly", () => {
    const fakeRepo: GitHubRepoItem = {
      id: 1,
      name: "awesome-project",
      description: "This project is awesome!",
      stargazers_count: 123,
      owner: {
        login: "zehra",
        id: 42,
      },
    };

    wrapper(<RepositoryItem repo={fakeRepo} />);

    expect(screen.getByText("awesome-project")).toBeInTheDocument();
    expect(screen.getByText("zehra")).toBeInTheDocument();
    expect(screen.getByText("This project is awesome!")).toBeInTheDocument();
    expect(screen.getByText("Stars: 123")).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/repo/zehra/awesome-project");
  });

  it("shows fallback text when description is missing", () => {
    const fakeRepo: GitHubRepoItem = {
      id: 2,
      name: "empty-desc",
      description: "",
      stargazers_count: 0,
      owner: {
        login: "no-desc-owner",
        id: 777,
      },
    };

    wrapper(<RepositoryItem repo={fakeRepo} />);
    expect(screen.getByText("No description available")).toBeInTheDocument();
    expect(screen.getByText("Stars: 0")).toBeInTheDocument();
  });
});
