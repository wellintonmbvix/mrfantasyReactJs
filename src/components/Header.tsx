import * as React from "react";
import { Layout } from "antd";

interface AppHeaderProps {
  children?: React.ReactNode;
}

const { Header } = Layout;

export default function AppHeader({ children }: AppHeaderProps) {
  return <Header className="site-layout-background">{children}</Header>;
}
