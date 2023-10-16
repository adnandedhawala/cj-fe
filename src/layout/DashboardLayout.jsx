import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import MenuRouter from "../router/MenuRouter";
import { getMenuItems, menuRoutes } from "../router/constants";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const breadcrumbs = useBreadcrumbs(menuRoutes);

  return (
    <Layout>
      <Header
        title="CJ_FE"
        className="relative flex justify-center items-center  text-white h-12 shadow-lg border-b-2 border-b-solid border-black"
        style={{ padding: 0 }}
      >
        <h3>CJ_FE</h3>
        <div
          className="absolute right-5 hover:cursor-pointer hover:opacity-70 "
          onClick={() => navigate("/")}
        >
          Logout
        </div>
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
          style={{ borderTop: "1px solid #333" }}
        >
          {/* <div className="demo-logo-vertical" /> */}
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={getMenuItems(navigate)}
            triggerSubMenuAction="click"
          />
        </Sider>
        <Content style={{ margin: "24px 16px 0" }}>
          {/* <Breadcrumb
            items={[{ title: "home", path: "home" }, { title: "dash" }]}
          /> */}
          <div className="text-slate-600">
            {breadcrumbs.map(({ breadcrumb }, index) => (
              <>
                {index + 1 === breadcrumbs.length ? (
                  breadcrumb
                ) : (
                  <Link key={breadcrumb.key} to={breadcrumb.key}>
                    {breadcrumb}
                  </Link>
                )}
                {/* <span>{idx}</span> */}
                {index > 0 && index + 1 < breadcrumbs.length && (
                  <span className="mx-1 font-bold text-lg">&#8658;</span>
                )}
              </>
            ))}
          </div>
          <div style={{ padding: 24, minHeight: 360 }}>
            <MenuRouter />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
