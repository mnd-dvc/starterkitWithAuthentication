import { Button, Modal, Tooltip } from "antd";
import React, { useState } from "react";
import { EyeOutlined } from "@ant-design/icons";

function ModalView({ prop }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = (record) => {
    setIsModalOpen(true);
    setSelectedRowData(record);
  };
  return (
    <>
      <Tooltip title="GÖRÜNTÜLE">
        <Button
          style={{ margin: "5px", background: "#009D7E" }}
          icon={<EyeOutlined />}
          onClick={() => showModal(prop)}
        />
      </Tooltip>
      <Modal
        title="PERSONEL GÖRÜNTÜLEME"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        {selectedRowData && (
          <>
            <p>
              <strong>Sicili : </strong> {selectedRowData.sicil}
            </p>
            <p>
              <strong>Adı : </strong> {selectedRowData.adi}
            </p>
            <p>
              <strong>Soyadı : </strong> {selectedRowData.soyadi}
            </p>
            <p>
              <strong>Şube Adı : </strong> {selectedRowData.sube}
            </p>
            <p>
              <strong>Büro Adı : </strong> {selectedRowData.buro}
            </p>
            <p>
              <strong>EBYS No : </strong> {selectedRowData.ebys}
            </p>
          </>
        )}
      </Modal>
    </>
  );
}

export default ModalView;
