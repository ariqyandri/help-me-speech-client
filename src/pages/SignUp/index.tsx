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
    <div>
      <SignupForm />
    </div>
  );
}
