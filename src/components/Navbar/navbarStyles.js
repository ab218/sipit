const styles = {
  navBar: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#23cba7',
    color: '#FFFF',
    fontSize: '30px',
    boxShadow: '0 9px 10px 0 rgba(0,0,0,0.2)',
    paddingTop: '20px',
    zIndex: '9',
    width: '100%',
    height: '5em',
    justifyContent: 'space-between',
  },
  navHead: {
    order: '0',
    margin: '10px 0 0 20px',
    minWidth: '11rem',
    float: 'left',
  },
  navItem: {
    color: '#FFFF',
  },
  memberControl: {
    display: 'inline',
    fontSize: 'calc(15px + 0.25vw)',
    order: '1',
  },
  logInBtn: {
    backgroundColor: '#f26622',
    border: '2px solid #FFFF',
    borderRadius: '15px',
    color: '#FFFF',
    margin: '0 10px 20px 10px',
    padding: '5px 10px 5px 10px',
  },
  signUpBtn: {
    backgroundColor: '#6196d2',
    border: '2px solid #FFFF',
    borderRadius: '15px',
    color: '#FFFF',
    margin: '0 0.1em 2em',
    padding: '5px',
  },
  container1: {
    display: 'inline-flex',
    fontSize: '20px',
    order: '1',
  },
  container2: {
    minWidth: '360px',
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    order: '2',
    flexGrow: '2',
  },
  fontTitles: {
    fontFamily: 'Maven Pro',
    fontWeight: 'bold',
    fontSize: 'calc(20px + 0.25vw)',
  },
  fontContents: {
    fontFamily: 'Quicksand',
  },
};

export default styles;
