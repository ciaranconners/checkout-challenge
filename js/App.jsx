import React from 'react';
import InputForm from './InputForm';

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
        <div id='comment-display'>
          Recent Comments:<br/>
          {this.state.comments.map((comment) => <div id='comment' key={comment.text}>{comment.text}<br/><i>{comment.name}</i></div>)}
        </div>
      </div>
    );
  }
}

export default App;