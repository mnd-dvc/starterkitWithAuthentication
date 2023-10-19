import { Button, Popconfirm, Tooltip } from "antd";
import React from "react";

import { DeleteOutlined } from "@ant-design/icons";

function RowDelete({ record, handleDelete }) {
  
  return (
    <>
      <Popconfirm
        title="Silmek İStediğinize Emin misiniz?"
        onConfirm={() => handleDelete(record)}
      >
        <Tooltip title="SİL">
          <Button
            style={{ margin: "5px", background: "#F52441" }}
            icon={<DeleteOutlined />}
          />
        </Tooltip>
      </Popconfirm>
    </>
  );
}
export default RowDelete;
