import React from "react";
import { Typography } from "antd";
import Marquee from "react-fast-marquee";

function Footera() {
  return (
    <div className="layout-footer">
      <Marquee pauseOnHover gradient={false}>
        <Typography.Text type="secondary">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Siber Suçlarla Mücadele Daire
          Başkanlığı&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x2022;
        </Typography.Text>
        <Typography.Text>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Personelimizin Haftalık Yemek Kaydını
          Cuma Günleri Saat&nbsp;
          <span style={{ color: "black" }}>15:00</span>&apos;a kadar yapması
          gerekmektedir.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Typography.Text>
        <Typography.Text type="secondary">
          &#x2022;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Siber Suçlarla Mücadele Daire
          Başkanlığı&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Typography.Text>
      </Marquee>
    </div>
  );
}

export default Footera;
