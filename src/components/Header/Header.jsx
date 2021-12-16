import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography varian="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
        <Typography varian="h6" className={classes.title}>
          Explore new places
        </Typography>
        {/* <Autocomplete> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
              <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </div>
        {/* </Autocomplete> */}
        </Box>
      </Toolbar>

    </AppBar>
  );
}

export default Header;
