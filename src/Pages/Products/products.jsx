import React, { useState } from 'react';
import { Table,  Button, Input, Select, Modal, Form, Drawer } from "antd";
import { useTranslation } from "react-i18next";
import "./products.css"

const { Option } = Select;

const Products = () => {
  const { t } = useTranslation();
  
  const columns = [
    {
      title: t('productType'),
      dataIndex: 'productType',
      key: 'productType',
    },
    {
      title: t('productName'),
      dataIndex: 'productName',
      key: 'productName',
    },
    
    {
      title: t('unitPrice'),
      dataIndex: 'unitPrice',
      key: 'unitPrice',
    },
    
    {
      title: t('supplier'),
      dataIndex: 'supplier',
      key: 'supplier',
    },
    {
      title: t('stocks'),
      dataIndex: 'stocks',
      key: 'stocks',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <span>
          <a style={{ marginRight: 16 }}> <img src="/qalam.png" alt="" /> {record.lastname  }</a>
          <a><img src="/delete.png" alt="" /></a>
        </span>
      ),
    },
  ];
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
      // status: ['cool', 'teacher'],
    },
    {
      key: '8',
      productType: 'Drinks',
      productName: 'Aquafina Bottled Water (0.5L)',
      unitPrice: "$1.50",
      supplier: 'PepsiCo',
      stocks: 150,
    },
    {
      key: '9',
      productType: 'Drinks',
      productName: 'Aquafina Bottled Water (0.5L)',
      unitPrice: "$1.50",
      supplier: 'PepsiCo',
      stocks: 150,
    },
    {
      key: '10',
      productType: 'Drinks',
      productName: 'Aquafina Bottled Water (0.5L)',
      unitPrice: "$1.0",
      supplier: 'PepsiCo',
      stocks: 150,
    },
    {
      key: '11',
      productType: 'Drinks',
      productName: 'Aquafina Bottled Water (0.5L)',
      unitPrice: "$1.50",
      supplier: 'PepsiCo',
      stocks: 150,
    },
    {
      key: '12',
      productType: 'Drinks',
      productName: 'Aquafina Bottled Water (0.5L)',
      unitPrice: "$1.50",
      supplier: 'PepsiCo',
      stocks: 150,
    },
    {
      key: '13',
      productType: 'Drinks',
      productName: 'Aquafina Bottled Water (0.5L)',
      unitPrice: "$1.50",
      supplier: 'PepsiCo',
      stocks: 150,
    },
    {
      key: '14',
      productType: 'Drinks',
      productName: 'Aquafina Bottled Water (0.5L)',
      unitPrice: "$1.50",
      supplier: 'PepsiCo',
      stocks: 150,
    },
    {
      key: '15',
      productType: 'Snacks',
      productName: 'Aquafina Bottled Water (0.5L)',
      unitPrice: "$1.770",
      supplier: 'PepsiCo',
      stocks: 150,
    },
    {
      key: '16',
      productType: 'Drinks',
      productName: 'Aquafina Bottled Water (0.5L)',
      unitPrice: "$1.50",
      supplier: 'PepsiCo',
      stocks: 150,
    },
    {
      key: '17',
      productType: 'Foods',
      productName: 'Aquafina Bottled Water (0.5L)',
      unitPrice: "$2.50",
      supplier: 'PepsiCo',
      stocks: 450,
    },
    {
      key: '18',
      productType: 'Drinks',
      productName: 'Aquafina Bottled Water (0.5L)',
      unitPrice: "$1.50",
      supplier: 'PepsiCo',
      stocks: 150,
    },
  ]);
  const [searchText, setSearchText] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [form] = Form.useForm();

  const filteredData = data.filter(item =>
    (item.productName && item.productName.toLowerCase().includes(searchText.toLowerCase())) &&
    (filterTag === '' || (item.productType && item.productType.includes(filterTag)))
  );

  const handleAdd = (values) => {
    const newMember = {
      key: (data.length + 1).toString(),
      productType: `${values.productType}`,
      productName: `${values.productName}`,
      unitPrice: values.unitPrice,
      supplier: values.supplier,
      stocks: values.stocks,
      status: values.tags || [],
      type: values.type,
      expireTime: values.expireTime,
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
          <Option value=""><img src="/filter.png" alt="" /> Filter</Option>
          <Option value="Drinks">Drinks</Option>
          <Option value="Clothes">Clothes</Option>
          <Option value="Supplements">Supplements</Option>
          <Option value="Food">Food</Option>
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
            name="productType"
            label=" Product Type"
            rules={[{ required: true, message: 'Please enter Product Type' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="productName"
            label="Product Name"
            rules={[{ required: true, message: 'Please enter Product Name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="unitPrice"
            label="Unit Price"
            rules={[{ required: true, message: 'Please enter Unit Price' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="supplier"
            label="Supplier"
            rules={[{ required: true, message: 'Please enter Supplier' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="stocks"
            label="Stocks"
            rules={[{ required: true, message: 'Please enter Stocks' }]}
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