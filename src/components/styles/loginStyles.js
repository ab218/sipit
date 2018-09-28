export const styles = theme => ({
  container: {
    display: 'grid',
    flexWrap: 'wrap',
    width: 300,
    margin: '0 auto',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
    },
  },
});

export const customStyles = {
  formBox: {
    padding: '3em',
    textAlign: 'center',
    backgroundColor: '#FFFF',
    borderRadius: '15%',
    marginTop: '30px',
    marginBottom: '30px',
    top: '70px',
    bottom: '70px',
  },
  submitBtn: {
    display: 'inline-block',
    backgroundColor: '#FFFF',
    borderStyle: 'none',
    marginTop: '50px',
    padding: '0.3em 1em',
    textDecoration: 'none',
    textAlign: 'center',
    color: '#f26622',
    border: 'solid 2px #f26622',
    borderRadius: '3px',
    transition: '.4s',
  },
  title: {
    color: '#5d4427',
    fontSize: '56px',
    margin: '0 0 50px 0',
    fontFamily: 'Pacifico',
    fontWeight: 'bold',
  },
};
