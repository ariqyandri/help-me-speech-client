import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink } from "./type";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`,
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `black`,
    },
  })
);

export default function DenseAppBar() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();
    setSelectedIndex(index);
  };
  console.log(selectedIndex);
  const navLinks: NavLink = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Login", path: "/login" },
    { id: 3, title: "Sign Up", path: "/signup" },
  ];

  return (
    <div className={classes.root}>
      <Toolbar>
        <List
          component="nav"
          aria-labelledby="main navigation"
          className={classes.navDisplayFlex}
        >
          {navLinks.map(({ id, title, path }) => (
            <ListItem
              button
              selected={selectedIndex === id}
              onClick={(event) => handleListItemClick(event, id)}
              key={title}
            >
              <Link to={path} className={classes.linkText}>
                <ListItemText primary={title} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </div>
  );
}
