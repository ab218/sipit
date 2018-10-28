const styles = {
  input: {
    borderColor: '5px solid #f26622',
    borderRadius: '8px',
    margin: '0 0.5em',
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
    width: 120,
  },
  searchBarWrapper: {
    textAlign: 'center',
    alignSelf: 'center',
    flexGrow: '1',
    backgroundColor: '#049372',
    padding: '0 0.5em',
    borderRadius: '30px',
    // currently doesn't support below iphone6
    minWidth: '350px',
    maxWidth: '80%',
  },
  searchIcon: {
    color: '#FFFF',
  },
  container2: {
    minWidth: '360px',
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    order: '2',
    flexGrow: '2',
    height: '0',
  },
  sliderDiv: {
    width: 300,
  },
  slider: {
    padding: '22px 0px',
  },
};
export default styles;
