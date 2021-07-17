import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {;
  const [tasks, setTasks] = useState([]);
  
    const {isLoading,error,enterTaskHandler:fetchTasks} =useHttp()

    const manageData =(data)=>{
      const loadedTasks = [];
        console.log(data);
  
        for (const taskKey in data) {
          console.log(data[taskKey]);
          loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }
  
        setTasks(loadedTasks);
    }
  useEffect(() => {
    fetchTasks({
      url:'https://http-starting-project-default-rtdb.firebaseio.com/custom_hooks2.json'
    },
    manageData);
  }, [fetchTasks]);

  // const taskAddHandler = (task) => {
  //   setTasks((prevTasks) => prevTasks.concat(task));
  // };

  return (
    <React.Fragment>
      <NewTask />
      <div style={{'textAlign':"center"}} >
      <button  onClick={()=>fetchTasks({
      url:'https://http-starting-project-default-rtdb.firebaseio.com/custom_hooks2.json'
    },
    manageData)}>Fetch</button>
      </div>
        
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
      />
    </React.Fragment>
  );
}

export default App;
