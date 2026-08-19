import React, { useState } from "react";
import { Table, Tag, Button, Input, Select, Modal, Form, Drawer } from "antd";
import { useTranslation } from "react-i18next";
import { Eye, Search, Filter } from "lucide-react";
import "./payments.css";

const { Option } = Select;

const Payments = () => {
  const { t } = useTranslation();
  const [viewingRecord, setViewingRecord] = useState(null);

  const columns = [
    {
      title: t("createdDate"),
      dataIndex: "createdDate",
      key: "createdDate",
    },
    {
      title: t("total"),
      dataIndex: "total",
      key: "total",
    },
    {
      title: t("paymentMethod"),
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: t("type"),
      dataIndex: "type",
      key: "type",
    },
    {
      title: t("term"),
      dataIndex: "term",
      key: "term",
    },
    {
      title: t("paidBy"),
      dataIndex: "paidBy",
      key: "paidBy",
    },
    {
      title: t("action"),
      key: "action",
      render: (_, record) => (
        <span>
          <a
            onClick={() => setViewingRecord(record)}
            style={{ marginRight: 16 }}
            title="View Details"
          >
            <Eye size={18} style={{ color: '#9B74F0' }} />
          </a>
        </span>
      ),
    },
  ];
  const [data, setData] = useState([
    {
      key: "1",
      createdDate: "December 25, 2022 14:17",
      total: "$100",
      paymentMethod: t("checks"),
      type: t("standard"),
      term: "1 Month",
      paidBy: "John Doe",
    },
    {
      key: "2",
      createdDate: "December 26, 2022 10:30",
      total: "$150",
      paymentMethod: t("creditCard"),
      type: t("premium"),
      term: "3 Months",
      paidBy: "Jane Smith",
    },
    {
      key: "3",
      createdDate: "December 27, 2022 09:45",
      total: "$200",
      paymentMethod: t("paypal"),
      type: t("standard"),
      term: "6 Months",
      paidBy: "Alice Johnson",
    },
    {
      key: "4",
      createdDate: "December 28, 2022 11:20",
      total: "$250",
      paymentMethod: t("bankTransfer"),
      type: t("premium"),
      term: "12 Months",
      paidBy: "Bob Brown",
    },
    {
      key: "5",
      createdDate: "December 29, 2022 15:55",
      total: "$300",
      paymentMethod: t("creditCard"),
      type: t("standard"),
      term: "1 Month",
      paidBy: "Charlie Davis",
    },
    {
      key: "6",
      createdDate: "December 30, 2022 13:10",
      total: "$350",
      paymentMethod: "PayPal",
      type: "Premium",
      term: "3 Months",
      paidBy: "Diana Evans",
    },
    {
      key: "7",
      createdDate: "December 31, 2022 16:40",
      total: "$400",
      paymentMethod: "Checks",
      type: "Standard",
      term: "6 Months",
      paidBy: "Frank Green",
    },
    {
      key: "8",
      createdDate: "December 31, 2022 16:40",
      total: "$400",
      paymentMethod: "Checks",
      type: "Standard",
      term: "6 Months",
      paidBy: "Frank Green",
    },
    {
      key: "9",
      createdDate: "December 31, 2022 16:40",
      total: "$400",
      paymentMethod: "Checks",
      type: "Standard",
      term: "6 Months",
      paidBy: "Frank Green",
    },
    {
      key: "10",
      createdDate: "December 31, 2022 16:40",
      total: "$400",
      paymentMethod: "Checks",
      type: "Standard",
      term: "6 Months",
      paidBy: "Frank Green",
    },
    {
      key: "11",
      createdDate: "December 31, 2022 16:40",
      total: "$400",
      paymentMethod: "Checks",
      type: "Standard",
      term: "6 Months",
      paidBy: "Frank Green",
    },
    {
      key: "12",
      createdDate: "December 31, 2022 16:40",
      total: "$400",
      paymentMethod: "Checks",
      type: "Standard",
      term: "6 Months",
      paidBy: "Frank Green",
    },
    {
      key: "13",
      createdDate: "December 31, 2022 16:40",
      total: "$400",
      paymentMethod: "Checks",
      type: "Standard",
      term: "6 Months",
      paidBy: "Frank Green",
    },
    {
      key: "14",
      createdDate: "December 31, 2022 16:40",
      total: "$400",
      paymentMethod: "Checks",
      type: "Standard",
      term: "6 Months",
      paidBy: "Frank Green",
    },
    {
      key: "15",
      createdDate: "December 31, 2022 16:40",
      total: "$400",
      paymentMethod: "Checks",
      type: "Standard",
      term: "6 Months",
      paidBy: "Frank Green",
    },
    {
      key: "16",
      createdDate: "December 31, 2022 16:40",
      total: "$400",
      paymentMethod: "Checks",
      type: "Standard",
      term: "6 Months",
      paidBy: "Frank Green",
    },
  ]);
  const [searchText, setSearchText] = useState("");
  const [filterTag, setFilterTag] = useState("");

  const [form] = Form.useForm();

  const filteredData = data.filter(
    (item) =>
      item.paidBy &&
      item.paidBy.toLowerCase().includes(searchText.toLowerCase()) &&
      (filterTag === "" || (item.type && item.type.includes(filterTag))),
  );
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <div className="uno" style={{ marginBottom: 16 }}>
        <div className="inp">
          <Search size={18} style={{ color: '#9B74F0', marginLeft: '16px', marginRight: '8px', alignSelf: 'center' }} />
          <Input
            placeholder="Search by name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 424, marginRight: 16 }}
          />
        </div>
        <div className="sle">
          <Select
            placeholder="Filter by tag"
            value={filterTag}
            onChange={setFilterTag}
            style={{ width: 126, marginRight: 16 }}
          >
            <Option value="">
              {" "}
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Filter size={14} /> Filter</span>
            </Option>
            <Option value="standart">Standart</Option>
            <Option value="vip">Vip</Option>
            <Option value="bussinues">Bussinues</Option>
          </Select>
        </div>
      </div>
      <h3 className="h3">
        Total Amount of all payments: <span>$12,293.00</span>
      </h3>
      <div className="members-table-wrapper">
        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={{
            current: currentPage,
            pageSize: 7,
            total: data.length,
            onChange: (page) => setCurrentPage(page),
          }}
          className="payments-table"
        />
      </div>

      <Modal
        title="Payment Details"
        open={viewingRecord !== null}
        onCancel={() => setViewingRecord(null)}
        footer={null}
        centered
        style={{ padding: "24px" }}
      >
        {viewingRecord && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            <div>
              <p style={{ margin: 0, color: "#666" }}>Created Date</p>
              <p style={{ margin: "4px 0 16px 0", fontWeight: "bold" }}>
                {viewingRecord.createdDate}
              </p>
            </div>
            <div>
              <p style={{ margin: 0, color: "#666" }}>Total</p>
              <p style={{ margin: "4px 0 16px 0", fontWeight: "bold" }}>
                {viewingRecord.total}
              </p>
            </div>
            <div>
              <p style={{ margin: 0, color: "#666" }}>Payment Method</p>
              <p style={{ margin: "4px 0 16px 0", fontWeight: "bold" }}>
                {viewingRecord.paymentMethod}
              </p>
            </div>
            <div>
              <p style={{ margin: 0, color: "#666" }}>Type</p>
              <p style={{ margin: "4px 0 16px 0", fontWeight: "bold" }}>
                {viewingRecord.type}
              </p>
            </div>
            <div>
              <p style={{ margin: 0, color: "#666" }}>Term</p>
              <p style={{ margin: "4px 0 16px 0", fontWeight: "bold" }}>
                {viewingRecord.term}
              </p>
            </div>
            <div>
              <p style={{ margin: 0, color: "#666" }}>Paid By</p>
              <p style={{ margin: "4px 0 16px 0", fontWeight: "bold" }}>
                {viewingRecord.paidBy}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Payments;
