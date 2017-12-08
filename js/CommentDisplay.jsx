import React from 'react';
import PropTypes from 'prop-types';

const CommentDisplay = (props) => (
  <div id='comment-display'>
    Recent Comments:<br/>
    {props.comments.map((comment) => <div id='comment' key={comment.text}>{comment.text}<br/><i>{comment.name}</i></div>)}
  </div>
);

CommentDisplay.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    rating: PropTypes.string,
    comment: PropTypes.string.isRequired
  })).isRequired,
};

export default CommentDisplay;