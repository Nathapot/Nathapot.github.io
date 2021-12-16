import React from "react";
import SkeletonElement from "./skeletonElement";

const SkeletonProject = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-project">
        <div>
          <SkeletonElement type="thumbnail" />
        </div>
        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonProject;
