import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import { SaveOutlined } from "@ant-design/icons";

import { addRegister } from "../../services/users";
// import openNotification from "../../components/Notifications/Notification";

import { useNavigate } from "react-router-dom";

function CreateAccount() {
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

    addRegister(obj).then((response) => {
      handleLoginSuccess();
    });
  };

  // axios.post('http://localhost:4000/api/adduser',{
  //   username: values.username,
  //   password: values.password,
  // })
  // .then(response => {
  //   console.log(response)
  // })
  // .catch(error => {
  //   console.error(error);
  // });

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
                Kaydet
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default CreateAccount;
