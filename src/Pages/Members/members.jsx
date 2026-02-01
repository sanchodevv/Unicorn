import React, { useState } from 'react';
import { Table, Tag, Button, Input, Select, Modal, Form, Drawer } from "antd";
import { useTranslation } from "react-i18next";
import "./members.css"

const { Option } = Select;

const Members = () => {
  const { t } = useTranslation();
  
  const columns = [
    {
      title: t('name'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t('phoneNumber'),
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
            let color = tag.length > 5 ? 'green' : 'green';
            if (tag === 'OUT OF STACK') {
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
      title: t('type'),
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: t('expireTime'),
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
          <a  onClick={() => setDrawerVisible(true)} style={{ marginRight: 16 }}>  <img src="/qalam.png" alt="" /> {record.lastName}</a>
          <a><img src="/delete.png" alt="" /></a>
          </div>
        </span>
      ),
    },
  ];
  const [data, setData] = useState([
    {
      key: '1',
      name: 'John Brown',
      phoneNumber: '123-456-7890',
      status: ['AVAILABLE'],
      type: 'Admin',
      expireTime: 'in 3 month',
    },
    {
      key: '2',
      name: 'Jim Green',
      phoneNumber: '123-456-7890',
      status: ['OUT OF STACK'],
      type: 'User',
      expireTime: 'in 2 month',
    },
    {
      key: '3',
      name: 'Joe Black',
      phoneNumber: '123-456-7890',
      status: ['AVAILABLE'],
      type: 'Moderator',
      expireTime: 'in 1 month',
    },
    {
      key: '4',
      name: 'Joe Black',
      phoneNumber: '123-456-7890',
      status: ['AVAILABLE'],
      type: 'Moderator',
      expireTime: 'in 1 month',
    },
    {
      key: '5',
      name: 'Joe Black',
      phoneNumber: '123-456-7890',
      status: ['AVAILABLE'],
      type: 'Moderator',
      expireTime: 'in 1 month',
    },
    {
      key: '6',
      name: 'Joe Black',
      phoneNumber: '123-456-7890',
      status: ['AVAILABLE'],
      type: 'Moderator',
      expireTime: 'in 1 month',
    },
    {
      key: '7',
      name: 'Joe Black',
      phoneNumber: '123-456-7890',
      status: ['AVAILABLE'],
      type: 'Moderator',
      expireTime: 'in 1 month',
    },
    {
      key: '8',
      name: 'Leo Messi',
      phoneNumber: '123-456-7890',
      status: ['OUT OF STACK'],
      type: 'Moderator',
      expireTime: 'in 4 month',
    },
    {
      key: '9',
      name: 'John Doe',
      phoneNumber: '123-456-7890',
      status: ['AVAILABLE'],
      type: 'Moderator',
      expireTime: 'in 2 month',
    },
    {
      key: '10',
      name: 'Joed Blacks',
      phoneNumber: '123-456-7890',
      status: ['AVAILABLE'],
      type: 'Moderator',
      expireTime: 'in 6 month',
    },
    {
      key: '11',
      name: 'Ismoil Rx',
      phoneNumber: '123-456-7890',
      status: ['OUT OF STACK'],
      type: 'Moderator',
      expireTime: 'in 2 month',
    },
    {
      key: '12',
      name: 'Sancho',
      phoneNumber: '123-456-7890',
      status: ['AVAILABLE'],
      type: 'Moderator',
      expireTime: 'in 8 month',
    },
    {
      key: '13',
      name: 'Joe Black',
      phoneNumber: '123-456-7890',
      status: ['AVAILABLE'],
      type: 'Moderator',
      expireTime: 'in 1 month',
    },
    {
      key: '14',
      name: 'Joe Black',
      phoneNumber: '123-456-7890',
      status: ['AVAILABLE'],
      type: 'Moderator',
      expireTime: 'in 1 month',
    },
    {
      key: '15',
      name: 'Joe Black',
      phoneNumber: '123-456-7890',
      status: ['AVAILABLE'],
      type: 'Moderator',
      expireTime: 'in 1 month',
    },
    {
      key: '16',
      name: 'Joe Black',
      phoneNumber: '123-456-7890',
      status: ['AVAILABLE'],
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