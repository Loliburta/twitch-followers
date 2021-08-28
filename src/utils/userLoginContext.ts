import { createContext } from "react";

type overviewContextProps = [
  userLogin: string,
  setOverviewBox: React.Dispatch<React.SetStateAction<any>>
];

export const userLoginContext = createContext<overviewContextProps>(["", () => { }]);