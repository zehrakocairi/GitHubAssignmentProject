import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Repositories from "./Repositories";
import { BrowserRouter } from "react-router-dom";

const wrapper = (ui: React.ReactElement) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return render(
    <BrowserRouter>
      <QueryClientProvider client={client}>{ui}</QueryClientProvider>
    </BrowserRouter>
  );
};

describe("Repositories", () => {
  it("renders repo list successfully", async () => {
    const fakeRepos = [
      {
        id: 1,
        name: "test-repo",
        description: "some description",
        owner: { login: "owner name", id: 999 },
        stargazers_count: 42,
      },
    ];

    const fakeQuery = () => Promise.resolve(fakeRepos);

    wrapper(<Repositories username="zehra" queryFn={fakeQuery} />);

    expect(await screen.findByText("test-repo")).toBeInTheDocument();
    expect(await screen.findByText("some description")).toBeInTheDocument();
  });

  it("renders error message when error thrown", async () => {
    const fakeQuery = () => Promise.reject(new Error("Error happened!"));

    wrapper(<Repositories queryFn={fakeQuery} />);

    const errorMsg = await screen.findByText("Error loading repositories");
    expect(errorMsg).toBeInTheDocument();
  });
});
