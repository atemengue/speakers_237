/** @format */

import React, { useRef } from 'react';

export default function ImageSpeaker({ primaryImage, secondaryImage }) {
  const imageRef = useRef(null);
  return (
    <img
      ref={imageRef}
      alt=''
      onMouseOver={() => {
        imageRef.current.src = secondaryImage;
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImage;
      }}
      src={primaryImage}
    />
  );
}
