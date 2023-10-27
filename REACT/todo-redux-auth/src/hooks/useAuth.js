import { useSelector } from "react-redux";

const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
const selectName = (state) => state.auth.name;

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const name = useSelector(selectName);

  return {
    isLoggedIn,
    name,
  };
};
