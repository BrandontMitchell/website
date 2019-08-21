import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      textAlign: 'center',
      alignContent: 'center',
    },
    media: {
      height: 140,
    },
  });

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            <h1 style={{textAlign: 'center'}}>Brandon Mitchell</h1>
        </div>
    );
}

export default Header;
