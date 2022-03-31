import React, { useState, useEffect } from "react";
import "./Users.css"

import { CSVLink } from "react-csv";
import Table from '../../components/Table/Table';



const Users = () => {

  const columns = [
    {
        name: 'Transaction ID',
        selector: row => row.id,
        reorder: true,
        sortable: true,
        // grow: 2
      },
    {
        name: 'Sender name',
        selector: row => row.sender,
        reorder: true,
        sortable: true,
        wrap: true,
        // style: {
        //   padding: "20px",
        //   backgroundColor: "red"
        // }
      },
    {
        name: 'receiver name',
        selector: row => row.receiver,
        reorder: true,
        sortable: true,
      },
    {
        name: 'Amount',
        selector: row => row.amount,
        reorder: true,
        sortable: true,
      },
    {
        name: 'Date',
        selector: row => row.date,
        reorder: true,
        sortable: true,
      },
    {
        name: 'Description',
        selector: row => row.description,
        reorder: true,
        sortable: true,
      },
];

const data = [
    {
        id: 1,
        sender: 'jay Dev',
        receiver: 'May',
        amount: '1988',
        date: '1988',
        description: '1988',
    },
    {
        id: 2,
        sender: 'jay Stance',
        receiver: 'May',
        amount: '1988',
        date: '1988',
        description: '1988',
    },
    {
        id: 3,
        sender: 'jay Stance',
        receiver: 'May',
        amount: '1988',
        date: '1988',
        description: '1988',
    },
    {
        id: 4,
        sender: 'jay Stance',
        receiver: 'May',
        amount: '1988',
        date: '1988',
        description: '1988',
    },
    {
        id: 5,
        sender: 'jay Stance',
        receiver: 'May',
        amount: '1988',
        date: '1988',
        description: '1988',
    },
    {
        id: 6,
        sender: 'jay Stance',
        receiver: 'May',
        amount: '1988',
        date: '1988',
        description: '1988',
    },
    {
        id: 7,
        sender: 'jay Stance',
        receiver: 'May',
        amount: '1988',
        date: '1988',
        description: '1988',
    },
    {
        id: 8,
        sender: 'jay Stance',
        receiver: 'May',
        amount: '1988',
        date: '1988',
        description: '1988',
    },
    {
        id: 9,
        sender: 'jay Stance',
        receiver: 'May',
        amount: '1988',
        date: '1988',
        description: '1988',
    },
    {
        id: 10,
        sender: 'jay Stance',
        receiver: 'May',
        amount: '1988',
        date: '1988',
        description: '1988',
    },
    {
        id: 11,
        sender: 'jay Stance',
        receiver: 'May',
        amount: '1988',
        date: '1988',
        description: '1988',
    },
    {
        id: 12,
        sender: 'jay Stance',
        receiver: 'May',
        amount: '1988',
        date: '1988',
        description: '1988',
    },
    {
        id: 13,
        sender: 'jay Stance',
        receiver: 'May',
        amount: '1988',
        date: '1988',
        description: '1988',
    },
    {
        id: 14,
        sender: 'jay Stance',
        receiver: 'May',
        amount: '1988',
        date: '1988',
        description: '1988',
    },
]


  return (
    <div className="main">
      <Table columns={columns} data={data} title="Verified Users" />
    </div>
  );
}

export default Users;