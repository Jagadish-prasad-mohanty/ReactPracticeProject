import classes from './CommentItem.module.css';

const CommentItem = (props) => {
  const {text,auther} =props;
  return (
    <li className={classes.item}>
      <div style={{display:'flex',textAlign:'center',justifyContent:'space-around'}}>

      <p>{props.text}</p>
      <p >{props.commenter}</p>
      </div>
    </li>
  );
};

export default CommentItem;
