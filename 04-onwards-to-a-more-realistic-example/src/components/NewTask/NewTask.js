
import Section from '../UI/Section';
import TaskForm from './TaskForm';

import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
  const manageData = (taskText,data)=>{
    // const generatedId = data.name; // firebase-specific => "name" contains generated id
    //   const createdTask = { id: generatedId, text: taskText };

    //   props.onAddTask(createdTask);
    console.log(data);
  }
  const {isLoading,error,enterTaskHandler:sendTaskHandler}=useHttp();
  const enterTaskHandler= async (taskText)=>{
    sendTaskHandler ({
        url:'https://http-starting-project-default-rtdb.firebaseio.com/custom_hooks2.json',
        method:'POST',
        body:taskText,
        headers: {
          'Content-Type': 'application/json',
      }
    },manageData.bind(null,taskText))
  }
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
