import React from 'react';

import './chart.css';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey='name' tick={{ strokeWidth: 0, fontSize: '0.7rem' }} />
        <YAxis width={50} tick={{ strokeWidth: 0, fontSize: '0.6rem' }} />
        <CartesianGrid vertical={false} horizontal={false} />
        <Tooltip
          isAnimationActive={false}
          wrapperStyle={{ fontSize: '0.7rem' }}
        />
        <Legend
          verticalAlign='top'
          height={30}
          iconSize={14}
          wrapperStyle={{ fontSize: '0.9rem' }}
        />
        <Line
          strokeWidth={2}
          name='pv of pages'
          type='monotone'
          dataKey='pv'
          stroke='#8884d8'
        />
        <Line
          strokeWidth={2}
          name='uv of pages'
          type='monotone'
          dataKey='uv'
          stroke='#82ca9d'
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
