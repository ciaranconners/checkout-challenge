import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      input: {
        name: '',
        email: '',
        rating: '',
        text: '',
      },
    };
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onClick() {
    const newComment = this.state.input;
    const comments = this.state.comments;
    comments.push(newComment);
    this.setState({comments, input: {name: '', email: '', rating: '', text: ''}});
    document.getElementById('comment-input').reset();
  }

  handleChange(e) {
    const field = e.target.name;
    const value = e.target.value;
    const input = this.state.input;
    input[field] = value;
    this.setState({input});
  }

  render() {
    return (
      <div>
        <form id='comment-input'>
          Name: <br/>
          <input name="name" type="text" value={this.state.comments.name} onChange={this.handleChange}/><br/>
          Email: <br/>
          <input name="email" type="text" value={this.state.comments.email} onChange={this.handleChange}/><br/>
          Rating: <br/>
          <input name="rating" type="text" value={this.state.comments.rating} onChange={this.handleChange}/><br/>
          Comment: <br/>
          <input name="text" type="text" value={this.state.comments.text} onChange={this.handleChange}/><br/>
          <input type="button" value="Submit" onClick={this.onClick}/>
        </form>
        <div id='comment-display'>
          Recent Comments:<br/>
          {this.state.comments.map((comment) => <div id='comment' key={comment.text}>{comment.text}<br/><i>{comment.name}</i></div>)}
        </div>
      </div>
    );
  }
}

export default App;