const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  resize: {
    fontSize: 20,
  },
  cssLabel: {
    fontSize: 20,
    '&$cssFocused': {
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
    },
  },
});

export default styles;
