import React, { useState } from 'react';
import { Table, Tag, Button, Input, Select, Modal, Form, Drawer } from "antd";
import { useTranslation } from "react-i18next";
import "./visithistory.css"

const { Option } = Select;

const VisitHistory = () => {
  const { t } = useTranslation();
  
  const columns = [
    {
      title: t('membersName'),
      dataIndex: 'memberName',
      key: 'memberName',
    },
    {
      title: t('visitTime'),
      dataIndex: 'visitTime',
      key: 'visitTime',
    },
    {
        title: t('visitDate'),
        dataIndex: 'visitDate',
        key: 'visitDate',
      },
     
  ];
  const [data, setData] = useState([
    {
      key: '1',
      memberName: 'Michael Oliveira',
      visitTime: '3 months ago(at 4:30 PM)',
      visitDate: 'December 12, 2023',
   
    },
    {
      key: '2',
      memberName: 'Sarah Johnson',
      visitTime: '1 week ago(at 10:00 AM)',
      visitDate: 'June 10, 2024',
    },
    {
      key: '3',
      memberName: 'David Smith',
        visitTime: '2 days ago(at 2:15 PM)',
        visitDate: 'June 12, 2024',
    },
    {
      key: '4',
        memberName: 'Emily Davis',
        visitTime: '5 days ago(at 11:45 AM)',
        visitDate: 'June 9, 2024',
    },
    {
      key: '5',
        memberName: 'James Wilson',
        visitTime: '3 hours ago(at 1:30 PM)',
        visitDate: 'June 12, 2024',
    },
    {
      key: '6',
        memberName: 'Olivia Brown',
        visitTime: '4 months ago(at 9:00 AM)',
        visitDate: 'February 15, 2025',
    },
    {
      key: '7',
        memberName: 'William Taylor',
        visitTime: '2 weeks ago(at 3:20 PM)',
        visitDate: 'May 29, 2024',
    },
    {
      key: '8',
        memberName: 'William Taylor',
        visitTime: '2 weeks ago(at 3:20 PM)',
        visitDate: 'May 29, 2024',
    },
    {
      key: '9',
        memberName: 'William Taylor',
        visitTime: '2 weeks ago(at 3:20 PM)',
        visitDate: 'May 29, 2024',
    },
    {
      key: '10',
        memberName: 'William Taylor',
        visitTime: '2 weeks ago(at 3:20 PM)',
        visitDate: 'May 29, 2024',
    },
    {
      key: '11',
        memberName: 'William Taylor',
        visitTime: '2 weeks ago(at 3:20 PM)',
        visitDate: 'May 29, 2024',
    },
    {
      key: '12',
        memberName: 'William Taylor',
        visitTime: '2 weeks ago(at 3:20 PM)',
        visitDate: 'May 29, 2024',
    },
    {
      key: '13',
        memberName: 'William Taylor',
        visitTime: '2 weeks ago(at 3:20 PM)',
        visitDate: 'May 29, 2024',
    },
    {
      key: '14',
        memberName: 'William Taylor',
        visitTime: '2 weeks ago(at 3:20 PM)',
        visitDate: 'May 29, 2024',
    },
    {
      key: '15',
        memberName: 'William Taylor',
        visitTime: '2 weeks ago(at 3:20 PM)',
        visitDate: 'May 29, 2024',
    },
    {
      key: '16',
        memberName: 'William Taylor',
        visitTime: '2 weeks ago(at 3:20 PM)',
        visitDate: 'May 29, 2024',
    },
  ]);
  const [searchText, setSearchText] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [form] = Form.useForm();

  const filteredData = data.filter(item =>
    (item.memberName && item.memberName.toLowerCase().includes(searchText.toLowerCase())) &&
    (filterTag === '' || (item.visitDate && item.visitDate.includes(filterTag)))
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
          <Option value=""><img src="/filter.png" alt="" /> Filter</Option>
          <Option value="2023">2023</Option>
          <Option value="2024">2024</Option>
          <Option value="2025">2025</Option>
        </Select>
       
        </div>
      </div>
      <h3 className='h3'>Total Number of Visitors Today: 0</h3>
      <div className="members-table-wrapper">
        <Table columns={columns} dataSource={filteredData} 
        pagination={{
        current: currentPage,
        pageSize: 7,
        total: data.length,
        onChange: (page) => setCurrentPage(page),
        }}
        className="visit-table" />
      </div>
     
    </div>
  );
};

export default VisitHistory;