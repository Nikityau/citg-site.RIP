import React from "react";

import Mail from "../Mail/Mail";

import { IContact } from "./Contacts.interface";

import contact from "./Contacts.module.scss";

const Contacts = ({ mobileNumber, homeNumber, socs, email }: IContact) => {
  const getUnionSocs = (socs: string[]): string => {
    return socs.join(" & ");
  };

  return (
    <div className={contact.container}>
      <div className={contact.title}>
        <h5 data-mouse-focus={true}>Контакты</h5>
      </div>
      <div className={contact.homeNumber}>
        <span data-mouse-focus={true}> {homeNumber} </span>
      </div>
      <div className={contact.linksTo}>
        <span data-mouse-focus={true}>{getUnionSocs(socs)}</span>
        <span data-mouse-focus={true}>{mobileNumber}</span>
      </div>
      <div className={contact.email}>
        <Mail mail={email} />
      </div>
    </div>
  );
};

export default Contacts;
