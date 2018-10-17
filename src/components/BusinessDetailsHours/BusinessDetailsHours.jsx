import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const convertDay = (day) => {
  switch (day) {
  case 0:
    return 'Monday';
  case 1:
    return 'Tuesday';
  case 2:
    return 'Wednesday';
  case 3:
    return 'Thursday';
  case 4:
    return 'Friday';
  case 5:
    return 'Saturday';
  case 6:
    return 'Sunday';
  default:
    return null;
  }
};

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 100,
  },
});

const BusinessDetailsHours = (props) => {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Open at</TableCell>
            <TableCell>Closes at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.hours.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {convertDay(row.day)}
              </TableCell>
              <TableCell>{row.start}</TableCell>
              <TableCell>{row.end}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles(styles)(BusinessDetailsHours);
