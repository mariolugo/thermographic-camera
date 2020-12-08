import React, { useEffect } from 'react';
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
  ambientTemperture: number;
  exteriorTemperature: number;
  patientTemperature: number;
  risk: string;
};

const renderColor = (risk: string) => {
  switch (risk) {
    case 'low':
      return 'green';
    case 'medium':
      return 'yellow';
    case 'high':
      return 'red';
    default:
      return 'black';
  }
};

export const Values = (props: Props) => {
  const { ambientTemperture, exteriorTemperature, patientTemperature, risk } = props;
  const classes = useStyles();

  useEffect(() => {
    if (risk === 'high') alert('High risk');
  }, [risk]);
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.paper}>
        <p>Ambient Temperature : {ambientTemperture}</p>
        <p>Exterior Temperature : {exteriorTemperature}</p>
        <p>Patient Temperature : {patientTemperature}</p>
        <p>
          Risk:{' '}
          <span
            style={{
              color: renderColor('low'),
            }}>
            {risk}
          </span>
        </p>
      </Paper>
    </div>
  );
};
