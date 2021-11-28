import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { CancelRounded, Mail, Notifications, Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import image from "../assets/user.jpg";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    //backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-between",
  },
  logoSm: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover:": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  icons: {
    display: (props) => (props.open ? "none" : "flex"),
    alignItems: "center",
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          ourMedia
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          Media
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <CancelRounded
            className={classes.cancel}
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(!open)}
          />
          <Badge badgeContent={7} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={5} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar alt="profile picture" src={image}></Avatar>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
