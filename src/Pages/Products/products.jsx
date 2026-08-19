import React, { useState } from 'react';
import { Table,  Button, Input, Select, Modal, Form, Drawer } from "antd";
import { useTranslation } from "react-i18next";
import { Edit2, Trash2, Plus, Search, Filter } from "lucide-react";
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
        <span className="loq">
          <a onClick={() => handleEdit(record)} style={{ marginRight: 16 }} title="Edit">
            <Edit2 size={16} style={{ color: '#9B74F0' }} />
          </a>
          <a onClick={() => handleDelete(record.key)} title="Delete">
            <Trash2 size={16} style={{ color: '#ff4d4f' }} />
          </a>
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
  const [editingRecord, setEditingRecord] = useState(null);
  const [form] = Form.useForm();

  const handleEdit = (record) => {
    setEditingRecord(record);
    form.setFieldsValue({
      productType: record.productType,
      productName: record.productName,
      unitPrice: record.unitPrice,
      supplier: record.supplier,
      stocks: record.stocks,
    });
    setDrawerVisible(true);
  };

  const handleDelete = (key) => {
    setData(data.filter(item => item.key !== key));
  };

  const filteredData = data.filter(item =>
    (item.productName && item.productName.toLowerCase().includes(searchText.toLowerCase())) &&
    (filterTag === '' || (item.productType && item.productType.includes(filterTag)))
  );

  const handleAdd = (values) => {
    if (editingRecord) {
      // Update existing record
      setData(data.map(item =>
        item.key === editingRecord.key
          ? {
              ...item,
              productType: values.productType,
              productName: values.productName,
              unitPrice: values.unitPrice,
              supplier: values.supplier,
              stocks: values.stocks,
            }
          : item
      ));
      setEditingRecord(null);
    } else {
      // Add new record
      const newMember = {
        key: (data.length + 1).toString(),
        productType: `${values.productType}`,
        productName: `${values.productName}`,
        unitPrice: values.unitPrice,
        supplier: values.supplier,
        stocks: values.stocks,
       
      
      };
      setData([...data, newMember]);
    }
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
          <Option value="Drinks">Drinks</Option>
          <Option value="Clothes">Clothes</Option>
          <Option value="Supplements">Supplements</Option>
          <Option value="Food">Food</Option>
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
        title={editingRecord ? "Edit Product" : "Add New Product"}
        placement="right"
        onClose={() => {
          setDrawerVisible(false);
          setEditingRecord(null);
          form.resetFields();
        }}
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
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingRecord ? 'Save Changes' : 'Add Product'}
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default Products;