import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SidebarProfile from "./SidebarProfile";
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

describe("SidebarProfile", () => {
  it("renders user profile successfully", async () => {
    const fakeUser = {
      login: "zehra",
      avatar_url: "https://example.com/avatar.png",
    };

    const fakeQuery = () => Promise.resolve(fakeUser);

    wrapper(<SidebarProfile queryFn={fakeQuery} />);

    expect(await screen.findByText("zehra")).toBeInTheDocument();
    expect(await screen.findByAltText("profile")).toBeInTheDocument();
  });

  it("renders error message when error thrown", async () => {
    const fakeQuery = () => Promise.reject(new Error("Error happened!"));

    wrapper(<SidebarProfile queryFn={fakeQuery} />);

    const errorMsg = await screen.findByText("Error loading user info");
    expect(errorMsg).toBeInTheDocument();
  });
});
