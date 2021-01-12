import React, { useReducer } from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { todoReducer } from './todoReducer';

const initialState = [
  {
    id: new Date().getTime(),
    desc: 'Master in Frontend',
    done: false
  }
];

const TodoContainer = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, initialState);

  return (
    <>
      <Jumbotron>
        <h1 className='text-center'>Todo App</h1>
      </Jumbotron>
      <Container>
        <Row>
          <Col className='d-flex justify-content-center' md='6'>
            <TodoList todos={ todos } dispatch={ dispatch }/>
          </Col>
          <Col className='d-flex justify-content-center' md='6'>
            <AddTodo setTodo={ dispatch } />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TodoContainer;
