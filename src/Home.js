import React from 'react';
import { withStyles } from '@material-ui/core';

const Home = (props) => {
    const { classes } = props;

    return (
      <div className={classes.container}>
        <h1 className={classes.title}> Gestão de Conhecimento</h1>
        <p className={classes.subTitle}> Gestão de Conhecimento</p>
      </div>
    )
}

const styles = theme => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.secondary.main,
      height: '100vh'
    },
    title: {
        color: theme.palette.primary.main,
    },
    subTitle: {
      backgroundColor: theme.palette.warning.color,
      fontSize: '20px'
    }
});

export default withStyles(styles)(Home);
