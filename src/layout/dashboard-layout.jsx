import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <Layout>
      <Header
        title="CJ_FE"
        className="relative flex justify-center items-center  text-white h-12 shadow-lg border-b-2 border-b-solid border-black"
        style={{ padding: 0 }}
      >
        <h3>CJ_FE</h3>
        <div className="absolute right-5 ">Logout</div>
      </Header>
      <Layout className="h-[90vh]">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          //   onBreakpoint={(broken) => {
          //     console.log(broken);
          //   }}
          //   onCollapse={(collapsed, type) => {
          //     console.log(collapsed, type);
          //   }}
          zeroWidthTriggerStyle={{
            position: "absolute",
            top: -44,
            left: 10,
            borderTopRightRadius: 0,
            background: "none",
          }}
        >
          {/* <div className="demo-logo-vertical" /> */}
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={["Dashboard", "Inventory List", "Sales"].map(
              (element, index) => ({
                key: String(index + 1),
                icon: undefined,
                label: element,
              })
            )}
          />
        </Sider>
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, minHeight: 360 }}>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}
