import { useEffect, useState,useCallback } from 'react';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import { getAllComments } from '../../lib/api';
import useHttp from '../../hooks/use-http';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';

const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const {sendRequest, status,data:loadedData,error} =useHttp(getAllComments);
  // console.log(param);
    
  useEffect(() => {
    sendRequest(props.id);
  }, [sendRequest,props.id,])
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const loadCommentsHandler =useCallback(()=>{
    sendRequest(props.id);
  },[sendRequest,props.id])
  let commentList;
  if (status==='pending')
  commentList=<div style={{textAlign:'center'}}><LoadingSpinner/></div>;
if (status==='completed' && !error && loadedData){
  commentList=<CommentsList comments={loadedData?loadedData:[]}/>
}
if (status==='completed' &&  (!loadedData||loadedData.length===0)){
  commentList=<p className='centered'>No comment yet..</p>
}
  
  console.log("[Comments.js]",loadedData);
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm id={props.id} refreshComments={loadCommentsHandler}/>}
      {commentList}
    </section>
  );
};

export default Comments;