import { Button } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import React, { Fragment, useCallback } from "react";
import HeaderNavigation from "../components/header-navigation";
import styleClasses from "../styles/page-header.module.scss";

const drawerWidth = 240;

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      buttons: {
        display: "flex",
        justifyContent: "center",
        padding: "25px",
      },
      drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#fff",
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      },
    }),
  {
    name: "PageHeader",
  }
);

interface PageHeaderProps {
  variant?: "transparent" | "contained";
  backgroundColor?: string;
  onClick: () => void;
  button1: string;
  button2: string;
}

export default function PageHeader(props: PageHeaderProps) {
  const { variant, button1, button2 } = props;
  const classes = useStyles(props);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((previousValue) => !previousValue);
  }, [setMobileOpen]);
  const backgroundColor = {
    transparent: "#000000",
    contained: "#fff",
  }[variant as string];
  return (
    <Fragment>
      <HeaderNavigation
        backgroundColor={backgroundColor}
        onClick={handleDrawerToggle}
        button1={button1}
        button2={button2}
      />
      <Drawer
        BackdropProps={{ invisible: false }}
        variant="temporary"
        anchor={"left"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{ paper: classes.drawerPaper }}
      >
        <Grid container direction="column">
          <Grid item>
            <IconButton
              edge="start"
              className={styleClasses["drawer-closeIcon"]}
              onClick={handleDrawerToggle}
              aria-label="menu"
            >
              <CloseIcon />
            </IconButton>
          </Grid>

          <Grid container spacing={2} className={classes.buttons}>
            <Grid item xs={12}>
              <Button fullWidth variant={"outlined"} onClick={props.onClick}>
                {button1}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant={"contained"} color={"primary"}>
                {button2}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Drawer>
    </Fragment>
  );
}
