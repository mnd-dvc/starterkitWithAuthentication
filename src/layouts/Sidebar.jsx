import React from "react";
import { Layout, Menu } from "antd";

import { useThemeSwitcher } from "react-css-theme-switcher";
import {
  UserOutlined,
  ShopOutlined,
  LogoutOutlined,
  NotificationOutlined,
  FormOutlined,
  ShoppingOutlined,
  InteractionOutlined,
  UserAddOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const { currentTheme } = useThemeSwitcher();

  const getItem = (label, key, icon, children, type, link) => ({
    key,
    icon,
    children,
    label: <NavLink to={link}>{label}</NavLink>,
    type,
    link,
  });
  const items = [
    getItem("İdari Büro", "1", <UserOutlined />, [
      getItem(
        "İdari Büro Duyuru",
        "duyuru",
        <NotificationOutlined />,
        null,
        null,
        "/idariburoduyuru"
      ),
      getItem(
        "İdari Büro Nöbetler",
        "nobet",
        <FormOutlined />,
        null,
        null,
        "/idariburonobetler"
      ),
    ]),

    getItem("Personeller", "2", <UserOutlined />, [
      getItem(
        "Personel Ekle",
        "ekle",
        <UserAddOutlined />,
        null,
        null,
        "/personelekle"
      ),
      getItem(
        "Personel Göster",
        "goster",
        <UsergroupDeleteOutlined />,
        null,
        null,
        "/personelgoster"
      ),
    ]),

    getItem("Ürünler", "3", <ShopOutlined />, [
      getItem(
        "Ürünleri Listele",
        "listele",
        <ShoppingOutlined />,
        null,
        null,
        "/urunlistele"
      ),
      getItem(
        "Ürünleri Güncelle",
        "guncelle",
        <InteractionOutlined />,
        null,
        null,
        "/urunguncelle"
      ),
    ]),

    getItem("Çıkış Yap", "4", <LogoutOutlined />, null, null, "/logout"),
  ];
  return (
    <>
      <Layout.Sider trigger={null}>
        <NavLink to="/homepage">
          <p className="SiderLogo">PAUL SAWYER</p>
        </NavLink>
        <Menu
          style={{ background: currentTheme === "dark" ? "#18191A" : "white" }}
          className="menu"
          mode="inline"
          items={items}
        />
      </Layout.Sider>
    </>
  );
}

export default Sidebar;
