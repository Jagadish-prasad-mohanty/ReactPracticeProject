import { useRef, useState,useEffect } from 'react';

import classes from './NewCommentForm.module.css';
import { addComment } from '../../lib/api';
import useHttp from '../../hooks/use-http';
import LoadingSpinner from '../UI/LoadingSpinner';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const commenterNameRef = useRef();
  // const [submit,setSubmit]=useState(false)
  const {sendRequest,status,error} =useHttp(addComment);
  // console.log(submit,status);
    
  // if (submit){
  //   sendRequest({name:commenterNameRef,comment:commentTextRef});
  // }
  const {refreshComments}  =props;
  useEffect(()=>{
    if (status==='completed' && !error){
      refreshComments();
    }
  }, [ status, error,refreshComments])
  if (status==='pending'){
    return <div style={{textAlign:'center'}}><LoadingSpinner/></div>
  }
  if (status==='completed' && error){
    alert("Failed to Add Comment!!!")
  }
  
  
  // if (status ==='completed'){
  //   setSubmit(false)
  // }
  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
    // console.log(commentTextRef.current.value);
    // console.log(commenterNameRef.current.value);
    // console.log(props.id);
    const commenterName=commenterNameRef.current.value;
    const commentText=commentTextRef.current.value;
      sendRequest({commentData:{name:commenterName,comment:commentText},quoteID:props.id});
    
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='commenterName'>Your Name</label>
        <input id='commenterName'  ref={commenterNameRef}/>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
