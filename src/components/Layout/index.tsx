import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Navbar } from '../Navbar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {
      height: '100%',
    },
    childrenContainer: {},
  }),
);

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Layout = (props: Props) => {
  const { children, className } = props;
  const classes = useStyles(props);

  return (
    <section className={`${classes.root} ${className}`}>
      <Navbar />
      <Container className={classes.childrenContainer}>
        <Box>{children}</Box>
      </Container>
    </section>
  );
};
