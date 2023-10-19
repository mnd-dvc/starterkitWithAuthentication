import {
  Button,
  Col,
  Dropdown,
  Popover,
  Row,
  Space,
  Tooltip,
  Layout,
} from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  DownOutlined,
  LogoutOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import SwitchButton from "../components/DarkModeButton/SwitchButton";
import { useThemeSwitcher } from "react-css-theme-switcher";

function Header() {
  const { currentTheme } = useThemeSwitcher();
  const getItem = (key, icon, children, label, type, className, link) => ({
    key,
    icon,
    children,
    label: <NavLink to={link}>{label}</NavLink>,
    className,
    type,
    link,
  });
  const items = [
    getItem(
      "logout",
      <LogoutOutlined />,
      null,
      "Çıkış Yap",
      null,
      null,
      "/logout"
    ),
  ];
  const menuProps = {
    items,
  };

  const text = <span>SİBER SUÇLARLA MÜCADELE</span>;

  const content = (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Row gutter={12}>
        <Col span={8}>
          <NavLink to={"https://www.egm.gov.tr/siber"}>
            <img
              src="./assets/images/siber.png"
              alt="siber"
              style={{ width: "70px", height: "70px", borderRadius: "50px" }}
            />
          </NavLink>
        </Col>
        <Col span={8}>
          <NavLink to={"https://www.egm.gov.tr/siber"}>
            <img
              src="./assets/images/siber.png"
              alt="siber"
              style={{ width: "70px", height: "70px", borderRadius: "50px" }}
            />
          </NavLink>
        </Col>
        <Col span={8}>
          <NavLink to={"https://www.egm.gov.tr/siber"}>
            <img
              src="./assets/images/siber.png"
              alt="siber"
              style={{ width: "70px", height: "70px", borderRadius: "50px" }}
            />
          </NavLink>
        </Col>
      </Row>
    </div>
  );
  return (
    <>
      <Layout.Header
        style={{ background: currentTheme === "dark" ? "#18191A" : "white" }}
      >
        <Row type="flex" justify="space-between">
          <Col span={12}>
            <span
              style={{
                fontWeight: "bold",
                color: "white",
                display: "flex",
                justifyContent: "center",
              }}
            >
              PAUL SAWYER
            </span>
          </Col>
          <Col className="darkButton">
            <SwitchButton />
          </Col>

          <Popover
            placement="bottom"
            title={text}
            content={content}
            trigger="click"
            style={{ width: "40px", height: "40px" }}
          >
            <AppstoreOutlined
              style={{
                position: "absolute",
                right: "17%",
                top: "25px",
                fontSize: "24px",
              }}
            />
          </Popover>

          <Col>
            <Dropdown menu={menuProps} items={items} className="rightButton">
              <Button>
                <NavLink to="/logout">
                  <Tooltip placement="bottomRight" title="Çıkış Yap"></Tooltip>
                </NavLink>
                <Space>
                  MEHMET NUR DEVECİOĞLU
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </Col>
        </Row>
      </Layout.Header>
    </>
  );
}

export default Header;
