import React from "react";
import "./MainSection.css";

const MainSection = (props) => {
  return (
    <table className="my-table">
      <tbody>
        {props.users.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.lastName}</td>
            <td>{item.age}</td>
            <td>{item.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MainSection;
