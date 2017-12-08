import React from 'react';
import InputForm from './InputForm';
import CommentDisplay from './CommentDisplay';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
    this.saveComment = this.saveComment.bind(this);
  }

  saveComment(newComment) {
    const comments = this.state.comments;
    comments.push(newComment);
    this.setState({comments});
  }

  render() {
    return (
      <div>
        <InputForm saveComment={this.saveComment}/>
        <CommentDisplay comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;