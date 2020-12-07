import Head from 'next/head';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Layout, Values } from '../components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    container: {
      marginTop: theme.spacing(2),
    },
  }),
);

type Props = {};

const data = {
  ambientTemperture: 22.17,
  exteriorTemperature: 24.91,
  patientTemperature: 35.98,
  risk: 'low',
};

const Home = (props: Props) => {
  const classes = useStyles(props);
  return (
    <>
      <Head>
        <title>Eva Tech Test | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Values {...data} />
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default Home;
