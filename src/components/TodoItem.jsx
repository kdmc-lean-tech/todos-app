import React from 'react';
import { Button, ListGroup, Col, Row } from 'react-bootstrap';

const TodoItem = ({ todo, dispatch }) => {
  const { desc, id, done } = todo;

  const handleDeleteTodo = (todoId) => {
    dispatch({
      type: 'delete',
      payload: todoId
    });
  }

  const handleToogleTodo = (todoId) => {
    dispatch({
      type: 'toogle',
      payload: todoId
    });
  }

  return (
    <>
      <ListGroup.Item key={ id }>
        <Row>
          <Col md='9' onClick={ () => handleToogleTodo(id) } className= { done && 'line-through' }
            style={{ cursor: 'pointer' }}>
              <span>{ desc }</span>
          </Col>
          <Col md='3'>
            <Button variant='danger' onClick={ () => handleDeleteTodo(id) }>Delete</Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
}

export default TodoItem;
