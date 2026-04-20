import {Autocomplete} from "@react-google-maps/api";
import {AppBar, Typography, InputBase, Toolbar,Box} from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
              Travel Advisor
          </Typography>
          <Box display="flex">
            <Typography variant="h6" className={classes.title}>
                Explore new places
            </Typography>
            <AutoComplete>
              <div className={classes.search}>
                  <div className={classes.searchIcon}>
                        <SearchIcon />
                  </div>
                  <InputBase placeholder="Search..." classes={{root:classes.inputRoot. input:classes.inputInput}} />
              </div>
            </AutoComplete>
          </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header