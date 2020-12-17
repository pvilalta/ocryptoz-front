import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Chart from './Chart';
import Deposits from './Deposits';
import AssetPie from './AssetPie';
import AssetArray from './AssetArray';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    boxSizing: 'border-box',
  },
  fixedHeight: {
    height: 240,
  },
}));

//
export default function Dashboard({ mainWallet, assetPie, onClickShowForm }) {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <>
      <Grid container spacing={3}>
        {/* Chart */}
        {/* <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                  <Chart />
                </Paper>
              </Grid> */}
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Deposits />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <AssetPie assetPie={assetPie} />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <AssetArray
              mainWallet={mainWallet}
              onClickShowForm={onClickShowForm}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

Dashboard.propTypes = {
  mainWallet: PropTypes.array.isRequired,
  assetPie: PropTypes.array.isRequired,
  onClickShowForm: PropTypes.func.isRequired,
};
