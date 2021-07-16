import {useState} from 'react'
import Section from '../UI/Section';
import TaskForm from './TaskForm';

import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
  const [task,setTask]=useState()
  const taskHandler= (taskText) =>{
    setTask({taskText})
  }
  const manageData = (data)=>{
    // const generatedId = data.name; // firebase-specific => "name" contains generated id
    //   const createdTask = { id: generatedId, text: taskText };

    //   props.onAddTask(createdTask);
    console.log(data);
  }
  const {isLoading,error,enterTaskHandler}=useHttp();

  return (
    <Section>
      <TaskForm onEnterTask={taskHandler} onSendData={()=>enterTaskHandler({
      url:'https://http-starting-project-default-rtdb.firebaseio.com/custom_hooks2.json',
      method:'POST',
      body:task,
      headers: {
        'Content-Type': 'application/json',
      }
    },
    manageData)} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
