import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { PieChartFilled, DropboxSquareFilled } from "@ant-design/icons";

interface AppMenuProps {
  theme?: "dark" | "light";
  mode?: "horizontal" | "inline" | "vertical"
}

export default function AppMenu({ theme = "dark", mode="inline" }: AppMenuProps) {
    const location = useLocation();
  return (
    <>
    <div className="logo" />
      <Menu theme={theme} mode={mode} defaultSelectedKeys={[location.pathname]} >
        <Menu.Item icon={<PieChartFilled />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.SubMenu icon={<DropboxSquareFilled />} title="Cadastros">
          <Menu.Item><Link to="/cadastros/empresas">Empresas</Link></Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </>
  );
}
