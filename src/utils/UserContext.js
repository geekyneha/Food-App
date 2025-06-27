import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "deafault user",
});

export default UserContext;
