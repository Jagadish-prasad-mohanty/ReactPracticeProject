import CommentItem from './CommentItem';
import classes from './CommentsList.module.css';

const CommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comm) => (
        <CommentItem key={comm.id} text={comm.comment} commenter={comm.name} />
      ))}
    </ul>
  );
};

export default CommentsList;
