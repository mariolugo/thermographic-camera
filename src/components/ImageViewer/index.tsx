import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((_) =>
  createStyles({
    image: {
      display: 'block',
      width: '100%',
    },
  }),
);

type Props = {
  image: string;
};

export const ImageViewer = (props: Props) => {
  const { image } = props;
  const classes = useStyles(props);
  return (
    <Paper elevation={1}>
      <img src={image} className={classes.image} />
    </Paper>
  );
};
