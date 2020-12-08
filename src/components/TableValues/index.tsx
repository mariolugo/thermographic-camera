import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((_: Theme) => ({
  table: {},
}));

type Record = {
  ambientTemperture: number;
  exteriorTemperature: number;
  patientTemperature: number;
  risk: string;
  image: string;
  timeStamp: number;
};

type Props = {
  records: Array<Record>;
  downloadImage: any;
};

export const TableValues = (props: Props) => {
  const { records, downloadImage } = props;
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Ambient Temperature</TableCell>
            <TableCell align="right">Exterior Temperature</TableCell>
            <TableCell align="right">Patient Temperature</TableCell>
            <TableCell align="right">Risk</TableCell>
            <TableCell align="right">Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((row) => (
            <TableRow key={row.timeStamp}>
              <TableCell component="th" scope="row">
                {row.timeStamp}
              </TableCell>
              <TableCell align="right">{row.ambientTemperture}</TableCell>
              <TableCell align="right">{row.exteriorTemperature}</TableCell>
              <TableCell align="right">{row.patientTemperature}</TableCell>
              <TableCell align="right">{row.risk}</TableCell>
              <TableCell align="right">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  onClick={() => downloadImage(row.timeStamp, row.image)}>
                  <GetAppIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
