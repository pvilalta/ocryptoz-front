import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import numberWithCommas from '../../utils/numberWithCommas';
import Title from '../MainPage/Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function TotalPnl({ mainWallet }) {
  const classes = useStyles();

  const add = mainWallet.map((elem) => parseInt(elem.pnl, 10));
  const sum = add.reduce((a, b) => a + b, 0);

  return (
    <>
      <Title>Total Profit and Loss</Title>
      <Typography component="p" variant="h4">
        {`${numberWithCommas(sum)} $`}
        {}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </>
  );
}

TotalPnl.propTypes = {
  mainWallet: PropTypes.array.isRequired,
};
