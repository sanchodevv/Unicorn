import React, { useState } from 'react';
import { Table,  Button, Input, Select, Modal, Form, Drawer } from "antd";
import "./products.css"

const { Option } = Select;

const columns = [
  {
    title: 'Product Type',
    dataIndex: 'productType',
    key: 'productType',
  },
  {
    title: 'Product Name',
    dataIndex: 'productName',
    key: 'productName',
  },
  
  {
    title: 'Unit Price',
    dataIndex: 'unitPrice',
    key: 'unitPrice',
  },
  
  {
    title: 'Supplier',
    dataIndex: 'supplier',
    key: 'supplier',
  },
  {
    title: 'Stocks',
    dataIndex: 'stocks',
    key: 'stocks',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <span>
        <a style={{ marginRight: 16 }}> <img src="/qalam.png" alt="" /> {record.lastName}</a>
        <a><img src="/delete.png" alt="" /></a>
      </span>
    ),
  },
];

const Products = () => {
  const [data, setData] = useState([
    {
      key: '1',
      productType: 'Drinks',
      productName: 'Aquafina Bottled Water (0.5L)',
      unitPrice: "$1.50",
      supplier: 'PepsiCo',
      stocks: 150,
    },
    {
      key: '2',
     productType: 'Drinks',
      productName: 'Aquafina Bottled Water (0.5L)',
      unitPrice: "$1.50",
      supplier: 'PepsiCo',
      stocks: 150,
    },
    {
      key: '3',
      productType: 'Drinks',
      productName: 'Aquafina Bottled Water (0.5L)',
      unitPrice: "$1.50",
      supplier: 'PepsiCo',
      stocks: 150,
    },
    {
      key: '4',
      productType: 'Drinks',
      productName: 'Aquafina Bottled Water (0.5L)',
      unitPrice: "$1.50",
      supplier: 'PepsiCo',
      stocks: 150,
    },
    {
      key: '5',
      productType: 'Drinks',
      productName: 'Aquafina Bottled Water (0.5L)',
      unitPrice: "$1.50",
      supplier: 'PepsiCo',
      stocks: 150,
    },
    {
      key: '6',
      productType: 'Drinks',
      productName: 'Aquafina Bottled Water (0.5L)',
      unitPrice: "$1.50",
      supplier: 'PepsiCo',
      stocks: 150,
    },
    {
      key: '7',
      productType: 'Drinks',
      productName: 'Aquafina Bottled Water (0.5L)',
      unitPrice: "$1.50",
      supplier: 'PepsiCo',
      stocks: 150,
      status: ['cool', 'teacher'],
    },
    {
      key: '8',
      productType: 'Drinks',
      productName: 'Aquafina Bottled Water (0.5L)',
      unitPrice: "$1.50",
      supplier: 'PepsiCo',
      stocks: 150,
      status: ['cool', 'teacher'],
      type: 'Moderator',
      expireTime: 'in 1 month',
    },
  ]);
  const [searchText, setSearchText] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [form] = Form.useForm();

  const filteredData = data.filter(item =>
    (item.name && item.name.toLowerCase().includes(searchText.toLowerCase())) &&
    (filterTag === '' || (item.status && item.status.includes(filterTag)))
  );

  const handleAdd = (values) => {
    const newMember = {
      key: (data.length + 1).toString(),
      name: `${values.firstName} ${values.lastName}`,
      phoneNumber: values.phoneNumber,
      status: values.tags || [],
      type: values.type,
      expireTime: values.expireTime,
    };
    setData([...data, newMember]);
    setDrawerVisible(false);
    form.resetFields();
  };

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
          
          <Option value="">All <img src="/filter.png" alt="" /></Option>
          <Option value="nice">Nice</Option>
          <Option value="developer">Developer</Option>
          <Option value="loser">Loser</Option>
          <Option value="cool">Cool</Option>
          <Option value="teacher">Teacher</Option>
        </Select>
        <Button type="primary" onClick={() => setDrawerVisible(true)}> <img src="/pilus.png" alt="" /> Add New</Button>
        </div>
      </div>
      <div className="members-table-wrapper">
        <Table columns={columns} dataSource={filteredData} className="members-table" />
      </div>
      <Drawer
        title="Add New Member"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        size={400}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleAdd}
        >
          <Form.Item
            name="firstName"
            label=" Name"
            rules={[{ required: true, message: 'Please enter Name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[{ required: true, message: 'Please enter phone number' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: 'Please enter status' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="type"
            label="Type"
            rules={[{ required: true, message: 'Please select type' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="type"
            label="Type"
            rules={[{ required: true, message: 'Please select type' }]}
          >
            <Select placeholder="Select type">
              <Option value="Admin">Admin</Option>
              <Option value="User">User</Option>
              <Option value="Moderator">Moderator</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="expireTime"
            label="Expire Time"
            rules={[{ required: true, message: 'Please enter expire time' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="tags"
            label="Tags"
          >
            <Select mode="multiple" placeholder="Select tags">
              <Option value="nice">Nice</Option>
              <Option value="developer">Developer</Option>
              <Option value="loser">Loser</Option>
              <Option value="cool">Cool</Option>
              <Option value="teacher">Teacher</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Member
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default Products;