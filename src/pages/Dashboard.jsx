import React from 'react';

import statusCards from '../assets/JsonData/status-card-data.json';

import StatusCard from '../components/status-card/StatusCard';

import Chart from '../components/chart/Chart';

import Table from '../components/table/Table';

import { Link } from 'react-router-dom';

import Badge from '../components/badge/Badge';

const topCustomer = {
  head: ['user', 'orders', 'spending'],
  body: [
    {
      username: 'john doe',
      order: '490',
      price: '$15,870',
    },
    {
      username: 'john doe',
      order: '490',
      price: '$15,870',
    },
    {
      username: 'john doe',
      order: '490',
      price: '$15,870',
    },
    {
      username: 'john doe',
      order: '490',
      price: '$15,870',
    },
    {
      username: 'john doe',
      order: '490',
      price: '$15,870',
    },
    {
      username: 'john doe',
      order: '490',
      price: '$15,870',
    },
    {
      username: 'john doe',
      order: '490',
      price: '$15,870',
    },
  ],
};

const latestOrders = {
  head: ['id', 'user', 'date', 'price', 'status'],
  body: [
    {
      id: '#OD1711',
      user: 'john',
      date: '17 jun 2021',
      price: '$900',
      status: 'shipping',
    },
    {
      id: '#OD1711',
      user: 'john',
      date: '17 jun 2021',
      price: '$900',
      status: 'pending',
    },
    {
      id: '#OD1711',
      user: 'john',
      date: '17 jun 2021',
      price: '$900',
      status: 'paid',
    },
    {
      id: '#OD1711',
      user: 'john',
      date: '17 jun 2021',
      price: '$900',
      status: 'refund',
    },
    {
      id: '#OD1711',
      user: 'john',
      date: '17 jun 2021',
      price: '$900',
      status: 'pending',
    },
    {
      id: '#OD1711',
      user: 'john',
      date: '17 jun 2021',
      price: '$900',
      status: 'shipping',
    },
    {
      id: '#OD1711',
      user: 'john',
      date: '17 jun 2021',
      price: '$900',
      status: 'paid',
    },
  ],
};

const orderStatus = {
  shipping: 'primary',
  refund: 'danger',
  paid: 'success',
  pending: 'warning',
};

const renderCustomerHead = (item, index) => <th key={index}>{item}</th>;

const renderCustomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;
const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.date}</td>
    <td>{item.price}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status}></Badge>
    </td>
  </tr>
);
const Dashboard = () => {
  return (
    <div>
      <h2 className='page-header'>Dashboard</h2>
      <div className='row'>
        <div className='col-6 col-md-12 col-sm-12'>
          <div className='row'>
            {statusCards.map((item, index) => (
              <div className='col-6 col-md-6 col-sm-12' key={index}>
                {item.title}
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='col-6 col-md-12 col-sm-12'>
          <div
            className='card full-height'
            style={{
              margin: 0,
              padding: 0,
              position: 'relative',
              transform: 'translateY(20px)',
            }}
          >
            <Chart />
          </div>
        </div>
        <div className='col-5 col-md-12 col-sm-12'>
          <div className='card'>
            <div className='card__header'>
              <h3>top customers</h3>
            </div>
            <div className='card__body'>
              <Table
                headData={topCustomer.head}
                bodyData={topCustomer.body}
                renderHead={(item, index) => renderCustomerHead(item, index)}
                renderBody={(item, index) => renderCustomerBody(item, index)}
              />
            </div>
            <div className='card__footer'>
              <Link to='/'>view all</Link>
            </div>
          </div>
        </div>
        <div className='col-7 col-md-12 col-sm-12'>
          <div className='card'>
            <div className='card__header'>
              <h3>Latest orders</h3>
            </div>
            <div className='card__body'>
              <Table
                headData={latestOrders.head}
                bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
                renderHead={(item, index) => renderOrderHead(item, index)}
              ></Table>
            </div>
            <div className='card__footer'>
              <Link to='/'>View all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
