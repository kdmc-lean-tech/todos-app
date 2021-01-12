import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import TodoItem from './TodoItem';

const TodoList = ({ todos, dispatch }) => {
  return (
    <Card style={{ width: '100%', height: '40vh' }}>
      <Card.Body>
        <Card.Title>
          TodoList
        </Card.Title>
        <ListGroup style={{ overflow: 'auto', height: '250px' }}>
          {
            todos.map(todo => <TodoItem key={ todo.id } todo={ todo } dispatch={ dispatch } />)
          }
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default TodoList;
