import React from "react";

const Image = ({ src, width, height, alt, className, id }) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/${src}`}
      width={width}
      height={height}
      alt={alt}
      className={className}
      id={id}
    />
  );
};

export default Image;
