
const styles = () => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    maxWidth: 300,
    minWidth: 300,
    maxHeight: 450,
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 20,
  },
  cafeTitle: {
    color: 'black',
    fontSize: '22px',
  },
  spacer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr));',
    paddingLeft: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'inline-flex',
  },
  buttons: {
    position: 'relative',
    marginTop: '100%',
  },
  avatar: {
    backgroundColor: '#FC4A1A',
  },

});

export default styles;
