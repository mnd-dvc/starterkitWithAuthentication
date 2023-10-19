import { Button, Form, Input, Modal, Select, Tooltip } from "antd";
import React from "react";
import { SyncOutlined } from "@ant-design/icons";

const { confirm } = Modal;

function UpdateCrud({ prop, tableData, setTableData }) {

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const dataUpdate = (object) => {
    const selectDataUpdate = {
      durumum: object.durumu,
      ebysno: object.ebys,
    };
    confirm({
      title: "Güncelleme",
      icon: <SyncOutlined />,
      content: (
        <Form
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          labelAlign="left"
          initialValues={{
            durumum: object.durumu,
            ebysno: object.ebys,
          }}
        >
          <strong>
            <Form.Item label="Durumu" name="durumum">
              <Select 
               onChange={(handleChange) => {
                selectDataUpdate.durumum = handleChange;
              }}
              options={[
                {
                  value: 'ONAYLANDI',
                  label: 'ONAYLANDI',
                },
                {
                  value: 'BEKLEMEDE',
                  label: 'BEKLEMEDE',
                },
                {
                  value: 'REDDEDİLDİ',
                  label: 'REDDEDİLDİ',
                },
              ]}
              />
            </Form.Item>
          </strong>
          <strong>
            <Form.Item label="EBYS NO" name="ebysno">
              <Input
                onChange={(e) => {
                  selectDataUpdate.ebysno = e.target.value;
                }}
                value={selectDataUpdate.ebysno}
              />
            </Form.Item>
          </strong>
        </Form>
      ),
      onOk() {
        const newTableData = tableData.map((tableData) => {
          if (tableData.key === object.key) {
            const newData = {
              ...tableData,
              durumu: selectDataUpdate.durumum,
              ebys: selectDataUpdate.ebysno,
            };
            return newData;
          } else {
            return tableData;
          }
        });
        setTableData(newTableData);
      },
      closable: true,
      width: 600,
    });
  };

  return (
    <>
      <Tooltip>
        <Button
          onClick={() => dataUpdate(prop)}
          icon={<SyncOutlined />}
          style={{ margin: "5px", background: "#3385FF" }}
        />
      </Tooltip>
    </>
  );
}

export default UpdateCrud;
