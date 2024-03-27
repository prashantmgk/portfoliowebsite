import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

// import Fab from "@mui/material/Fab";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


export default function ResponsiveCarousel({data}) {
   const ref = React.useRef();
   return (
      <div style={{ width: "100%", position: "relative" }}>
         <ResponsiveContainer
            carouselRef={ref}
            render={(parentWidth, carouselRef) => {
               // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
               // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
               // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
               // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
               let currentVisibleSlide = 5;
               if (parentWidth <= 1440) currentVisibleSlide = 3;
               if (parentWidth <= 1080) currentVisibleSlide = 3;
               return (
                  <StackedCarousel
                  ref={carouselRef}
                  slideComponent={Card}
                  slideWidth={parentWidth < 800 ? parentWidth - 70 : 750}
                  carouselWidth={parentWidth}
                  data={data}
                  currentVisibleSlide={currentVisibleSlide}
                  maxVisibleSlide={5}
                  useGrabCursor
                  />
               );
            }}
         />
         <>
            {/* <Fab
               style={{ position: "absolute", top: "40%", left: 10, zIndex: 10 }}
               size="small"
               color="warning"
               onClick={() => {
                  ref.current?.goBack();
               }}
            >
               <ArrowBackIcon />
            </Fab>
            <Fab
               style={{ position: "absolute", top: "40%", right: 10, zIndex: 10 }}
               size="small"
               color="warning"
               onClick={() => {
                  ref.current?.goNext(6);
               }}
            >
               <ArrowForwardIcon />
            </Fab> */}
         </>
      </div>
   );
}

// Very import to memoize your Slide component otherwise there might be performance issue
// At minimum your should do a simple React.memo(SlideComponent)
// If you want the absolute best performance then pass in a custom comparator function like below
export const Card = React.memo(function (props) {
   const { data, dataIndex } = props;
   const { cover } = data[dataIndex];
   return (
      <div
         style={{
         width: "100%",
         // height: 300,
         userSelect: "none",
         }}
         className="my-slide-component h-[200px] md:h-[300px] w-[100%]"
      >
         <img
            alt="cover"
            style={{
               height: "100%",
               width: "100%",
               objectFit: "cover",
               borderRadius: 8,
            }}
            draggable={false}
            src={cover}
         />
      </div>
   );
});
