
const styles = () => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    maxWidth: '25em',
    minWidth: '25em',
    maxHeight: 450,
    //    paddingRight: 20,
    //    paddingLeft: 20,
    marginBottom: 20,
  },
  cafeTitle: {
    color: 'black',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  spacer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(25em, 1fr));',
  },
  brewing: {
    color: 'white',
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
