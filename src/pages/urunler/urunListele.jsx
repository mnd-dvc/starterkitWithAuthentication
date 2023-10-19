import { Card, Col, Image, Row } from "antd";
import React from "react";

function UrunListele() {
  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            title="FRIDA KAHLO"
            bordered={false}
            style={{ textAlign: "center", width: 400, height: "100%" }}
          >
            <Image
              src="./assets/images/frida.jpg"
              alt="frida"
              style={{ width: "100%", height: "23vh" }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="VAN GOGH"
            bordered={false}
            style={{ textAlign: "center", width: 400, height: "100%" }}
          >
            <Image
              src="./assets/images/van.jpg"
              alt="van"
              style={{ width: "100%", height: "23vh" }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="EDVARD MUNCH"
            bordered={false}
            style={{ textAlign: "center", width: 400, height: "100%" }}
          >
            <Image
              src="./assets/images/scream.jpg"
              alt="scream"
              style={{ width: "100%", height: "23vh" }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="MONA LİSA"
            bordered={false}
            style={{ textAlign: "center", width: 400, height: "100%" }}
          >
            <Image
              src="./assets/images/lisa.jpg"
              alt="lisa"
              style={{ width: "100%", height: "23vh" }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="GIRL WITH A PEARL EARRING"
            bordered={false}
            style={{ textAlign: "center", width: 400, height: "100%" }}
          >
            <Image
              src="./assets/images/girl.jpg"
              alt="girl"
              style={{ width: "100%", height: "23vh" }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="NAPOLYON BONAPART"
            bordered={false}
            style={{ textAlign: "center", width: 400, height: "100%" }}
          >
            <Image
              src="./assets/images/napolyon.jpg"
              alt="girl"
              style={{ width: "100%", height: "23vh" }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default UrunListele;
