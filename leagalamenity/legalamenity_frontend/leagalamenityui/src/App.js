import "./App.css";
import { Form, Row, Col, Input, Button, Icon } from "antd";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import SideBar from "./Components/Layout/SideBar";
import Content from "./Components/RouteComponent";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          height: "100vh",
        }}
      >
        {/* header */}

        <Header />

        <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
          <SideBar></SideBar>
          <Row
            type="flex"
            justify="center"
            align="middle"
            style={{ minHeight: "100vh" }}
          >
            <Content />
          </Row>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
