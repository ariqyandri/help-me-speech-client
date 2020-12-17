import React from "react";
import { Table } from "react-bootstrap";
import { displayWatch } from "../../config/constants";
import { Lap, Props } from "./types";
import "./LapTable.css";

export default function LapTable(props: Props) {
  return (
    <div className={props.laps.length > 0 ? "bodyTable" : undefined}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {props.laps.map((lap: Lap) => {
            return (
              <tr>
                <td>{lap.num}</td>
                <td>
                  {displayWatch(lap.time.hrs, lap.time.min, lap.time.sec)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
