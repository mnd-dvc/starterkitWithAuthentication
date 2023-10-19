import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import { SaveOutlined } from "@ant-design/icons";
import { loginUser } from "../../services/users";
// import openNotification from "../../components/Notifications/Notification";

import { useNavigate } from "react-router-dom";

function Login() {
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const handleLoginSuccess = () => {
    navigate("/homepage");
  };

  const onFinish = (values) => {
    const obj = {
      username: values.username,
      password: values.password,
    };
    console.log("BAŞARILI", obj);

    loginUser(obj).then((response) => {
      handleLoginSuccess();
    });
  };

  // axios
  //   .post("http://localhost:4000/api/login", {
  //     username: values.username,
  //     password: values.password,
  //   })
  //   .then((response) => {
  //     const token =
  //       "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1uZHZjIiwiaWF0IjoxNjk2OTQ0Mjk2LCJleHAiOjE2OTY5ODAyOTZ9.KYwsDy5oRFbL-zXFKVV6XIT7t1zWuLF_oCvcNGwyQ4hfiy1S0MCfneRgQHsNP0nzaaCbEHIf3yp3tb_eBIWHxxqoez7vi_2SKrVtgC6WD0ug-K_b4yKaGnPrrS_4Z1gtC0-b1GXwgN4mfsv1oBrCpxkwT-e5X6N1PI87Ixz1MNMMNEIiUhDhcugc3n6ycJXDXiu-sup0rCI_2HAWQiZGCBzNIYdsjETHitPl20w1SQC9h4dHDyvDqPQBvKHrmpx9mt1ChGQ668heb3GGQv7N5DUr7j5lKvfc68szi5WqMEH_i_QsYNGjfg4VCLtXh1KDNgt8bN0siFx2vPriVIeCwV80U9y21gw5FxxTLCkgZSCByOO1iny0-NmekvdSRIa1GmCqwPb0Y1W_DFjE8nfMBUb_QVsIJv_cNhFS5chHRFFcwm1DaeWazurgWrf5ZkA7daxPIU2UhblvLPKjA0ZQwAyUCdcxC9965VTkZGKjzmXfmYMVT-xwz1IAzWFekJ84";

  //     localStorage.setItem("jwtToken", token);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20%" }}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <strong>
                <Form.Item name="username" label="Username:">
                  <Input />
                </Form.Item>
              </strong>
            </Col>
            <Col span={8}>
              <strong>
                <Form.Item name="password" label="Password:">
                  <Input type="password" />
                </Form.Item>
              </strong>
            </Col>
            <Col span={8}>
              <Button
                type="primary"
                htmlType="submit"
                icon={<SaveOutlined />}
                style={{ marginTop: "30px" }}
              >
                Giriş Yap
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default Login;
