import React, { useContext } from 'react';
import DeviceContext from '../contexts/DeviceContext';
// [mobile, tablet, desktop]
export const getSize = ({
  sizes,
  isMobile,
  isTablet,
}) => {
  let index = 0;
  let value = 0;

  if (isMobile && !isTablet) {
    index = 0;
  } else if (isTablet) {
    index = 1;
  } else {
    index = 2;
  }

  for (let i = index; i >= 0; i -= 1) {
    const val = sizes[i];
    if (sizes[i]) {
      value = val;
      break;
    }
  }

  return value;
};

const Image = ({
  imageUrl,
  sizes,
  alt,
  ...props
}) => {
  const {
    isMobile,
    isTablet,
  } = useContext(DeviceContext);

  const size = getSize({
    sizes,
    isMobile,
    isTablet,
  });


  return (
    <img alt={alt} src={`${imageUrl}?odnWidth=${size}`} {...props} />
  );
};

export default Image;
