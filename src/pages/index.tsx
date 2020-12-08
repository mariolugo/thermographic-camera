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

/**
 * Main entry point for the application
 * @param props Props for the main component
 */
const Home = (props: Props) => {
  // store the records on the state
  const [records, setRecords] = useState<Array<any>>([]);
  const classes = useStyles(props);
  // dispatch
  const dispatch = useDispatch();
  // selector for the current record
  const current = useSelector((state: State) => state.home.current);

  // simulate a ComponentDidMount to dispatch both actions of the first render
  useEffect(() => {
    const timeStamp = +new Date();
    dispatch(homeActions.fetchValuesAction(timeStamp));
    dispatch(homeActions.fetchImageAction(timeStamp));
  }, []);

  // manually trigger the fetchs
  const tryAgain = () => {
    // fancy way to get the timestamp
    const timeStamp = +new Date();
    dispatch(homeActions.fetchValuesAction(timeStamp));
    dispatch(homeActions.fetchImageAction(timeStamp));
  };

  // clear local storage manually
  const clearLocalStorage = () => {
    if (typeof window !== 'undefined') {
      localStorage.clear();
      setRecords([]);
    }
  };

  // trigger download of the image
  const downloadImage = (timeStamp: number, image: string) => {
    if (typeof window !== 'undefined') {
      // this create an "a" element, then we add the href attribute with the url image,
      // and then the download attribute with the timeStamp as the name
      // then simulate a click, which will trigger the download
      const downloadLink = document.createElement('a');
      downloadLink.href = image;
      downloadLink.download = `${timeStamp}`;
      downloadLink.click();
    }
  };

  // if image loaded
  const imageLoaded = current && !current.image?.fetching && current.image?.image;
  // if image undefined
  const imageUndefined =
    current && !current.image?.fetching && typeof current.image?.image === 'undefined';
  // if image fetching
  const imageFetching = current && current.image?.fetching;
  // if data loaded
  const dataLoaded = current && !current.data?.fetching;
  // if image has error
  const imageHasError = current && !current.image?.fetching && current.image?.error;

  // this hook will excecute everytime current selector is updated
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // get data from local storage
      const data = localStorage.getItem('evaValues') || '[]';
      // parse data from string
      const parsedData = JSON.parse(data);

      // if image and data are loaded
      if (dataLoaded && imageLoaded) {
        // create a new record to add to state then add to local storage
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

  // this creates a timer to simulate a polling.. not the best practice..
  // return a function to clear the timeout
  useEffect((): any => {
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
              <ImageViewer image={current.image?.image} />
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
