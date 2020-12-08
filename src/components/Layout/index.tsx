import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: 100,
    },
  }),
);

type Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Basic layout, here we can have authentication.
 * @param props The props have the children and classname props
 */
export const Layout = (props: Props) => {
  const { children, className } = props;
  const classes = useStyles(props);

  return (
    <section className={`${classes.root} ${className}`}>
      <Navbar />
      <Container>
        <Box>{children}</Box>
      </Container>
      <Footer />
    </section>
  );
};
