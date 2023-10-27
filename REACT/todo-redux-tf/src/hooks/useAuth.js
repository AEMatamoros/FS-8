import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectLoggedin } from "../redux-toolkit-slice-thunk/selectors/authSelector";
export default function useAuth() {
  const isLoggedIn = useSelector(selectLoggedin);
  return { isLoggedIn };
}
