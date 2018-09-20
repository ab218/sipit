const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    positon: 'absolute',
    height: '5em',
    top: 0,
  },

  textField: {
    width: 500,
  },

  input: {
    borderColor: '5px solid #f26622',
    //    borderRadius: '8px',
    color: 'black',
    backgroundColor: 'transparent',
  },

  searchBarWrapper: {
    position: 'relative',
    top: '11.5vh',
    marginRight: 'auto',
    marginLeft: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#5d4427',
    borderRadius: '30px',
    width: '50%',
    height: '31%',
    paddingTop: '4%',
    minWidth: '13em',
  },

  customForm: {
    position: 'absolute',
    display: 'inline-flex',
    top: '0.1em',
    left: '0.5em',
    width: '100%',
    height: '100%',
  },

  customSearchBtn: {
    border: '0',
    outline: '0',
    backgroundColor: 'transparent',
    verticalAlign: 'middle',
  },

  customFilterBtn: {
    border: '0',
    outline: '0',
    backgroundColor: 'transparent',
    verticalAlign: 'middle',
    paddingLeft: '3px',
    marginBottom: '40px',
  },

  filterWrapper: {
    backgroundColor: '#5d4427',
    borderRadius: '50%',
    position: 'absolute',
    width: '40px',
    height: '40px',
    margin: '0.35em  0em 0em 0.5em',
    paddingLeft: '0.2em',
  },
};
export default styles;
