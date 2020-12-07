import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Layout, Values } from '../components';

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
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
      </Layout>
    </>
  );
};

export default Home;
