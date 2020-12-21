import React from 'react';
import Link from '@material-ui/core/Link';
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Box from '@material-ui/core/Box';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import numberWithCommas from '../../utils/numberWithCommas';
import PropTypes from 'prop-types';
import Title from '../MainPage/Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  addButton: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  addButtonMobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      outlined: {
        width: '11vw',
        float: 'left',
        size: '1em',
        whiteSpace: 'nowrap',
        fontSize: '0.875rem',
      },
    },
  },
});

export default function assetArray({ mainWallet, onClickShowForm }) {
  const classes = useStyles();

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Box
          onClick={() => {
            onClickShowForm();
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            className={classes.addButtonMobile}
          >
            <AddIcon />
          </Button>
          <Button
            startIcon={<AddIcon />}
            variant="outlined"
            color="primary"
            className={classes.addButton}
          >
            Add event
          </Button>
        </Box>
      </MuiThemeProvider>
      <Title>Wallet</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Logo</TableCell>
            <TableCell>Asset</TableCell>
            <TableCell>quantity</TableCell>
            <TableCell>Fees</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>P&L</TableCell>
            <TableCell>P&L%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mainWallet.map((row) => (
            <TableRow key={row.asset}>
              <TableCell>
                <img
                  src={row.image}
                  style={{ width: '33px', height: '33px' }}
                  alt={row.asset}
                />
              </TableCell>
              <TableCell>{row.asset}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{numberWithCommas(row.usd_fees)}</TableCell>
              <TableCell>{numberWithCommas(row.usd_amount)}</TableCell>
              <TableCell>{numberWithCommas(row.pnl)}</TableCell>
              <TableCell>{row.pnl_percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </>
  );
}

assetArray.propTypes = {
  mainWallet: PropTypes.array.isRequired,
  onClickShowForm: PropTypes.func.isRequired,
};
