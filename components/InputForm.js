import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function InputForm({ onSubmit }) {
  const [totalAmount, setTotalAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(totalAmount);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="totalAmount">
        <Form.Label>Total Amount of Insurance</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter total amount"
          value={totalAmount}
          onChange={(event) => setTotalAmount(event.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Calculate
      </Button>
    </Form>
  );
}
