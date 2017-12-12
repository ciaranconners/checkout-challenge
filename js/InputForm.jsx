import React from 'react';
import PropTypes from 'prop-types';
import ErrorModal from './ErrorModal';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        name: '',
        email: '',
        rating: '',
        text: ''
      },
      renderErrorMessage: false,
      errorMessage: 'you must enter a rating between 1 & 5, inclusive',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clickThroughError = this.clickThroughError.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const rating = parseInt(this.state.input.rating, 10);
    if (!rating || rating > 5 || rating < 1) {
      this.setState({renderErrorMessage: true});
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

  clickThroughError() {
    this.setState({renderErrorMessage: !this.state.renderErrorMessage})
    document.getElementById('rating').focus();
  }

  render() {
    return (
      <div id="form-container">
        <form id="form" onSubmit={this.onSubmit}>
          Name: <br/>
          <input name="name" type="text" value={this.state.input.name} onChange={this.handleChange}/><br/>
          Email: <br/>
          <input name="email" type="email" value={this.state.input.email} onChange={this.handleChange}/><br/>
          Rating: <br/>
          <input name="rating" id="rating" type="text" value={this.state.input.rating} onChange={this.handleChange}/><br/>
          Comment: <br/>
          <textarea name="text" type="text" value={this.state.input.text} onChange={this.handleChange}/><br/>
          <input type="submit" value="Submit"/>
        </form>
          {
            this.state.renderErrorMessage ? <ErrorModal message={this.state.errorMessage} clickThroughError={this.clickThroughError}/> : null
          }
      </div>
    );
  }
}

InputForm.propTypes = {
  saveComment: PropTypes.func.isRequired,
};

export default InputForm;