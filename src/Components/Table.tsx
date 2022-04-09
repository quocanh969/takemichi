import React from "react";
import "./Table.css";

interface Props<T> {
  data: T[];
}

export const Table = <T,>({ data }: Props<T>) => {
  return (
    <table style={{ width: "100%" }}>
      {data.map((item) => (
        <tr>
          {Object.values(item).map((value) => (
            <td>{value}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};
