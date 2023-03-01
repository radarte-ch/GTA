import React from 'react';
import { Table } from 'react-bootstrap';
import Papa from 'papaparse';

export default function OutputTable({ totalAmount }) {
  const csvData = `Total Amount of Insurance,Homeowners,Expanded Loan
100000,500,2000
200000,1000,4000
300000,1500,6000
400000,2000,8000
500000,2500,10000`;

  const { data } = Papa.parse(csvData, { header: true });

  const row = data.find((row) => row['Total Amount of Insurance'] === totalAmount);

  if (!row) {
    return <p>No data found for the input value.</p>;
  }

  return (
    <Table bordered striped>
      <thead>
        <tr>
          <th>Insurance Type</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Homeowners</td>
          <td>{row.Homeowners}</td>
        </tr>
        <tr>
          <td>Expanded Loan</td>
          <td>{row['Expanded Loan']}</td>
        </tr>
      </tbody>
    </Table>
  );
}
