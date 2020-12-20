import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { selectAppLoading } from "../../store/appState/selectors";
import ProfileDisplay from "../../components/ProfileDisplay";
import { selectOtherUser } from "../../store/otherUser/selector";
import { fetchOtherUser } from "../../store/otherUser/action";

export default function Profile() {
  const params: { id: any } = useParams();
  console.log(params);
  const dispatch = useDispatch();
  const user = useSelector(selectOtherUser);
  const loading = useSelector(selectAppLoading);
  useEffect(() => {
    dispatch(fetchOtherUser(params.id));
  }, [dispatch, params.id]);

  return (
    <div style={{ width: "500px" }}>
      <h1>Profile Page</h1>
      {user.id === null || loading ? (
        <Loading />
      ) : (
        <ProfileDisplay user={user} />
      )}
    </div>
  );
}
