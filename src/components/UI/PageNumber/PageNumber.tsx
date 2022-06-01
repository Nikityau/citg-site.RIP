import React from "react";

import { IPageNumber } from "./PageNumber.interface";

import pageunumber from "./PageNumber.module.scss";

const PageNumber = ({ number }: IPageNumber) => {
  return (
    <div className={pageunumber.container} data-mouse-focus={true} data-testid={"page-number"}>
      <div className={pageunumber.line} data-mouse-focus={true} />
      <div className={pageunumber.number} data-mouse-focus={true}>
        <span data-mouse-focus={true}>{number}</span>
      </div>
    </div>
  );
};

export default PageNumber;
