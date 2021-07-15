
import Section from '../UI/Section';
import TaskForm from './TaskForm';

import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
  const manageData = (data,taskText)=>{
    const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
  }
  const {isLoading,error,enterTaskHandler}=useHttp(
    {
      url:'https://http-starting-project-default-rtdb.firebaseio.com/custom_hooks2.json',
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    },
    manageData

  )

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
