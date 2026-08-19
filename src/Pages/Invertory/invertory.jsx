import React, { useState } from 'react';
import { Table, Tag, Button, Input, Select, Modal, Form, Drawer } from "antd";
import { useTranslation } from "react-i18next";
import { Plus, Search, Filter } from "lucide-react";
import "./invertory.css"

const { Option } = Select;

const Invertory = () => {
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
      productName: values.productName,
      supplier: values.supplier,
      stocks: parseInt(values.stocks) || 0,
      status: values.status ? [values.status] : [],
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
          <Search size={18} style={{ color: '#9B74F0', marginLeft: '16px', marginRight: '8px', alignSelf: 'center' }} />
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
          
          <Option value=""><span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}><Filter size={14} /> Filter</span></Option>
          <Option value="available">Available</Option>
          <Option value="out of stock">Out of Stock</Option>
        </Select>
        <Button type="primary" onClick={() => setDrawerVisible(true)} icon={<Plus size={16} />}> Add New</Button>
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
            name="productType"
            label={t('productType')}
            rules={[{ required: true, message: 'Please enter ProductType' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="productName"
            label="Product Name"
            rules={[{ required: true, message: 'Please enter ProductName' }]}
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
            rules={[{ required: true, message: 'Please select Stock' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: 'Please select status' }]}
          >
            <Select placeholder="Select status">
              <Option value="available">Available</Option>
              <Option value="out of stock">Out of Stock</Option>
            </Select>
          </Form.Item>
          
           
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Inventory Item
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default Invertory;