import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import AppHeader from "./Header";
import AppContent from "./Content";
import AppFooter from "./Footer";
import { PieChartFilled, DropboxSquareFilled } from "@ant-design/icons";

interface AppLayoutPropst {
  children: React.ReactNode;
  theme?: "dark" | "light";
  mode?: "horizontal" | "inline" | "vertical";
}

const { Sider } = Layout;

export default function AppLayout({
  children,
  theme = "dark",
  mode = "inline",
}: AppLayoutPropst) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme={theme}
          mode={mode}
          defaultSelectedKeys={[location.pathname]}
        >
          <Menu.Item key="/" >
            <PieChartFilled />
            <span>Dashboard</span>
            <Link to="/"></Link>
          </Menu.Item>
          <Menu.SubMenu icon={<DropboxSquareFilled />} title="Cadastros">
            <Menu.Item key="/cadastros/empresas" >
              <Link to="/cadastros/empresas">Empresas</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <AppHeader />
        <AppContent>{children}</AppContent>
        <AppFooter>Ant Design ©2018 Created by Ant UED</AppFooter>
      </Layout>
    </Layout>
  );
}
