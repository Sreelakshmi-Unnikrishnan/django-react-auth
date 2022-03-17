import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import './Dashboard.css';
const Dashboard = () => {
  const [userEmail, setUserEmail] = useState(['']);
  const [allEmail, setAllEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('http://localhost:3000/login');
    } else {
      fetch('http://127.0.0.1:8000/api/v1/users/auth/user/',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setUserEmail(data.email);
          setLoading(false);
        });
    }
  }, []);

    const fetchData = async () => {
     await axios.get(
        'http://127.0.0.1:8000/api/v1/users/home/',
      ).then(res => {
        // const datas = res.data;
        console.log(res.data)
          setAllEmail(res.data)
      });
    };

    useEffect(() => {
      fetchData();
 }, []);
  return (
    <div className='container'>
      {loading === false && (
        <Fragment>
          <h1>Dashboard</h1>
          <h2>Hello {userEmail}!</h2>
          <h3>Emails:</h3>
          <ol>
        {
          allEmail.map(u =>
              <li key={u.id}>{u.email}</li>
            )
        }
      </ol>
        </Fragment>
      )}
    </div>
  );
};

export default Dashboard;
