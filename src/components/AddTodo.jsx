import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const AddTodo = ({ setTodo }) => {

  const [ inputValue, setValue ] = useState('');

  const handleOnChange = ({ target }) => {
    setValue(target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setTodo({
      type: 'add',
      payload: {
        id: new Date().getTime(),
        desc: inputValue,
        done: false
      }
    });
    setValue('');
  }

  return (
    <>
      <Card style={{ width: '100%', height: '40vh' }}>
        <Card.Body>
          <Card.Title>Add Todo</Card.Title>
          <Form className='mt-4' onSubmit={ handleOnSubmit }>
            <Form.Group>
              <Form.Control
                placeholder='Add Todo'
                value={ inputValue }
                onChange={ handleOnChange }
              ></Form.Control>
            </Form.Group>
          </Form>
          <Button type='submit'>Add</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default AddTodo;
