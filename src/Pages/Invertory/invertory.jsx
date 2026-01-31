import React, { useState } from 'react';
import { Table, Tag, Button, Input, Select, Modal, Form, Drawer } from "antd";
import "./invertory.css"

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
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
  render: status => (
    <>
      {status.map(tag => {
        let color = tag.length > 5 ? 'green' : 'green';
        if (tag === 'out of stock') {
          color = 'red';
        }
        return (
          <Tag color={color} key={tag}>
            {tag.toUpperCase()}
          </Tag>
        );
      })}
    </>
  ),
},
];

const Invertory = () => {
  const [data, setData] = useState([
    {
      key: '1',
      productType: 'Drinks',
      productName: 'Aquafina Bottled Water (0.5L)',
      supplier: 'PepsiCo',
      stocks: 150,
      status: ['available'],
    },
    {
      key: '2',
      productType: 'Snacks',
      productName: 'Cheetos Flamin Hot (100g)',
      supplier: 'PepsiCo',
      stocks: 200,
      status: ['available'],
    },
    {
      key: '3',
      productType: 'Snacks',
      productName: 'Cheetos Flamin Hot (100g)',
      supplier: 'PepsiCo',
      stocks: 200,
      status: ['available'],
    },
    {
      key: '4',
      productType: 'Snacks',
      productName: 'Cheetos Flamin Hot (100g)',
      supplier: 'PepsiCo',
      stocks: 200,
      status: ['available'],
    },
    {
      key: '5',
      productType: 'Protains',
      productName: 'Cheetos Flamin Hot (100g)',
      supplier: 'PepsiCo',
      stocks: 200,
      status: ['out of stock'],
    },
    {
      key: '6',
      productType: 'Snacks',
      productName: 'Cheetos Flamin Hot (100g)',
      supplier: 'PepsiCo',
      stocks: 200,
      status: ['available'],
    },
    {
      key: '7',
      productType: 'Snacks',
      productName: 'Cheetos Flamin Hot (100g)',
      supplier: 'PepsiCo',
      stocks: 200,
      status: ['available'],
    },
    {
      key: '8',
      productType: 'Water',
      productName: 'Coca Cola (500ml)',
      supplier: 'PepsiCo',
      stocks: 200,
      status: ['available'],
    },
    {
      key: '9',
      productType: 'Snacks',
      productName: 'Cheetos Flamin Hot (100g)',
      supplier: 'PepsiCo',
      stocks: 200,
      status: ['out of stock'],
    },
    {
      key: '10',
      productType: 'Snacks',
      productName: 'Cheetos Flamin Hot (100g)',
      supplier: 'PepsiCo',
      stocks: 200,
      status: ['available'],
    },
    {
      key: '11',
      productType: 'Snacks',
      productName: 'Cheetos Flamin Hot (100g)',
      supplier: 'PepsiCo',
      stocks: 200,
      status: ['available'],
    },
    {
      key: '12',
      productType: 'Foods',
      productName: 'Cheetos Flamin Hot (100g)',
      supplier: 'PepsiCo',
      stocks: 200,
      status: ['available'],
    },
    {
      key: '13',
      productType: 'Snacks',
      productName: 'Cheetos Flamin Hot (100g)',
      supplier: 'PepsiCo',
      stocks: 200,
      status: ['available'],
    },
    {
      key: '14',
      productType: 'Snacks',
      productName: 'Cheetos Flamin Hot (100g)',
      supplier: 'PepsiCo',
      stocks: 200,
      status: ['available'],
    },
    {
      key: '15',
      productType: 'Snacks',
      productName: 'Cheetos Flamin Hot (100g)',
      supplier: 'PepsiCo',
      stocks: 200,
      status: ['available'],
    },
    {
      key: '16',
      productType: 'Snacks',
      productName: 'Cheetos Flamin Hot (100g)',
      supplier: 'PepsiCo',
      stocks: 200,
      status: ['available'],
    },
  ]);
  const [searchText, setSearchText] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [form] = Form.useForm();

  const filteredData = data.filter(item =>
    (item.productName && item.productName.toLowerCase().includes(searchText.toLowerCase())) &&
    (filterTag === '' || (item.status && item.status.includes(filterTag)))
  );

  const handleAdd = (values) => {
    const newMember = {
      key: (data.length + 1).toString(),
      productType: values.productType,
      productName: `${values.firstName} ${values.lastName}`,
      supplier: values.supplier,
      stocks: values.stocks,
      status: values.tags || [],
    };
    setData([...data, newMember]);
    setDrawerVisible(false);
    form.resetFields();
  };
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
          <Option value="available">Available</Option>
          <Option value="out of stock">Out of Stock</Option>
        </Select>
        <Button type="primary" onClick={() => setDrawerVisible(true)}> <img src="/pilus.png" alt="" /> Add New</Button>
        </div>
      </div>
      <div className="members-table-wrapper">
        <Table columns={columns} dataSource={filteredData}
          pagination={{
          current: currentPage,
          pageSize: 7,
          total: data.length,
          onChange: (page) => setCurrentPage(page),
    }}
        className="members-table" />
      </div>
      <D
        title="Stock In"
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
            label="Product Type"
            rules={[{ required: true, message: 'Please enter ProductType' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label="Product Name"
            rules={[{ required: true, message: 'Please enter ProductName' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="status"
            label="Supplier"
            rules={[{ required: true, message: 'Please enter Suppilier' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="type"
            label="Stocks"
            rules={[{ required: true, message: 'Please select Stock' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Status"
            label="Status"
            rules={[{ required: true, message: 'Please select status' }]}
          >
            <Select placeholder="Select type">
              <Option value="Admin">Availabel</Option>
              <Option value="User">Stock in out</Option>
            </Select>
          </Form.Item>
          
           
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Member
            </Button>
          </Form.Item>
        </Form>
      </D>
    </div>
  );
};

export default Invertory;