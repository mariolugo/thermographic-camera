import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Layout, Values, TableValues, ImageViewer } from '../components';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { homeActions } from '../redux/home/actions';
import { HomeState } from '../redux/home/types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

type Props = any;

type State = {
  home: HomeState;
};

const Home = (props: Props) => {
  const [records, setRecords] = useState<Array<any>>([]);
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const current = useSelector((state: State) => state.home.current);

  useEffect(() => {
    const timeStamp = +new Date();
    dispatch(homeActions.fetchValuesAction(timeStamp));
    dispatch(homeActions.fetchImageAction(timeStamp));
  }, []);

  const tryAgain = () => {
    const timeStamp = +new Date();
    dispatch(homeActions.fetchValuesAction(timeStamp));
    dispatch(homeActions.fetchImageAction(timeStamp));
  };

  const clearLocalStorage = () => {
    if (typeof window !== 'undefined') {
      localStorage.clear();
      setRecords([]);
    }
  };

  const downloadImage = (timeStamp: number, image: string) => {
    if (typeof window !== 'undefined') {
      const downloadLink = document.createElement('a');
      downloadLink.href = image;
      downloadLink.download = `${timeStamp}`;
      downloadLink.click();
    }
  };

  const imageLoaded = current && !current.image?.fetching && current.image?.image;
  const imageUndefined =
    current && !current.image?.fetching && typeof current.image?.image === 'undefined';
  const imageFetching = current && current.image?.fetching;
  const dataLoaded = current && !current.data?.fetching;
  const imageHasError = current && !current.image?.fetching && current.image?.error;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('evaValues') || '[]';
      const parsedData = JSON.parse(data);

      if (dataLoaded && imageLoaded) {
        const input = {
          timeStamp: current.timeStamp,
          ...current.data,
          image: current.image?.image,
        };
        setRecords([...parsedData, { ...input }]);
        const dataString = [...parsedData, { ...input }];
        localStorage.setItem('evaValues', JSON.stringify(dataString));
      }
    }
  }, [current]);

  useEffect(() => {
    let timer: number;

    if (dataLoaded && imageLoaded) {
      timer = window.setTimeout(() => tryAgain(), 2000);
    }

    return () => timer && clearTimeout(timer);
  }, [imageLoaded, dataLoaded]);

  return (
    <>
      <Head>
        <title>Eva Tech Test | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {dataLoaded && <Values {...current.data} />}

        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={12} md={6}>
            {dataLoaded && <TableValues records={records} downloadImage={downloadImage} />}
          </Grid>
          <Grid item xs={12} md={6}>
            {imageFetching && <CircularProgress />}
            {(imageHasError || imageUndefined) && (
              <div>
                <Typography>An error ocurred</Typography>
                <Button variant="contained" color="primary" onClick={() => tryAgain()}>
                  Try Again
                </Button>
              </div>
            )}
            {imageLoaded && !imageHasError && !imageUndefined && (
              <ImageViewer image={current.image.image} />
            )}
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" onClick={() => clearLocalStorage()}>
          Clear local storage
        </Button>
      </Layout>
    </>
  );
};

export default Home;
