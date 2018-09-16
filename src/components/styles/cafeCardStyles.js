
const styles = () => ({
  card: {
    display: 'grid',
    gridTemplateRows: '30% 30% 30% 10%',
    maxWidth: 300,
    minWidth: 300,
    maxHeight: 450,
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 20,
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

});

export default styles;
