import * as React from "react";
import { Layout } from "antd";

interface AppContentPropst {
  children: React.ReactNode;
}

const { Content } = Layout;

export default function AppContent({ children }: AppContentPropst) {
  return (
    <Content>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        {children}
      </div>
    </Content>
  );
}
