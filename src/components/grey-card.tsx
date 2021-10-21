import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import classes from "../styles/card.module.scss";

interface ITextCard {
  title: string;
  text: string;
  button: string;
  image: string;
  onClick: () => void;
}
const useStyles = makeStyles({
  label: {
    fontSize: "16px",
    fontWeight: 600,
    textTransform: "none",
    color: "white",
  },
  root: {
    backgroundColor: "#111",
    marginTop: "10px",
  },
});

const GreyCard = (props: ITextCard) => {
  const styles = useStyles();
  return (
    <Grid container direction="column" alignItems="center">
      <Card className={classes.card}>
        <div className={classes.container}>
          <CardContent className={classes.margin}>
            <Typography className={classes.title} variant="h4">
              {props.title}
            </Typography>
            <Typography className={classes.text} variant="body1">
              {props.text}
            </Typography>
            <Button
              variant="contained"
              className={classes.button}
              classes={{ label: styles.label, root: styles.root }}
              onClick={props.onClick}
            >
              {props.button}
            </Button>
          </CardContent>
          <div className={classes.end}>
            <div className={classes.overlay} />
            <CardMedia
              image={props.image}
              title={props.title}
              className={classes.photo}
            />
          </div>
        </div>
      </Card>
    </Grid>
  );
};
export default GreyCard;
