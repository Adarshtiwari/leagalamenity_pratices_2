import {
  UploadOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  AccountBookOutlined,
  RedEnvelopeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React, { Children } from "react";
const { Header, Content, Footer, Sider } = Layout;

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Menu
        onClick={({ key }) => {
          if (key === "signout") {
          } else {
            console.log("navigate key ", key);
            navigate(key);
          }
        }}
        items={[
          { label: "login", key: "/login", icon: <UserOutlined /> },
          { label: "Home", key: "/", icon: <HomeOutlined /> },
          { label: "AboutUs", key: "/home", icon: <AccountBookOutlined /> },
          {
            label: "Events",
            key: "Events",
            icon: <RedEnvelopeOutlined />,
            children: [{ label: "events1" }],
          },
          { label: "ContactUs", key: "/error", icon: <HomeOutlined /> },
        ]}
      ></Menu>
    </>
  );
};
export default SideBar;
