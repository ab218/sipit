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
    position: 'absolute',
    top: '11.5vh',
    left: '48%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#5d4427',
    borderRadius: '30px',
    width: '18em',
    height: '1.3em',
  },
  customForm: {
    position: 'relative',
    display: 'contents',
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
