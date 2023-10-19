import { Table } from "antd";
import React, {useState} from "react";

function Tables({ columns, tableData}) { 
  const [SelectedRowCheckBox, setSelectedRowCheckBox] = useState([]); 

  const rowSelection = {
    onchange: (selectedRowKeys, selectedRows) => {
      setSelectedRowCheckBox(selectedRows); 
      console.log(SelectedRowCheckBox);
    }
  }
  return (
    <>
      {/* Table componenti tek yerde yazılır birden fazla sayfada çağrılabilir */}
      <Table
        rowSelection={{
          ...rowSelection,
        }}
        columns={columns}
        dataSource={tableData}
        pagination={{ pageSize: 3 }}
        style={{ padding: "20px" }}
      />
    </>
  );
}

export default Tables;
