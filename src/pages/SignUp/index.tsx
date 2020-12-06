import React, { useEffect } from "react";
import { selectToken } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import SignupForm from "../../components/SignupForm/index";

export default function Login() {
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  return (
    <div style={{ width: "500px" }}>
      <h1>Sign up</h1>
      <SignupForm />
    </div>
  );
}
