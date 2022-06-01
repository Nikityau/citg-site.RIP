import React from "react";

import { IMail } from "./Mail.interface";

import mailcss from "./Mail.module.scss";

const Mail = ({ mail }: IMail) => {
  return (
    <a className={mailcss.link} href={`mailto:"${mail}"`} data-mouse-focus={true}>
      <span data-mouse-focus={true}>{mail}</span>
    </a>
  );
};

export default Mail;
