import React, { useState } from 'react';
import { Table, Tag, Button, Input, Select, Modal, Form, Drawer } from "antd";
import { useTranslation } from "react-i18next";
import "./payments.css"

const { Option } = Select;

const Payments = () => {
  const { t } = useTranslation();
  
  const columns = [
    {
      title: t('createdDate'),
      dataIndex: 'createdDate',
      key: 'createdDate',
    },
    {
      title: t('total'),
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: t('paymentMethod'),
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
    },
    {
      title: t('type'),
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: t('term'),
      dataIndex: 'term',
      key: 'term',
    },
    {
      title: t('paidBy'),
      dataIndex: 'paidBy',
      key: 'paidBy',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <span>
          <a style={{ marginRight: 16 }}> <img src="/koz.png" alt="" /> {record.lastName}</a>
         
        </span>
      ),
    },
  ];
  const [data, setData] = useState([
    {
      key: '1',
      createdDate: 'December 25, 2022 14:17',
      total: '$100',
      paymentMethod: 'Checks',
      type: 'Standard',
        term: '1 Month',
        paidBy: 'John Doe',
    },
    {
        key: '2',
        createdDate: 'December 26, 2022 10:30',
        total: '$150',
        paymentMethod: 'Credit Card',
        type: 'Premium',
        term: '3 Months',
        paidBy: 'Jane Smith',
    },
    {
      key: '3',
        createdDate: 'December 27, 2022 09:45',
        total: '$200',
        paymentMethod: 'PayPal',
        type: 'Standard',
        term: '6 Months',
        paidBy: 'Alice Johnson',
    },
    {
      key: '4',
        createdDate: 'December 28, 2022 11:20',
        total: '$250',
        paymentMethod: 'Bank Transfer',
        type: 'Premium',
        term: '12 Months',
        paidBy: 'Bob Brown',
    },
    {
      key: '5',
        createdDate: 'December 29, 2022 15:55',
        total: '$300',
        paymentMethod: 'Credit Card',
        type: 'Standard',
        term: '1 Month',
        paidBy: 'Charlie Davis',
    },
    {
      key: '6',
        createdDate: 'December 30, 2022 13:10',
        total: '$350',
        paymentMethod: 'PayPal',
        type: 'Premium',
        term: '3 Months',
        paidBy: 'Diana Evans',
    },
    {
      key: '7',
        createdDate: 'December 31, 2022 16:40',
        total: '$400',
        paymentMethod: 'Checks',
        type: 'Standard',
        term: '6 Months',
        paidBy: 'Frank Green',
    },
    {
      key: '8',
        createdDate: 'December 31, 2022 16:40',
        total: '$400',
        paymentMethod: 'Checks',
        type: 'Standard',
        term: '6 Months',
        paidBy: 'Frank Green',
    },
    {
      key: '9',
        createdDate: 'December 31, 2022 16:40',
        total: '$400',
        paymentMethod: 'Checks',
        type: 'Standard',
        term: '6 Months',
        paidBy: 'Frank Green',
    },
    {
      key: '10',
        createdDate: 'December 31, 2022 16:40',
        total: '$400',
        paymentMethod: 'Checks',
        type: 'Standard',
        term: '6 Months',
        paidBy: 'Frank Green',
    },
    {
      key: '11',
        createdDate: 'December 31, 2022 16:40',
        total: '$400',
        paymentMethod: 'Checks',
        type: 'Standard',
        term: '6 Months',
        paidBy: 'Frank Green',
    },
    {
      key: '12',
        createdDate: 'December 31, 2022 16:40',
        total: '$400',
        paymentMethod: 'Checks',
        type: 'Standard',
        term: '6 Months',
        paidBy: 'Frank Green',
    },
    {
      key: '13',
        createdDate: 'December 31, 2022 16:40',
        total: '$400',
        paymentMethod: 'Checks',
        type: 'Standard',
        term: '6 Months',
        paidBy: 'Frank Green',
    },
    {
      key: '14',
        createdDate: 'December 31, 2022 16:40',
        total: '$400',
        paymentMethod: 'Checks',
        type: 'Standard',
        term: '6 Months',
        paidBy: 'Frank Green',
    },
    {
      key: '15',
        createdDate: 'December 31, 2022 16:40',
        total: '$400',
        paymentMethod: 'Checks',
        type: 'Standard',
        term: '6 Months',
        paidBy: 'Frank Green',
    },
    {
      key: '16',
        createdDate: 'December 31, 2022 16:40',
        total: '$400',
        paymentMethod: 'Checks',
        type: 'Standard',
        term: '6 Months',
        paidBy: 'Frank Green',
    },
  ]);
  const [searchText, setSearchText] = useState('');
  const [filterTag, setFilterTag] = useState('');

  const [form] = Form.useForm();

  const filteredData = data.filter(item =>
    (item.paidBy && item.paidBy.toLowerCase().includes(searchText.toLowerCase())) &&
    (filterTag === '' || (item.type && item.type.includes(filterTag)))
  );
  const [currentPage, setCurrentPage] = useState(1);

 

  return (
    <div >
      <div className ='uno' style={{ marginBottom: 16 }}>
        <div  className="inp">

          <img src="/search.png" alt="" />
          <Input
          placeholder="Search by name"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
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
          
          <Option value=""> <img src="/filter.png" alt="" /> Filter</Option>
          <Option value="standart">Standart</Option>
          <Option value="vip">Vip</Option>
          <Option value="bussinues">Bussinues</Option>
        </Select>
        
        </div>
      </div>
      <h3 className='h3'>Total Amount of all payments: <span>$12,293.00</span></h3>
      <div className="members-table-wrapper">
        <Table columns={columns} dataSource={filteredData} 
        pagination={{
        current: currentPage,
        pageSize: 7,
        total: data.length,
        onChange: (page) => setCurrentPage(page),
        }}
        className="payments-table" />
      </div>
     
    </div>
  );
};

export default Payments;