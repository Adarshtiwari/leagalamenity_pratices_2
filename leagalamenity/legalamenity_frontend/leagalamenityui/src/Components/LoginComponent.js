import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { loginAction } from "../service/actions/actions";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const onFinish = async (values) => {
    console.log("Success:", values);

    // let data = await props.addToCartHandler(values);
    try {
      await dispatch(loginAction(values));
      console.log("props", props);
      navigate("/home");
    } catch (err) {
      let data = err.response.data.status;
      console.log("errrrr", data);
      navigate("/error", { data });
      // <Error props={data} />;
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  console.log("the props login", props);
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      align="middle"
    >
      <Form.Item
        label="Username"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button
          type="link"
          htmlType="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}
export default Login;
