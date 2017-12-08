import React from 'react';
import PropTypes from 'prop-types';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        name: '',
        email: '',
        rating: '',
        text: ''
      }
    };
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onClick() {
    const rating = parseInt(this.state.input.rating, 10);
    if (!rating || rating > 5 || rating < 1) {
      this.state.input.rating = '';
      return;
    }
    this.props.saveComment(this.state.input);
    const input = {name: '', email: '', rating: '', text: ''};
    this.setState({input});
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
        <form id='comment-input'>
          Name: <br/>
          <input name="name" type="text" value={this.state.input.name} onChange={this.handleChange}/><br/>
          Email: <br/>
          <input name="email" type="text" value={this.state.input.email} onChange={this.handleChange}/><br/>
          Rating: <br/>
          <input name="rating" type="text" value={this.state.input.rating} onChange={this.handleChange}/><br/>
          Comment: <br/>
          <input name="text" type="text" value={this.state.input.text} onChange={this.handleChange}/><br/>
          <input type="button" value="Submit" onClick={this.onClick}/>
        </form>
    );
  }

}

InputForm.propTypes = {
  saveComment: PropTypes.func.isRequired,
};

export default InputForm;