import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((_: Theme) => ({
  root: {
    top: 'auto',
    bottom: 0,
  },
  title: {
    flexGrow: 1,
  },
}));

type Props = {};

export const Footer = (_: Props) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Made by Mario Lugo
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
