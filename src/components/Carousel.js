import React, {useState, useEffect, useRef, Fragment} from 'react';

import './Carousel.css';
import  Test from '../assets/img/carrousel/l1.jpg'
import  Test1 from '../assets/img/carrousel/l2.jpg'
import  Test2 from '../assets/img/carrousel/l3.jpg'
import  Test3 from '../assets/img/carrousel/l4.jpg'
import  Test4 from '../assets/img/carrousel/l5.jpg'
import  Test5 from '../assets/img/carrousel/l6.jpg'
import  Test6 from '../assets/img/carrousel/l7.jpg'
import  Test7 from '../assets/img/carrousel/l8.jpg'
import  Test8 from '../assets/img/carrousel/l9.jpg'
import  Test9 from '../assets/img/carrousel/l10.jpg'
import  Test10 from '../assets/img/carrousel/l11.jpg'
import  Test11 from '../assets/img/carrousel/l12.jpg'
import  Test12 from '../assets/img/carrousel/l13.jpg'
import  Test13 from '../assets/img/carrousel/l14.jpg'
import  Test14 from '../assets/img/carrousel/l15.jpg'



/* Default Properties */
const IMG_WIDTH = 300;
const IMG_HEIGHT = 300;
const parentPad = 0;
const VISIBLEIMAGES = 3;
const DURATION = 750;

const Carousel = (props) => {
  const {imgList = [], img_width = IMG_WIDTH, img_height = IMG_HEIGHT, visibleImages = VISIBLEIMAGES, duration = DURATION, autoNext = false, timeForNext = 3000} = props;
  /* Hooks Declarations Start*/
  const [currFirstImg, setCurrFirstImg] = useState(0);  
  const [actualFirst, setActualFirst] = useState('');   
  const [visibleItemsProps, setVisibleItemsProps] = useState({ order: [], styles: {}});
  const currMiddleImgRef = useRef(0); 
  const intervalRef = useRef(0);  
  const imgDifference = useRef(1); 
  const durationRef = useRef(duration); 
  const parentHeight = img_height + 2 * parentPad;  
  const parentWidth = img_width * 3;  
  const elementsInLeft = Math.ceil(visibleImages / 2);  
  const elementsInRight = visibleImages - elementsInLeft;

  const constructVisibleItemsProps = () => {
    const visibleItemsProps = {}; 
    visibleItemsProps.order = [];
    let curr_center = currFirstImg; // Storing the Current Middle element in focus
    let timesToIterate = 0; // To iterate through all visible number of images.
    let zIndex = - elementsInRight; // We start from left to right and Zindex has to keep on increasing till middle then has to reduce.
    let xTranslate = img_width; // To move the element with respect to x axis
    let zTranslate = 0; // To reduce image size for images apart from center
    let opacity = 1;
    const division = (img_width * (1.66 / elementsInLeft)); // Specifies the length that next image has to move away from with resoect to current image (1.6 times the current image)
    let opacityDivider = (0.7 / elementsInRight); // minimum opacity should be 0.3 (1-0.7)
    let rightEltCount = elementsInRight;
    let leftEltCount = elementsInLeft; // including middle element
    let curr_center_copy = curr_center;
  
    while(timesToIterate < visibleImages ) {
      const styles = {};
      let currImgIndex;
      let currImgIndexOnRight = true; // Tells if in this iteration the currently iterated image lies left to the middle image or not
      // To set properties for elements in right side
      if (timesToIterate < elementsInRight) {
        const nextIndex = curr_center - (rightEltCount);
        currImgIndex = nextIndex > -1 ? nextIndex : imgList.length - Math.abs(nextIndex); // Gives the rightmost elemnt in first iteration and then the subsequent elements down the iteration
        opacity = 1 - (opacityDivider * rightEltCount); // To assign lowest opacity to last element and increaing it till we come to middle
        zTranslate =  -division * rightEltCount;  // To increase the size of the images subsequently from last to middle
        xTranslate = img_width - (division * rightEltCount);  // X coordinate position
        rightEltCount--;
      } else {  // To set properties for elements in center and to left of it. All props behaves similar to right
        currImgIndexOnRight = false;
        currImgIndex = curr_center_copy;  
        if (curr_center_copy + 1 >= imgList.length) { // to maintain cyclic carousel
          curr_center_copy = 0;
        } else {
          curr_center_copy++;
        }
        opacity = 1 - (opacityDivider * Math.abs(leftEltCount - (timesToIterate + 1)));
        zTranslate =  - division * Math.abs(leftEltCount - (timesToIterate + 1));
        xTranslate = img_width + division * Math.abs(leftEltCount - (timesToIterate + 1));
      }
      // Assigning above calculated values to 'styles' object
      styles.transform =  'translateX(' + xTranslate + 'px) translateZ(' +  zTranslate + 'px)';
      styles.opacity = opacity;
      styles.zIndex = currImgIndexOnRight ? zIndex++ : zIndex --; // To reduce zIndex while going through left elements
      visibleItemsProps.order.push(currImgIndex); // Push the current image number in the orders array
      visibleItemsProps[currImgIndex] = { styles }; // pushing all previously created styles
      timesToIterate++;
    }
    durationRef.current = actualFirst === '' ? duration : ((duration / imgDifference.current)); // duration will be user given if he clicks next image or we divide the duration by number of images skipped
    setVisibleItemsProps(visibleItemsProps); // setting state for visible items
  }


  const changeCenter = ({event, index, large_url }) => {
    // Checking if the clicked item is immediately next/prev item.Because to induce a carousel effect we need to make the images move in sequence.
    // But that is not possible, when the user clicks out of sequence(Eg: image 4 from image 1).So here, the order breaks and we cannot 
    // apply our sequential handling logic to it. If we do the 4th image comes into view from the back but the "cycling effect"
    // of scrolling through images 2 and 3 would have been missed.
    const currFirstImgIndex = visibleItemsProps.order.indexOf(currFirstImg);
    const prevIndex = visibleItemsProps.order[currFirstImgIndex - 1];
    const nextIndex = visibleItemsProps.order[currFirstImgIndex + 1];
    if (index !== currFirstImg) {
      if (index === prevIndex || index === nextIndex) { // if immediate first/next image
        setCurrFirstImg(index);
      } else {
        const val = currFirstImgIndex - visibleItemsProps.order.indexOf(index);
        imgDifference.current = Math.abs(val);  // Gives the number of images we have to cycle through, so we can provide equal part of total duration to all images.
        setActualFirst(index);
        cycleToNextImage(index);
      }
    } else {
      window.open(large_url); // Can have a callback in props and execute it on click.
    }
  }

  // To show the subsequent image based on if the user has clicked on the right side or on the left side of the middle image
  const cycleToNextImage = (actual) => {
    if (visibleItemsProps.order.indexOf(currMiddleImgRef.current) > visibleItemsProps.order.indexOf(actual)) {  // Right side image click
      currMiddleImgRef.current = currMiddleImgRef.current - 1 > -1 ? currMiddleImgRef.current - 1 : imgList.length - 1; // Right side image click
      setCurrFirstImg(currMiddleImgRef.current);
    } else {  // Left side image click
      currMiddleImgRef.current = (currMiddleImgRef.current + 1) < imgList.length ?  (currMiddleImgRef.current + 1) : 0; // Conditions to handle cycle
      setCurrFirstImg(currMiddleImgRef.current);
    }
  }

  // Hook fires on evey change to actualFirst value. actualFirst is set when there is out of order click, so we have to handle it through timeinterval
  // so that we can allow all intermediate images to do some animation in the meantime, to avoid the cycling look jerky.
  useEffect(() => {
    clearInterval(intervalRef.current);
    if (actualFirst !== '') {
      intervalRef.current = setInterval(() => {
        if (actualFirst !== '' && actualFirst !== currMiddleImgRef.current) { // If the currentimage in middle is not actually clicked image then gotoNext image
          cycleToNextImage(actualFirst);
        } else if (actualFirst !== '' && actualFirst === currMiddleImgRef.current){
          setActualFirst('');
          imgDifference.current = 1;
          clearInterval(intervalRef.current); // If actual clicked and middle image are same we are all set to clear intervals, as they are unnecessary now
        }
      }, durationRef.current - 100);  // Introduced an advance of 100ms to begin bringing nextimage to middle before the previous one settles down else it looks jerky
    }
  }, [actualFirst]);


  useEffect(() => {
    constructVisibleItemsProps(); // This constructs all css properties to the elements in visibility
    currMiddleImgRef.current = currFirstImg;  // Need to set it here as well so while accessing inside interval it will have the latest value
  }, [currFirstImg]);

  useEffect(() => {
    if (autoNext) {
      setInterval(() => {
        const nextImg = currMiddleImgRef.current + 1 < imgList.length ?  currMiddleImgRef.current + 1 : 0;
        setCurrFirstImg(nextImg);
      }, timeForNext);
    }
  }, []);

  const loadCarousel = () => {
    return (
      
      <ul className="carouselWrapper" style={{ height: parentHeight + 'px', width:  parentWidth + 'px', padding: parentPad + 'px', perspective: '500px'}}>
      {
        imgList.map(({large_url, url, id}, index) => {
          const dn = visibleItemsProps.order.indexOf(index) === -1; // To not to show images that are out of visibility scope
          const styles = visibleItemsProps[index] ? visibleItemsProps[index].styles: {};
          return (

            <Fragment>
            <li key={id} className={'imgWrap ' + (dn ? 'dn': '')} style={{...styles, position: 'relative', transition: `fast1 ${durationRef.current}ms linear `}} onClick={(e) => { changeCenter({e, index, large_url})} }>
              <img src={Test} alt={'l1' + id } width={img_width} height={img_height}/>
            </li>
            <li key={id} className={'imgWrap ' + (dn ? 'dn': '')} style={{...styles, position:  'relative', transition: `fast1 ${durationRef.current}ms linear `}} onClick={(e) => { changeCenter({e, index, large_url})} }>
              <img src={Test1} alt={'l2' + id } width={img_width} height={img_height}/>
            </li>
            <li key={id} className={'imgWrap ' + (dn ? 'dn': '')} style={{...styles, position:  'relative', transition: `fast1 ${durationRef.current}ms linear `}} onClick={(e) => { changeCenter({e, index, large_url})} }>
              <img src={Test2} alt={'l3' + id } width={img_width} height={img_height}/>
            </li>
            <li key={id} className={'imgWrap ' + (dn ? 'dn': '')} style={{...styles, position: 'relative', transition: `fast1 ${durationRef.current}ms linear `}} onClick={(e) => { changeCenter({e, index, large_url})} }>
              <img src={Test3} alt={'l4' + id } width={img_width} height={img_height}/>
            </li>
            <li key={id} className={'imgWrap ' + (dn ? 'dn': '')} style={{...styles, position:  'relative', transition: `fast1 ${durationRef.current}ms linear `}} onClick={(e) => { changeCenter({e, index, large_url})} }>
              <img src={Test4} alt={'img_4' + id } width={img_width} height={img_height}/>
            </li>
            <li key={id} className={'imgWrap ' + (dn ? 'dn': '')} style={{...styles, position:  'relative', transition: `fast1 ${durationRef.current}ms linear `}} onClick={(e) => { changeCenter({e, index, large_url})} }>
              <img src={Test5} alt={'img_' + id } width={img_width} height={img_height}/>
            </li>
            <li key={id} className={'imgWrap ' + (dn ? 'dn': '')} style={{...styles, position:  'relative', transition: `fast1 ${durationRef.current}ms linear `}} onClick={(e) => { changeCenter({e, index, large_url})} }>
              <img src={Test6} alt={'img_' + id } width={img_width} height={img_height}/>
            </li>
            <li key={id} className={'imgWrap ' + (dn ? 'dn': '')} style={{...styles, position:  'relative', transition: `fast1 ${durationRef.current}ms linear `}} onClick={(e) => { changeCenter({e, index, large_url})} }>
              <img src={Test7} alt={'img_' + id } width={img_width} height={img_height}/>
            </li>
            <li key={id} className={'imgWrap ' + (dn ? 'dn': '')} style={{...styles, position:'relative', transition: `fast1 ${durationRef.current}ms linear `}} onClick={(e) => { changeCenter({e, index, large_url})} }>
              <img src={Test8} alt={'img_' + id } width={img_width} height={img_height}/>
            </li>
            <li key={id} className={'imgWrap ' + (dn ? 'dn': '')} style={{...styles, position:'relative', transition: `fast1 ${durationRef.current}ms linear `}} onClick={(e) => { changeCenter({e, index, large_url})} }>
              <img src={Test9} alt={'img_' + id } width={img_width} height={img_height}/>
            </li>
            <li key={id} className={'imgWrap ' + (dn ? 'dn': '')} style={{...styles, position: 'relative', transition: `fast1 ${durationRef.current}ms linear `}} onClick={(e) => { changeCenter({e, index, large_url})} }>
              <img src={Test10} alt={'img_' + id } width={img_width} height={img_height}/>
            </li>
            <li key={id} className={'imgWrap ' + (dn ? 'dn': '')} style={{...styles, position: 'relative', transition: `fast1 ${durationRef.current}ms linear `}} onClick={(e) => { changeCenter({e, index, large_url})} }>
              <img src={Test11} alt={'img_' + id } width={img_width} height={img_height}/>
            </li>
            <li key={id} className={'imgWrap ' + (dn ? 'dn': '')} style={{...styles, position: 'relative', transition: `fast1 ${durationRef.current}ms linear `}} onClick={(e) => { changeCenter({e, index, large_url})} }>
              <img src={Test12} alt={'img_' + id } width={img_width} height={img_height}/>
            </li>
            <li key={id} className={'imgWrap ' + (dn ? 'dn': '')} style={{...styles, position: 'relative', transition: `fast1 ${durationRef.current}ms linear `}} onClick={(e) => { changeCenter({e, index, large_url})} }>
              <img src={Test13} alt={'img_' + id } width={img_width} height={img_height}/>
            </li>
            <li key={id} className={'imgWrap ' + (dn ? 'dn': '')} style={{...styles, position:'relative', transition: `fast1 ${durationRef.current}ms linear `}} onClick={(e) => { changeCenter({e, index, large_url})} }>
              <img src={Test14} alt={'img_' + id } width={img_width} height={img_height}/>
            </li>
           
            </Fragment>
          )
        })
      }
      </ul>
     
    );
  };

  return (
    <React.Fragment>
      {loadCarousel()}
    </React.Fragment>
  );
}
export default Carousel;