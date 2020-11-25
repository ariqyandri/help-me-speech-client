import React from "react";
import { useSelector } from "react-redux";
import { selectDummy } from "../../store/dummy/selectors";

export default function Home() {
  const dummy = useSelector(selectDummy);
  return <div>{dummy.attr1}</div>;
}
