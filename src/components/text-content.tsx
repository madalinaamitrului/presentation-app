import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import styles from "../styles/container.module.scss";
function TextContent() {
  const Title = ({ ...props }) => (
    <Typography variant={"h4"}>{props.title}</Typography>
  );
  const Item = ({ ...props }) => {
    return (
      <ListItem>
        <ListItemText primary={props.text} className={styles.ListItem} />
      </ListItem>
    );
  };
  return (
    <Grid container>
      <Grid item xs={12} md={6} lg={6} xl={6}>
        <div className={styles.container}>
          <Title title="Interests at the moment" />
          <List>
            <Item text="Vanilla Javascript" />
            <Item text=".NET" />
            <Item text="CSS" />
            <Item text="React" />
          </List>
        </div>
      </Grid>
      <Grid item xs={12} md={6} lg={6} xl={6}>
        <div className={styles.container}>
          <Title title="Goals" />
          <List>
            <Item text="Cleaner code" />
            <Item text="New skills" />
            <Item text="Communication and team-work" />
          </List>
        </div>
      </Grid>
    </Grid>
  );
}
export default TextContent;
