import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  }),
);

type Props = {};

const Home = (props: Props) => {
  const classes = useStyles(props);
  return (
    <main className={classes.root}>
      <Head>
        <title>Eva Tech Test | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant="h1" component="h2" gutterBottom>
        Hello World
      </Typography>
    </main>
  );
};

export default Home;
