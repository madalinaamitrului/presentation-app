import React from "react";
import PageHeader from "../components/page-header";
import Presentation from "../components/presentation";
import classes from "../styles/home.module.scss";
import GreyCard from "../components/grey-card";
import me from "../images/me.png";
import { useHistory } from "react-router";
function Home() {
  const history = useHistory();
  function handleRedirect() {
    history.push("/about");
  }
  return (
    <>
      <PageHeader
        variant="transparent"
        onClick={handleRedirect}
        button1="About"
        button2="Contact"
      />
      <div className={classes.dark}>
        <Presentation />
      </div>
      <GreyCard
        title="Passionate and joyful"
        text="Waiting to see what's next but always making the best out of what I have, excited to learn and trying to do more than I think I am capable of. Love to interact with people and create amazing things."
        image={me}
        button="More"
        onClick={handleRedirect}
      />
    </>
  );
}
export default Home;
