import { Button, Flex, Space, Table, Tag, Drawer, Form, Input, Select } from "antd";
import { useState } from "react";
import { Edit2, Trash2, Plus } from "lucide-react";
import "./membership.css"

const Membership = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [dataSource, setDataSource] = useState([
      {
        key: '1',
        membershiptypename: 'Standart',
        monthlyfree: '$100',
        discountpercent: '0%',
      },
      {
        key: '2',
        membershiptypename: 'Premium',
        monthlyfree: '$200',
        discountpercent: '10%',
      },
      {
        key: '3',
        membershiptypename: 'Business',
        monthlyfree: '$300',
        discountpercent: '0%',
      },
    ]);
    const [editingRecord, setEditingRecord] = useState(null);
    const [form] = Form.useForm();

    const handleEdit = (record) => {
      setEditingRecord(record);
      form.setFieldsValue({
        type: record.membershiptypename,
        monthlyfree: record.monthlyfree,
        discount: parseInt(record.discountpercent),
      });
      setDrawerVisible(true);
    };

    const handleDelete = (key) => {
      setDataSource(dataSource.filter(item => item.key !== key));
    };

    const columns = [
      {
        title: 'MembershipTypeName',
        dataIndex: 'membershiptypename',
        key: 'membershiptypename',
        render: text => <a>{text}</a>,
      },
      {
        title: 'MonthlyFree',
        dataIndex: 'monthlyfree',
        key: 'monthlyfree',
      },
      {
        title: 'DiscountPercent',
        dataIndex: 'discountpercent',
        key: 'discountpercent',
      },
      
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a onClick={() => handleEdit(record)} style={{ marginRight: 16 }} title="Edit">
              <Edit2 size={16} style={{ color: '#9B74F0' }} />
            </a>
            <a onClick={() => handleDelete(record.key)} title="Delete">
              <Trash2 size={16} style={{ color: '#ff4d4f' }} />
            </a>
          </Space>
        ),
      },
    ];
    return (
        <div className="membership-page">
            <div className="page-header">
                <h3>Membership Types</h3>
                <Button type="primary" onClick={() => setDrawerVisible(true)} className="add-btn" style={{ background: '#343743', border: 'none' }} icon={<Plus size={16} />}>
                  Add New</Button>
            </div>
            
            <div className="membership-table-wrapper">
                <Table columns={columns} dataSource={dataSource} 
                 pagination={{
          style: { display: 'none' },
        }}
                className="membership-table" />
            </div>

            <Drawer
                title={editingRecord ? "Edit Membership" : "Add Membership"}
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
                    onFinish={(values) => {
                        if (editingRecord) {
                          // Update existing record
                          setDataSource(dataSource.map(item =>
                            item.key === editingRecord.key
                              ? {
                                  ...item,
                                  membershiptypename: values.type,
                                  monthlyfree: values.monthlyfree,
                                  discountpercent: `${values.discount}%`,
                                }
                              : item
                          ));
                          setEditingRecord(null);
                        } else {
                          // Add new record
                          const newItem = {
                              key: (dataSource.length + 1).toString(),
                              membershiptypename: values.type,
                              monthlyfree: values.monthlyfree,
                              discountpercent: `${values.discount}%`,
                          };
                          setDataSource([...dataSource, newItem]);
                        }
                        setDrawerVisible(false);
                        form.resetFields();
                    }}
                >
                    <Form.Item
                        name="type"
                        label="Type"
                        rules={[{ required: true, message: 'Please select type' }]}
                    >
                        <Select placeholder="Select type">
                            <Select.Option value="Monthly">Monthly</Select.Option>
                            <Select.Option value="Free">Free</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="monthlyfree"
                        label="Monthly Free"
                        rules={[{ required: true, message: 'Please enter monthly free' }]}
                    >
                        <Input placeholder="e.g. 100" />
                    </Form.Item>
                    <Form.Item
                        name="discount"
                        label="Discount Percent"
                        rules={[{ required: true, message: 'Please enter discount percent' }]}
                    >
                        <Input type="number" placeholder="e.g. 10" />
                    </Form.Item>
                    <Form.Item>
                        <Space>
                            <Button onClick={() => setDrawerVisible(false)}>Cancel</Button>
                            <Button type="primary" htmlType="submit">Save</Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Drawer>
        </div>
    )
}
export default Membership;