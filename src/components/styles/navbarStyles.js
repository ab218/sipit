const styles = {

  navBar: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#FFFF',
    color: '#5d4427',
    fontSize: '30px',
    boxShadow: '0 9px 10px 0 rgba(0,0,0,0.2)',
    fontFamily: 'Karla',
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
    fontFamily: 'Pacifico',
    fontWeight: 'bold',
    fontSize: 'calc(20px + 0.25vw)',

  },

  container1: {
    display: 'inline-flex',
    // padding: '1rem 0 0 3rem',
    fontSize: '20px',
    order: '1',

    //    flexDirection: 'row',
  },

  navItem: {
    padding: '12px 16px',
    color: 'black',
  },
  container2: {
    justifyContent: 'center',
    justifySelf: 'center',
    alignSelf: 'center',
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    order: '2',
    flexGrow: '2',
  },

  memberControl: {
    display: 'inline',
    minWidth: '200px',
    textAlign: 'right',
    fontSize: 'calc(15px + 0.25vw)',
    // flexWrap: 'wrap',
    order: '1',
  },

  logInBtn: {
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


// dropContent: {
  //   display: 'none',
  //   color: '#FFFF',
  //   position: 'relative',
  //   minWidth: '160px',
  //   boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
  //   zIndex: '1',
  // },

  // dropItem: {
  //   color: 'black',
  //   padding: '12px 16px',
  //   // text-decoration: none;
  // },

export default styles;
