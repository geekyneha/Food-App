import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { MemoryRouter } from "react-router";
import UserContext from "../../utils/UserContext";
it("should load header component with login button", () => {
  render(
    <MemoryRouter>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: "Test User" }}>
          <Header />
        </UserContext.Provider>
      </Provider>
    </MemoryRouter>
  );
});
