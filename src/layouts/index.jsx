import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

// Main Section
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import Footera from "./Footer";

// Main Style CSS
import "./layout.css";
const { Content } = Layout;

function Index() {
  return (
    <Layout>
      <Sidebar className="Container" />
      <Layout>
        <Header />
        <Content className="Content">
          <Outlet />
        </Content>
        <Footera />
      </Layout>
    </Layout>
  );
}

export default Index;
