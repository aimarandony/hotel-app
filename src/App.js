import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.less";
import "./styles/layout.css";
import { Login } from "./pages/login/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Reservation } from "./pages/reservation/Reservation";
import { NotFound } from "./pages/error/NotFound";
import { Dropdown, Layout, Menu } from "antd";

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const App = () => {
  const [auth, setAuth] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  const logout = () => {
    setAuth(false);
  };

  const menu = (
    <Menu style={{ marginRight: "-45px" }} onClick={() => logout()}>
      <Menu.Item>
        <span>
          <LogoutOutlined /> Salir
        </span>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setAuth(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
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
        <Layout className="site-layout">
          <Header className="site-layout-background" style={display2(auth)}>
            <Dropdown overlay={menu} placement="bottomRight">
              <span>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <span style={{ marginLeft: "10px" }}>Aimar Andony</span>
              </span>
            </Dropdown>
          </Header>
          <Content style={{ margin: "0 0" }}>
            <div className="site-layout-background" style={display3(auth)}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Login setAuth={setAuth} auth={auth} />}
                />
                <PrivateRoute
                  exact
                  path="/inicio"
                  component={Dashboard}
                  auth={auth}
                />
                <PrivateRoute
                  exact
                  path="/reserva"
                  component={Reservation}
                  auth={auth}
                />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

const PrivateRoute = ({ auth, component: Component, ...rest }) => {
  useEffect(() => {}, []);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to={{ pathname: "/" }} />
      }
    />
  );
};

const display = (auth) => {
  return {
    display: auth ? "block" : "none",
  };
};

const display2 = (auth) => {
  return {
    display: auth ? "flex" : "none",
  };
};

const display3 = (auth) => {
  return auth
    ? { padding: "20px", minHeight: 360, margin: "20px" }
    : { padding: 0, minHeight: 360, margin: "0" };
};
