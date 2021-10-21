import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { IconButtonProps } from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, Theme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import styleClasses from "../styles/header-navigation.module.scss";
import Logo from "../images/logo.png";
import { useHistory } from "react-router";

interface HeaderNavigationProps {
  backgroundColor?: string;
  onClick: IconButtonProps["onClick"];
  button1:string;
  button2:string;
}

const getContrast = (theme: Theme, color?: string) =>
  color ? theme.palette.getContrastText(color) : void 0;

const useStyles = makeStyles<Theme, Partial<HeaderNavigationProps>>(
  (theme) => ({
    menuIcon: {
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
      },
    },
    outlinedButton: ({ backgroundColor }) => ({
      borderColor: getContrast(theme, backgroundColor),
      color: getContrast(theme, backgroundColor),
      marginRight: theme.spacing(3),
      padding: "10px",
      "&:hover": {
        backgroundColor: "rgb(169,169,169,0.5)",
      },
    }),
    containedButton: ({ backgroundColor }) => ({
      backgroundColor: getContrast(theme, backgroundColor),
      color: backgroundColor,
      padding: "10px",
      "&:hover": {
        backgroundColor: "rgb(169,169,169,0.5)",
      },
    }),
    toggleIcon: ({ backgroundColor }) => ({
      color: getContrast(theme, backgroundColor),
    }),
    header: ({ backgroundColor }) => ({
      backgroundColor,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
      alignItems: "center",
      paddingTop: "10px",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "flex-start",
        paddingTop: 0,
      },
    }),
    logo: {
      marginLeft: "20px",
    },
  }),
  {
    name: "HeaderNavigation",
  }
);
function HeaderNavigation({ backgroundColor,button1, button2, onClick }: HeaderNavigationProps) {
  const classes = useStyles({ backgroundColor });
  const history = useHistory();
  function handleRedirect() {
    if(button1==="About"){
      history.push("/about");
    }else{
      history.replace('/');
    }
    
  }
  return (
    <AppBar position="static">
      <Toolbar className={classes.header}>
        <IconButton
          edge="start"
          color="inherit"
          className={classes.menuIcon}
          aria-label="menu"
          onClick={onClick}
        >
          <MenuIcon className={classes.toggleIcon} />
        </IconButton>

        <Container className={classes.container} maxWidth={false}>
          <Grid container>
            <Grid
              container
              item
              xs
              md={2}
              lg={2}
              className={styleClasses.logoContainer}
            >
              <div className={classes.logo}>
                <img src={Logo} alt="logo" className={styleClasses.logo} />
              </div>
            </Grid>
            <Grid container item md={6} lg={7} />
            <Grid
              container
              item
              xs
              md={4}
              lg={3}
              alignItems={"center"}
              justifyContent={"flex-end"}
              className={styleClasses.actions}
            >
              <Button
                variant={"outlined"}
                className={classes.outlinedButton}
                onClick={handleRedirect}
              >
                {button1}
              </Button>
              <Button variant={"contained"}  className={classes.containedButton}>
                {button2}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
export default HeaderNavigation;
