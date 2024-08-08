import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex justify-between items-center py-10 px-2 md:px-0 container mx-auto">
      <p>
        &copy; Copyright <strong>{year}</strong>. All Rights Reserved
      </p>
      <p> Designed by chalachew</p>
    </div>
  );
};

export default Footer;
