import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Filter1SharpIcon from '@material-ui/icons/Filter1Sharp';
import Filter2SharpIcon from '@material-ui/icons/Filter2Sharp';
import Filter3SharpIcon from '@material-ui/icons/Filter3Sharp';
import Filter4SharpIcon from '@material-ui/icons/Filter4Sharp';
import Filter5SharpIcon from '@material-ui/icons/Filter5Sharp';

import PropTypes from 'prop-types';

export const MainListItems = ({ onClickShowDash, onClickLogOut }) => (
  <>
    <ListItem button onClick={onClickShowDash}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountBalanceWalletIcon />
      </ListItemIcon>
      <ListItemText primary="Wallets 🚧" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings 🚧" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EmojiPeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Contact us 🚧" />
    </ListItem>
    <ListItem button onClick={onClickLogOut}>
      <ListItemIcon>
        <MeetingRoomIcon />
      </ListItemIcon>
      <ListItemText primary="Log out" />
    </ListItem>
  </>
);

export const SecondaryListItems = ({ allWallet }) => (
  <div>
    <ListSubheader inset> My Wallets</ListSubheader>
    {allWallet.map((elem, index) => (
      <ListItem key={elem.name} button>
        <ListItemIcon>
          {index === 0 && <Filter1SharpIcon />}
          {index === 1 && <Filter2SharpIcon />}
          {index === 2 && <Filter3SharpIcon />}
          {index === 3 && <Filter4SharpIcon />}
          {index === 4 && <Filter5SharpIcon />}
        </ListItemIcon>
        <ListItemText primary={elem.name} />
      </ListItem>
    ))}
  </div>
);

MainListItems.propTypes = {
  onClickShowDash: PropTypes.func.isRequired,
  onClickLogOut: PropTypes.func.isRequired,
};

SecondaryListItems.propTypes = {
  allWallet: PropTypes.array.isRequired,
};
