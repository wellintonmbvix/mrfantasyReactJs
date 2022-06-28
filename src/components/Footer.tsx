import * as React from "react";
import { Layout } from "antd";

interface AppFooterProps {
  children: React.ReactNode;
}

const { Footer } = Layout;

export default function AppFooter({ children }: AppFooterProps) {
  return <Footer style={{ textAlign: "center" }}>{children}</Footer>;
}
