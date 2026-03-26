import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { useEffect } from 'react';
import classes from './style.module.css';
import TodoItem from './components/todo-item';
import TodoDetails from './components/todo-details';
import { Skeleton } from '@mui/material';

function App() {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState(null);
  const [openDaiLog, setOpenDialLog] = useState(false)
  const [todoDetails, setTodoDetails] = useState(null)


  const fetchListOfTodos = async() => {
    try {
      setLoading(true);
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result = await apiResponse.json();
      console.log(result)
      if(result?.todos && result?.todos.length > 0){
        setTodoList(result?.todos);
        setLoading(false);
        setError('')
      } else {
        setLoading(false);
        setError('')
      }
     
    } catch(error) {
       console.log(error);
       setError('something error occurred');
    }
  }

  const fetchDetailsOdCurrentTodo = async(fetCurrentTodoId) => {
    // console.log(fetCurrentTodoId)
   try{
     const apiResponse = await fetch('https://dummyjson.com/todos/'+fetCurrentTodoId);
    const response = await apiResponse.json();
    // console.log(response);
      if(response){
        setTodoDetails(response);
        setOpenDialLog(true);
      } else {
        setTodoDetails(null);
        setOpenDialLog(false)
      }
   }catch(error){
     console.log(error);
   }
  }

  useEffect(() => {
    fetchListOfTodos();
  }, [])

  if(loading) return <Skeleton variant='rectangular' width={1000} height={800} />

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerStyles}>Todo List App using React and Material UI</h1>
      <div className={classes.todoListWrapper}>
        {todoList && todoList.length > 0 ?
        todoList.map(todoItem => <TodoItem todo={todoItem} key={todoItem.id}
          fetchDetailsOdCurrentTodo={fetchDetailsOdCurrentTodo} />) :
        null}
      </div>
      <TodoDetails openDaiLog={openDaiLog} todoDetails={todoDetails}
      setTodoDetails={setTodoDetails} setOpenDialLog={setOpenDialLog} />
    </div>
  )
}

export default App
