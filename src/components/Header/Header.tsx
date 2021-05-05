import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#F0FFFF",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0
    }
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#696969",
    textAlign: "left"
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
    color:"#696969"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  drawerContainer: {
    padding: "20px 30px"
  }
}));

const headersData = [
  {
    label: "Home",
    href: "/home"
  },
  {
    label: "Destination",
    href: "/destination"
  },
  {
    label: "Blog",
    href: "/blog"
  },
  {
    label: "Contact",
    href: "/contact"
  },
  {
    label: "Login",
    href: "/login"
  }
];

const Header = () => {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  });

  const { mobileView, drawerOpen } = state;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState(prevState => ({ ...prevState, mobileView: true }))
        : setState(prevState => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {cityTourLogo()}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState(prevState => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState(prevState => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            // color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <div>{cityTourLogo()}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const cityTourLogo = () => {
    return (
      <Typography variant="h6" component="h1" className={logo}>
        Citytour
      </Typography>
    );
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton
          }}
        >
          {label}
        </Button>
      );
    });
  };
  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
};

export default Header;
