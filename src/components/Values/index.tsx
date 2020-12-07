import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

type Props = {
  ambientTemperture: Number;
  exteriorTemperature: Number;
  patientTemperature: Number;
  risk: string;
};

export const Values = (props: Props) => {
  const { ambientTemperture, exteriorTemperature, patientTemperature, risk } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.paper}>
        <p>Ambient Temperature : {ambientTemperture}</p>
        <p>Exterior Temperature : {exteriorTemperature}</p>
        <p>Patient Temperature : {patientTemperature}</p>
        <p> Risk: {risk}</p>
      </Paper>
    </div>
  );
};
