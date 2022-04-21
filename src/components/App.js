import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { apiRequestStart, apiRequestSucced, updateFirstUser } from '../actions';
import { Card, Table } from 'antd';
import 'antd/dist/antd.min.css';

const App = () => {
  const dispatch = useDispatch();
  const firstUser = useSelector((state) => state.firstUser);
  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(apiRequestStart());
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((usersData) => {
        const users = usersData.map((user) => {
          return {
            key: user.id,
            name: user.name,
            email: user.email,
            city: user.address.city,
          };
        });
        dispatch(apiRequestSucced(users));
      });
  }, [dispatch]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },

    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },

    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      filters: [
        {
          text: 'Roscoeview',
          value: 'Roscoeview',
        },
        {
          text: 'Aliyaview',
          value: 'Aliyaview',
        },
      ],
      onFilter: (value, record) => record.city.indexOf(value) === 0,
    },
  ];

  const gridStyle = {
    textAlign: 'center',
  };

  const onChange = (_pagination, _filters, _sorter, extra) => {
    dispatch(updateFirstUser(extra.currentDataSource[0]));
  };

  return (
    <>
      <Table
        onChange={onChange}
        loading={loading}
        dataSource={users}
        columns={columns}
      />
      {firstUser && (
        <Card title="First User Information">
          <Card.Grid style={gridStyle}>Name</Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            Email
          </Card.Grid>
          <Card.Grid style={gridStyle}>City</Card.Grid>
          <Card.Grid style={gridStyle}>{firstUser.name}</Card.Grid>
          <Card.Grid style={gridStyle}>{firstUser.email}</Card.Grid>
          <Card.Grid style={gridStyle}>{firstUser.city}</Card.Grid>
        </Card>
      )}
    </>
  );
};

export default App;
