import React from 'react';

const Image = ({
  imageUrl,
  size,
  ...props
}) => (
  <img src={`${imageUrl}?odnWidth=${size[0]}`} {...props} />
);

export default Image;
