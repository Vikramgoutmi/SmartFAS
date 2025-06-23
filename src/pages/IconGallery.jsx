import React from "react";
import  iconList  from "../icon.js";

const IconGallery = () => {
  return (
    <div className="m-5">
       <h5>Feather Icons</h5>
      <p className="text-muted">
        Feather is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency, and flexibility.
      </p>
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
    </div>
  );
};

export default IconGallery;
