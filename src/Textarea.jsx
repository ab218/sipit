import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 300,
  },
  input: {
    borderColor: '5px solid black',
  }
};

const textFieldPadding = {
  padding: '100px',
  //    fontFamily: 'Karla', sans-serif;
}

const icon = {
  paddingTop: '25px',
  fontSize: '28px',
  color: '#FFFF',
}
class TextFieldMargins extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { container } = styles;
    return (
      <div style={container} >
        <div style={textFieldPadding}></div>
        <form onSubmit={this.props.searchCafes.bind(this)}>
          <TextField
            id="cafeSearch"
            name="cafeSearch"
            defaultValue="Enter Cafe name"
            margin="normal"
            onChange={this.props.handleInputChange.bind(this)}
          />
          <i className="fas fa-search" style={icon}></i>
        </form>
      </div>
    );
  }
}

// TextFieldMargins.propTypes = {
//   classes: PropTypes.object.isRequired,
// };


export default withStyles(styles)(TextFieldMargins);
