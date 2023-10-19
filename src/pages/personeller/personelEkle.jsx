import { Button, Col, Row, Tooltip } from "antd";
import React, { useState } from "react";
import Forms from "./forms";
import Tables from "../../components/DataTables/tables";
import { SyncOutlined } from "@ant-design/icons";
import ModalView from "../../components/ViewCrud/ModalView";
import RowDelete from "../../components/DeleteCrud/RowDelete";
import UpdateCrud from "../../components/UpdateCrud/UpdateCrud";

function PersonelEkle() {
  const [tableData, setTableData] = useState([
    {
      key: "1",
      adi: "Volkan",
      soyadi: "ÖZBEK",
      sicil: "495412",
      sube: "Adli Bilişim",
      buro: "Veri İnceleme",
      durumu: "REDDEDİLDİ",
      ebys: "E-41679045424",
    },
    {
      key: "2",
      adi: "Sinan",
      soyadi: "AKDAL",
      sicil: "454354",
      sube: "Önleme",
      buro: "Sanal Devriye",
      durumu: "ONAYLANDI",
      ebys: "E-41679045424",
    },
    {
      key: "3",
      adi: "Zeynep",
      soyadi: "ŞENTÜRK",
      sicil: "412568",
      sube: "Önleme",
      buro: "Sanal Devriye",
      durumu: "REDDEDİLDİ",
      ebys: "E-41679045424",
    },
    {
      key: "4",
      adi: "Mehmet Nur",
      soyadi: "DEVECİOĞLU",
      sicil: "521836",
      sube: "Bilgi Teknolojileri",
      buro: "Yazılım ve Veritabanı",
      durumu: "BEKLEMEDE",
      ebys: "E-41679045424",
    },
  ]);
  const handleDelete = (record) => {
    const newData = [...tableData];
    const index = newData.findIndex((item) => record.key === item.key);
    if (index > -1) {
      newData.splice(index, 1);
      setTableData(newData);
    }
  };

  const columns = [
    {
      title: "Sicil",
      dataIndex: "sicil",
    },
    {
      title: "Adı",
      dataIndex: "adi",
    },
    {
      title: "Soyadı",
      dataIndex: "soyadi",
    },
    {
      title: "Şube Adı",
      dataIndex: "sube",
    },
    {
      title: "Büro Adı",
      dataIndex: "buro",
    },
    {
      title: "Durumu",
      dataIndex: "durumu",
    },
    {
      title: "EBYS NO",
      dataIndex: "ebys",
    },
    {
      title: "İşlemler",
      dataIndex: "islemler",
      width: "15%",
      render: (_, record) => (
        <>
          <ModalView prop={record} />
          <RowDelete
            record={record}
            tableData={tableData}
            handleDelete={handleDelete}
          />
          <UpdateCrud
            prop={record}
            tableData={tableData}
            setTableData={setTableData}
          />
        </>
      ),
    },
    <>
      <Tooltip title="GÜNCELLE">
        <Button
          style={{ margin: "5px", background: "#3385FF" }}
          icon={<SyncOutlined />}
        />
      </Tooltip>
    </>,
  ];
  // Tabloya yeni veri ekleme
  const updateTableData = (addData) => {
    setTableData((newTableData) => [addData, ...newTableData]);
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Forms updateTableData={updateTableData} />
        </Col>
        <Col span={24}>
          <Tables columns={columns} tableData={tableData} />
        </Col>
      </Row>
    </>
  );
}

export default PersonelEkle;
