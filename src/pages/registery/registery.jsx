import React from "react";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

function Registery() {
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20%" }}
      >
        <NavLink to="/createaccount">
          <Button type="primary">CREATE ACCOUNT</Button>
        </NavLink>

        <NavLink to="/login">
          <Button type="primary" danger>
            LOG IN
          </Button>
        </NavLink>
      </div>
    </>
  );
}

export default Registery;
