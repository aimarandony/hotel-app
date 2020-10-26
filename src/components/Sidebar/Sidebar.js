import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../../styles/layout.css";

const { SubMenu } = Menu;

export const Sidebar = ({ auth }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      style={display(auth)}
    >
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <NavLink to="/inicio">Inicio</NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <NavLink to="/reserva">Reserva</NavLink>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

const display = (auth) => {
  return {
    display: auth ? "auto" : "none",
  };
};
