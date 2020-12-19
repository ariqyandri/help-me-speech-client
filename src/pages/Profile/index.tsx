import React, { useEffect } from "react";
import { selectToken, selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import SignupForm from "../../components/SignupForm/index";
import ProfileForm from "../../components/ProfileForm";
import Loading from "../../components/Loading";

export default function Profile() {
  const token = useSelector(selectToken);
  const history = useHistory();
  const user = useSelector(selectUser);
  // console.log(user);
  useEffect(() => {
    if (token === null) {
      history.push("/");
    }
  }, [token, history]);

  return (
    <div style={{ width: "500px" }}>
      <h1>Profile Page</h1>
      {user.id ? <ProfileForm user={user} /> : <Loading />}{" "}
    </div>
  );
}
