import React, { useState } from 'react';
import { Table, Tag, Button, Input, Select, Modal, Form, Drawer } from "antd";
import "./members.css"

const { Option } = Select;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: status => (
      <>
        {status.map(tag => {
          let color = tag.length > 5 ? 'blue' : 'green';
          if (tag === 'loser') {
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
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Expire Time',
    dataIndex: 'expireTime',
    key: 'expireTime',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <span>
        <div className="loq">
          <a> <img src="/log-out.png" alt="" /></a>
        <a style={{ marginRight: 16 }}> <img src="/qalam.png" alt="" /> {record.lastName}</a>
        <a><img src="/delete.png" alt="" /></a>
        </div>
      </span>
    ),
  },
];

const Members = () => {
  const [data, setData] = useState([
    {
      key: '1',
      name: 'John Brown',
      phoneNumber: '123-456-7890',
      status: ['nice', 'developer'],
      type: 'Admin',
      expireTime: 'in 3 month',
    },
    {
      key: '2',
      name: 'Jim Green',
      phoneNumber: '123-456-7890',
      status: ['loser'],
      type: 'User',
      expireTime: 'in 2 month',
    },
    {
      key: '3',
      name: 'Joe Black',
      phoneNumber: '123-456-7890',
      status: ['cool', 'teacher'],
      type: 'Moderator',
      expireTime: 'in 1 month',
    },
    {
      key: '4',
      name: 'Joe Black',
      phoneNumber: '123-456-7890',
      status: ['cool', 'teacher'],
      type: 'Moderator',
      expireTime: 'in 1 month',
    },
    {
      key: '5',
      name: 'Joe Black',
      phoneNumber: '123-456-7890',
      status: ['cool', 'teacher'],
      type: 'Moderator',
      expireTime: 'in 1 month',
    },
    {
      key: '6',
      name: 'Joe Black',
      phoneNumber: '123-456-7890',
      status: ['cool', 'teacher'],
      type: 'Moderator',
      expireTime: 'in 1 month',
    },
    {
      key: '7',
      name: 'Joe Black',
      phoneNumber: '123-456-7890',
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

export default Members;