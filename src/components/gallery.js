import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import hola from '../assets/img/carrousel/l1.jpg'

const GalleryPhotos = () => {

  const photos = [
    {
      src: require('../assets/img/carrousel/l1.jpg'),
      width: 5,
      height: 3
    },
    {
      src: require('../assets/img/carrousel/l3.jpg'),
      width: 3,
      height: 4
    },
 
    {
      src: require('../assets/img/carrousel/l5.jpg'),
      width: 3,
      height: 5
    },
  
    {
      src: require('../assets/img/carrousel/l7.jpg'),
      width: 2,
      height: 3
    },
 
    {
      src: require('../assets/img/carrousel/l9.jpg'),
      width: 3,
      height: 3
    },
  
    {
      src: require('../assets/img/carrousel/l16.jpg'),
      width: 5,
      height: 3
    },
    {
      src: require('../assets/img/carrousel/l17.jpg'),
      width: 4,
      height: 3
    },
    {
      src: require('../assets/img/carrousel/l18.jpg'),
      width: 2,
      height: 3
    },
    {
      src: require('../assets/img/carrousel/l19.jpg'),
      width: 5,
      height: 3
    },
  
    {
      src: require('../assets/img/carrousel/l20.jpg'),
      width: 4,
      height: 7
    },
    {
      src: require('../assets/img/carrousel/l21.jpg'),
      width: 4,
      height: 3
    },
    {
      src: require('../assets/img/carrousel/l22.jpg'),
      width: 2,
      height: 3
    },
    {
      src: require('../assets/img/carrousel/l23.jpg'),
      width: 4,
      height: 3
    },
    {
      src: require('../assets/img/carrousel/l24.jpg'),
      width: 4,
      height: 3
    },
  
  
   
  ];
  
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
 export default GalleryPhotos;
