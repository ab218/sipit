import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const addColon = time => time.replace(/\b(\d{1,2})(\d{2})/g, '$1:$2');

const days = {
  0: 'Monday', 1: 'Tuesday', 2: 'Wednesday', 3: 'Thursday', 4: 'Friday', 5: 'Saturday', 6: 'Sunday',
};

function getDay(day) {
  return days[day];
}

const MapHours = ({ hours }) => {
  const arr = hours.map((row, i) => (
    <TableRow key={i}>
      <TableCell component="th" scope="row">
        {getDay(row.day)}
      </TableCell>
      <TableCell>{addColon(row.start)}</TableCell>
      <TableCell>{addColon(row.end)}</TableCell>
    </TableRow>
  ));
  return arr;
};

const HoursTableHead = () => (
  <TableHead>
    <TableRow>
      <TableCell />
      <TableCell>Open</TableCell>
      <TableCell>Close</TableCell>
    </TableRow>
  </TableHead>
);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
  },
});

const BusinessDetailsHours = ({ classes, hours }) => (
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <HoursTableHead />
      <TableBody>
        <MapHours hours={hours} />
      </TableBody>
    </Table>
  </Paper>
);

export default withStyles(styles)(BusinessDetailsHours);
