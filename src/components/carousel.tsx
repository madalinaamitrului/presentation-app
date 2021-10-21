import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ArrowLeft from "@material-ui/icons/ArrowBack";
import ArrowRight from "@material-ui/icons/ArrowForward";
import classNames from "classnames/bind";
import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  ButtonNext,
  ButtonBack,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import React from "react";
import classes from "../styles/carousel.module.scss";

interface CarouselProps {
  photos?: string[];
}
const Carousel = (props: CarouselProps) => {
  const content = (
    <>
      <Typography variant={"h4"} className={classes.title} color={"primary"}>
        Hobbies
      </Typography>
      <ButtonBack className={classNames(classes.button, classes.back)}>
        <ArrowLeft />
      </ButtonBack>
      <ButtonNext className={classNames(classes.button, classes.next)}>
        <ArrowRight />
      </ButtonNext>
      <Slider className={classes.slider}>
        {props.photos?.map((image, index) => (
          <Slide key={index} index={index} innerClassName={classes.slide}>
            <Image src={image} hasMasterSpinner />
          </Slide>
        ))}
      </Slider>
    </>
  );
  const theme = useTheme();

  const twoSlidesQuery = useMediaQuery(theme.breakpoints.down("xs"));
  const threeSlidesQuery = useMediaQuery(theme.breakpoints.only("sm"));
  const fourSlidesQuery = useMediaQuery(theme.breakpoints.up("md"));
  const visibleSlides = () => {
    if (twoSlidesQuery) {
      return 2;
    } else if (threeSlidesQuery) {
      return 3;
    } else if (fourSlidesQuery) {
      return 4;
    } else {
      return 0;
    }
  };
  return (
    <div className={classes.container}>
      <CarouselProvider
        className={classes.customCarusel}
        naturalSlideWidth={256}
        naturalSlideHeight={287}
        totalSlides={props.photos?.length || 0}
        visibleSlides={visibleSlides()}
        step={1}
        infinite={true}
        isPlaying={true}
        interval={2500}
      >
        {content}
      </CarouselProvider>
    </div>
  );
};
export default Carousel;
