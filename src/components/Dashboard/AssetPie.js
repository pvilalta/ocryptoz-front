import React, { Component } from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Title from '../MainPage/Title';

import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    padding: '8px',
    height: 100,
  },
});

export default function AssetPie({ assetPie }) {
  const chartData = {
    labels: assetPie.map((elem) => elem.asset),
    datasets: [
      {
        label: 'Percentage',
        data: assetPie.map((elem) => elem.percentage),
        backgroundColor: [
          '#f44336',
          '#2196f3',
          '#009688',
          '#ffc107',
          '#673ab7',
          '#00bcd4',
        ],
      },
    ],
  };

  const classes = useStyles();

  const chartOption = {
    legend: {
      display: true,
      position: 'right',
      align: 'start',
      labels: {
        fontColor: '#3F51B5',
        usePointStyle: true,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <>
      {/* <CssBaseline /> */}

      <Title>Asset repartition</Title>
      <Doughnut
        className={classes.root}
        data={chartData}
        options={chartOption}
      />
    </>
  );
}

AssetPie.propTypes = {
  assetPie: PropTypes.array.isRequired,
};
