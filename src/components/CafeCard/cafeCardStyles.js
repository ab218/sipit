
const styles = () => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    maxHeight: 450,
    margin: '1em',
  },
  cafeTitle: {
    color: 'black',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  spacer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',

  },
  brewing: {
    color: '#1b3c35',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'inline-flex',
    justifyContent: 'center',
  },
  buttons: {
    position: 'relative',
    marginTop: '100%',
  },
  avatar: {
    backgroundColor: '#FC4A1A',
  },
  reviewCnt: {
    fontFamily: 'Quicksand',
    color: '#FC4A1A',
    fontWeight: 'bold',
  },
});

export default styles;
