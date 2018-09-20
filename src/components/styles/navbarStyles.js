const styles = {

  navHead: {
    margin: '10px 0 0 20px',
    minWidth: '11rem',
    float: 'left',
    fontFamily: 'Pacifico',
    fontWeight: 'bold',
    fontSize: 'calc(20px + 0.25vw)',
  },

  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  container1: {
    display: 'flex',
    //    flexDirection: 'row',
  },

  navBody: {
    display: 'inline-flex',
    padding: '1rem 0 0 3rem',
    fontSize: '20px',
  },

  navBar: {
    display: 'flex',
    positon: 'absolute',
    backgroundColor: '#FFFF',
    color: '#5d4427',
    fontSize: '30px',
    boxShadow: '0 9px 10px 0 rgba(0,0,0,0.2)',
    fontFamily: 'Karla',
    paddingTop: '20px',
    zIndex: '9',
    width: '100%',
    height: '5em',
  },

  navItem: {
    padding: '12px 16px',
  },

  container2: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
  },

  navIcon: {
    //  paddingRight: '20px',
  },

  dropContent: {
    display: 'none',
    // display: 'grid',
    color: '#FFFF',
    position: 'relative',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: '1',

  },

  dropItem: {
    color: 'black',
    padding: '12px 16px',
    // text-decoration: none;
  },

  memberControl: {
    display: 'flex',
    textAlign: 'right',
    fontSize: 'calc(15px + 0.25vw)',
    top: '-15px',
    flexWrap: 'wrap',
  },

  logInBtn: {
    //  width: '200px',
    backgroundColor: '#f26622',
    border: '2px solid #f26622',
    borderRadius: '15px',
    color: '#FFFF',
    margin: '0 10px 20px 10px',
    padding: '5px 10px 5px 10px',
  },

  signUpBtn: {
    backgroundColor: '#6196d2',
    border: '2px solid #6196d2',
    borderRadius: '15px',
    color: '#FFFF',
    margin: '0 0.1em 2em',
    padding: '5px',
  },

  linkStyle: {

  },
};

export default styles;
