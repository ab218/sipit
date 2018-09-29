const styles = theme => ({
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

export default styles;
