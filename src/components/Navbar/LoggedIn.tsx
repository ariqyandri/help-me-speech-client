import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import { logOut } from "../../store/user/action";
import NavbarItem from "./NavbarItem";
import { Button, Dropdown, Image, Nav } from "react-bootstrap";
import { plusCircleFill } from "../../config/icons";

export default function LoggedIn() {
  const history = useHistory();

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = (e: any) => {
    e.preventDefault();
    dispatch(logOut());
    return history.push("/");
  };

  return (
    <>
      <NavbarItem path="/mywritings" linkText="My Writings" />
      <div
        style={{
          display: "flex",
        }}
      >
        <Nav.Item
          style={{
            padding: "0px",
          }}
        >
          <Button
            variant="success"
            style={{
              paddingRight: "8px",
              boxShadow: "none",
            }}
            className="createWritingButton"
            onClick={() => history.push("/mywriting/create")}
          >
            {plusCircleFill()}{" "}
            <span className="createWriting">Create Writing</span>
          </Button>
        </Nav.Item>
        <div
          style={{
            width: "5px",
          }}
        />
        <Dropdown>
          <Dropdown.Toggle
            variant="outline-light"
            style={{
              background: "none",
              border: "none",
              height: "50px",
              padding: "0px",
              marginBottom: "5px",
              marginTop: "5px",
            }}
          >
            <Image
              src={`${user.image}`}
              roundedCircle
              style={{ height: "50px", width: "auto" }}
            />
          </Dropdown.Toggle>
          <Dropdown.Menu align={"right"}>
            <Dropdown.Item disabled>{user.email}</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              onClick={() => {
                history.push("/mywritings");
              }}
            >
              My Writings
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                history.push("/myprofile");
              }}
            >
              My Profile
            </Dropdown.Item>
            <Dropdown.Item onClick={handleLogOut}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}
