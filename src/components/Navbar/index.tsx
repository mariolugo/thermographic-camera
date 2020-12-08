import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((_: Theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

type Props = any;

/**
 * Navbar component
 * @param _  Props not used
 */
export const Navbar = (_: Props) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Eva Tech Test
        </Typography>
        <Button
          color="inherit"
          target="_blank"
          href="https://github.com/mariolugo/thermographic-camera">
          Github Repo
        </Button>
      </Toolbar>
    </AppBar>
  );
};
