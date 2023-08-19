import React from "react";
import { Image, Col, Row } from "antd";
function Header() {
  return (
    <Row>
      <Col
        span={18}
        push={2}
        style={{
          height: 60,
          width: 100,
          backgroundColor: "lightskyblue",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        <div>header the</div>
      </Col>
      <Col span={2} pull={18}>
        <div>
          <Image
            width={50}
            height={40}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>
      </Col>
    </Row>
  );
}
// exports.default = Header;
export default Header;
