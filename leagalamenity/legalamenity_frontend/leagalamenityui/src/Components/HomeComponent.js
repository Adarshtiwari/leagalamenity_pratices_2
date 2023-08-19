import React from "react";
import { Button, Modal } from "antd";
import { useState } from "react";
import Error from "./Error_Component/ErrorPage";
function Home(props) {
  console.warn("props==", props);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Login"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
}

export default Home;
