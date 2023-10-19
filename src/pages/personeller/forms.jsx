import React from "react";
import { Button, Col, Form, Input, Row } from "antd";
import { DeleteOutlined, SaveOutlined } from "@ant-design/icons";
import "./forms.css";

function FormAdd({ updateTableData }) {
  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    updateTableData(values);
  };
  return (
    <>
    <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{padding:'20px'}}
      >
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <strong>
              <Form.Item name="adi" label="Adı:">
                <Input />
              </Form.Item>
            </strong>
          </Col>
          <Col span={6}>
            <strong>
              <Form.Item name="soyadi" label="Soyadı:">
                <Input />
              </Form.Item>
            </strong>
          </Col>
          <Col span={6}>
            <strong>
              <Form.Item name="sicil" label="Sicil:">
                <Input />
              </Form.Item>
            </strong>
          </Col>
          <Col span={6}>
            <strong>
              <Form.Item name="sube" label="Şube Adı:">
                <Input />
              </Form.Item>
            </strong>
          </Col>
          <Col span={6}>
            <strong>
              <Form.Item name="buro" label="Büro Adı:">
                <Input />
              </Form.Item>
            </strong>
          </Col>
          <Col span={6}>
            <strong>
              <Form.Item name="ebys" label="EBYS NO:">
                <Input />
              </Form.Item>
            </strong>
          </Col>
          <div className="bttns">
            <Button
              icon={<DeleteOutlined />}
              onClick={() => {
                form.resetFields();
              }}
              className="btn1"
            >
              Temizle
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SaveOutlined />}
              className="btn2"
            >
              Kaydet
            </Button>
          </div>
        </Row>
      </Form>
    </>
  )
}

export default FormAdd;
