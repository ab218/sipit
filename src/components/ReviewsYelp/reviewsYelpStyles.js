const styles = {
  reviewWrapper: {
    maxWidth: '50em', margin: 'auto',
  },
  loading: {
    color: 'grey',
  },
  title: {
    backgroundColor: '#FC4A1A',
    paddingTop: '0.1em',
    paddingBottom: '0.2em',
    marginBottom: '2em',
    textAlign: 'left',
    borderRadius: '.5em',
    color: '#FFFF',
  },

  reviewMain: { display: 'inline-flex', flexDirection: 'column', width: '100%' },

  reviewTitle: {
    width: '100%',
    justifyContent: 'space-between',
    color: 'black',
    fontWeight: 'bold',
    display: 'inline-flex',
  },

  reviewContent: {
    position: 'relative',
    backgroundColor: '#f2f1ef',
    color: 'black',
    borderRadius: '.5em',
    padding: '1.5em',
  },

  reviewUsername: {
    marginRight: 'auto',
    padding: '1em',
  },

  reviewPostedTime: {
    color: 'green',
    float: 'right',
  },

  imgStyle: {
    height: '3em',
    width: '3em',
    borderRadius: '3em',
  },

  speechBubble: {
    content: '',
    bottom: 0,
    left: '20%',
    width: 0,
    height: 0,
    border: '15px solid transparent',
    borderTopColor: '#f2f1ef',
    borderBottom: 0,
    borderRight: 0,
    marginLeft: '-13px',
    marginBottom: '-26px',
  },
};

export default styles;
