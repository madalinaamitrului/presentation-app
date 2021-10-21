import React from "react";
import PageHeader from "../components/page-header";
import { useHistory } from "react-router";
import Carousel from "../components/carousel";
import yoga from "../images/yoga.png";
import gym from "../images/gym.jpg";
import biking from "../images/biking.jpg";
import code from "../images/code.jpg";
import music from "../images/music.jpg";
import TextContent from "../components/text-content";
const photos = [yoga, gym, biking, code, music];
function About() {
  const history = useHistory();
  function handleRedirect() {
    history.replace("/");
    console.log("hi");
  }
  return (
    <>
      <PageHeader
        variant="contained"
        onClick={handleRedirect}
        button1="Home"
        button2="Contact"
      />
      <Carousel photos={photos} />
      <TextContent />
    </>
  );
}
export default About;
