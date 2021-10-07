import { ListGroup } from "react-bootstrap";
import AddComment from "./AddComment";
import SingleComment from "./SingleComment";

const CommentList = ({
  commentsToShow,
  asin,
  onNewComment,
  onDeleteComment,
  updateComment,
}) => {
  return (
    <>
      <ListGroup variant="flush">
        {commentsToShow.map((comment) => (
          <SingleComment
            comment={comment}
            key={comment._id}
            onDeleteComment={onDeleteComment}
            updateComment={updateComment}
          />
        ))}
      </ListGroup>
      <AddComment asin={asin} onNewComment={onNewComment} />
    </>
  );
};

export default CommentList;
