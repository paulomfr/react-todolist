import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

import Avatar from '../Avatar';
import AddTask from '../AddTask';
import { Box, Container } from './App.style';

export default function App() {
  const [item, setItem] = useState({});
  const [todoList, setTodoList] = useState([]);

  const onEditTask = (event) => {
    event.preventDefault();

    const { value } = event.currentTarget;

    setItem({
      title: value,
      id: uuidv1()
    });
  };

  const onAddTask = (event) => {
    event.preventDefault();

    setTodoList([
      ...todoList,
      item,
    ]);
  };

  return (
    <Box>
      <Container as="form" onSubmit={(event) => onAddTask(event)}>
        <Avatar
          size={86}
          url="https://source.unsplash.com/200x200/?profile"
        />

        <AddTask onEdit={onEditTask} />

        <ul>
          {todoList.map(({ title, id }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </Container>
    </Box>
  )
}
