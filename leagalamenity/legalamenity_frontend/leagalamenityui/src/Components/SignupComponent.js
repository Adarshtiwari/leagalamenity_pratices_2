import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  password,
} from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { signupAction } from "../service/actions/actions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const REGEX_UPPER_CASE = /[A-Z]+/;
  const REGEX_DIGI_CASE = /[0-9]+/;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [componentSize, setComponentSize] = useState("default");
  const [email, setemail] = useState(0);
  const [password, setPassword] = useState(0);
  const [phone, setPhone] = useState(0);
  const [user, setUser] = useState({});
  const [Passingyear, setPassingyear] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [selectvalue, setselectvalue] = useState(true);
  const [errorstatus, seterrorstatus] = useState(true);
  const [errors, seterrors] = useState([]);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const createPayload = async () => {
    if (selectvalue) {
      setUser({
        email: email,
        password: password,
        phone: phone,
        student: {
          Passingyear: Passingyear,
          collegeName: collegeName,
        },
      });
    } else {
      setUser({
        email: email,
        password: password,
        phone: phone,
        law_graduate: {
          Passingyear: Passingyear,
        },
      });
    }
  };

  const onFinish = async (props) => {
    console.log("fined", password);
    // let setPassword = await validatePassword(password);
    // alert(setPassword);
    if (selectvalue) {
      try {
        console.log("student ");
        createPayload();
        console.log("the users student", user);
        await dispatch(signupAction(user));
        console.log("the propsss ", props);

        navigate("/home");
      } catch (err) {
        let data = err.response.data.status;
        console.log("errrrr", data);
        navigate("/error", { data });
      }
    } else {
      try {
        console.log("law_graduate ");
        createPayload();
        console.log("the users law_graduate ", user);
        await dispatch(signupAction(user));
        console.log("the propsss ", props);

        navigate("/home");
      } catch (err) {
        let data = err.response.data.status;
        console.log("errrrr", data);
        navigate("/error", { data });
      }
    }
  };

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="email">
        <Input
          onChange={async (e) => {
            setemail(e.target.value);
            await createPayload();
          }}
        />
      </Form.Item>
      <Form.Item label="Select">
        <Select
          onChange={(value) => {
            console.log(value);
            if (value == "law_graduate") {
              setselectvalue(false);
            } else {
              setselectvalue(true);
            }
          }}
          name="category"
          placeholder="Please select a category"
        >
          <Select.Option value="student">student</Select.Option>
          <Select.Option value="law_graduate">law_graduate</Select.Option>
        </Select>
      </Form.Item>
      Input
      <Form.Item>
        {selectvalue ? (
          <div>
            <Form.Item label="passing year">
              <DatePicker
                onChange={(e, s) => {
                  console.log(s);
                  setPassingyear(s);
                }}
                format="YYYY-MM-DD"
              />
            </Form.Item>
            <Form.Item label="college">
              <Input
                onChange={(e) => {
                  console.log(e);
                  setCollegeName(e.target.value);
                }}
              />
            </Form.Item>
          </div>
        ) : (
          <div>
            <Form.Item label="passing year">
              <DatePicker
                onChange={async (e, s) => {
                  console.log(s);

                  await setPassingyear(s);
                  await createPayload();
                }}
                format="YYYY-MM-DD"
              />
            </Form.Item>
          </div>
        )}
      </Form.Item>
      <Form.Item label="InputNumber">
        <Input
          name="phone"
          onChange={async (e) => {
            setPhone(e.target.value);
            await createPayload();
          }}
        />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password
          name="password"
          onChange={async (e) => {
            console.log(e.target.value);
            setPassword(e.target.value);
            let p = e.target.value;
            console.log("the password ", p);
            if (p.length < 8) {
              //   seterrors.push("Your password must be at least 8 characters");
              //   seterrorstatus(true);
              console.log("Your password must be at least 8 characters");
            } else if (p.match(/[a-z]/i) < 0) {
              //   seterrors.push("Your password must contain at least one letter.");
              //   seterrorstatus(true);
              console.log("Your password must contain at least one letter.");
            } else if (p.match(/[0-9]/) < 0) {
              //   seterrors.push("Your password must contain at least one digit.");
              //   seterrorstatus(true);
              console.log("Your password must contain at least one digit.");
            }
            await createPayload();
          }}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item label="Button">
        <Button
          onClick={() => {
            onFinish();
          }}
        >
          Button
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Signup;
