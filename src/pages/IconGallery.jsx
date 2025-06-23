import React from "react";
import  iconList  from "../icon.js";

const IconGallery = () => {
  return (
    <div className="row p-5">
      {iconList.map((item, index) => {
        const IconTag = item.icon;
        return (
          <div className="col-3 text-center p-3 " key={index}>
            <IconTag size={30} />
            <p style={{ fontSize: "12px" }}>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default IconGallery;
