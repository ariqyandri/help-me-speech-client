import React, { useEffect, useState } from "react";
import { selectToken, selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ProfileForm from "../../components/ProfileForm";
import Loading from "../../components/Loading";
import { Button, Spinner } from "react-bootstrap";
import { selectAppLoading } from "../../store/appState/selectors";
import { pencilFill } from "../../config/icons";
import ProfileDisplay from "../../components/ProfileDisplay";

export default function MyProfile() {
  const token = useSelector(selectToken);
  const history = useHistory();
  const user = useSelector(selectUser);
  const loading = useSelector(selectAppLoading);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (token === null) {
      history.push("/");
    }
  }, [token, history]);

  return (
    <div style={{ width: "500px" }}>
      <h1>Profile Page</h1>
      {user.id === null || loading ? (
        <Loading />
      ) : edit === true ? (
        <ProfileForm user={user} setEdit={setEdit} />
      ) : (
        <>
          <ProfileDisplay user={user} />
          <Button
            variant="success"
            onClick={() => {
              setEdit(true);
            }}
          >
            {pencilFill()}
          </Button>
        </>
      )}
    </div>
  );
}
