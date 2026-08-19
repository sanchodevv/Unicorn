import React, { useState } from 'react';
import { Table, Tag, Button, Input, Select, Modal, Form, Drawer } from "antd";
import { Edit2, Trash2, Plus } from "lucide-react";
import "./garbrandt.css"

const { Option } = Select;

const Garbrandt = () => {
  const [data, setData] = useState([
    {
      key: '1',
      membershipType: 'Standart',
      term: '1 Month',
      startDate: 'February 22, 2023',
      endDate: 'March 22, 2023',
      status: ['active'],
    },
    {
      key: '2',
      membershipType: 'Premium',
      term: '3 Months',
      startDate: 'January 15, 2023',
      endDate: 'April 15, 2023',
      status: ['ON HOLD'],
    },
    {
      key: '3',
      membershipType: 'VIP',
      term: '6 Months',
      startDate: 'December 1, 2022',
      endDate: 'June 1, 2023',
      status: ['ON HOLD'],
    },
  ]);

  const [drawerVisible, setDrawerVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [form] = Form.useForm();

  const handleEdit = (record) => {
    setEditingRecord(record);
    form.setFieldsValue({
      membershipType: record.membershipType,
      term: record.term,
      startDate: record.startDate,
      endDate: record.endDate,
      status: record.status[0] || '',
    });
    setDrawerVisible(true);
  };

  const handleDelete = (key) => {
    setData(data.filter(item => item.key !== key));
  };

  const handleAdd = (values) => {
    if (editingRecord) {
      // Update existing record
      setData(data.map(item =>
        item.key === editingRecord.key
          ? {
              ...item,
              membershipType: values.membershipType,
              term: values.term,
              startDate: values.startDate,
              endDate: values.endDate,
              status: values.status ? [values.status] : [],
            }
          : item
      ));
      setEditingRecord(null);
    } else {
      // Add new record
      const newMember = {
        key: (data.length + 1).toString(),
        membershipType: values.membershipType,
        term: values.term,
        startDate: values.startDate,
        endDate: values.endDate,
        status: values.status ? [values.status] : [],
      };
      setData([...data, newMember]);
    }
    setDrawerVisible(false);
    form.resetFields();
  };

  const columns = [
  {
    title: 'Membership Type',
    dataIndex: 'membershipType',
    key: 'membershipType',
  },
  {
    title: 'Term',
    dataIndex: 'term',
    key: 'term',
  },
  {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
        title: 'End Date',
        dataIndex: 'endDate',
        key: 'endDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => (
        <>
          {status.map(tag => {
            let color = tag.length > 5 ? '#369B46' : '#369B46';
            if (tag === 'ON HOLD') {
              color = '#949494';
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

  return (
    <div >
      <div className ='uno' style={{ marginBottom: 16 }}>
        <div className="sle">
          
        <Button type="primary" className='add1' onClick={() => setDrawerVisible(true)} icon={<Plus size={16} />}> Add Membership</Button>
        </div>
      </div>
      <h3 className='h3'>CODY GARBRANDT</h3>
      <h3 className='h4'>MEMBERSHIPS <span>Active</span></h3>
      <div className="members-table-wrapper">
        <Table columns={columns} dataSource={data} 
        pagination={{
          style: { display: 'none' },
        }}
        className="members-table" />
      </div>
      <Drawer
        title={editingRecord ? "Edit Membership" : "Add New Membership"}
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
            name="membershipType"
            label="Membership Type"
            rules={[{ required: true, message: 'Please enter membership type' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="term"
            label="Term"
            rules={[{ required: true, message: 'Please enter term' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="startDate"
            label="Start Date"
            rules={[{ required: true, message: 'Please enter start date' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="endDate"
            label="End Date"
            rules={[{ required: true, message: 'Please enter end date' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: 'Please select status' }]}
          >
            <Select placeholder="Select type">
              <Option value="Active">Active</Option>
              <Option value="ON HOLD">ON HOLD</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingRecord ? 'Update Member' : 'Add Member'}
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};


export default Garbrandt;