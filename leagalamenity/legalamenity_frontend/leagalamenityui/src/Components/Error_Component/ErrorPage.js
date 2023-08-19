import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

function Error(props) {
  let navigate = useNavigate();
  console.log("eror page", props);
  return (
    <Result
      status={props.StatusCode}
      title={props.StatusType}
      subTitle={props.StatusMessage}
      extra={
        <Button
          type="primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Back Home
        </Button>
      }
    />
  );
}
export default Error;
