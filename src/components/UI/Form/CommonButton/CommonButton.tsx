import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import { TypeButton } from "./TypeButton.enum";

import { ICommonButton } from "./CommonButton.interface";

import { GoUp } from "../../../../Utils/GoUp";

import commonbutton from "./CommonButton.module.scss";

const CommonButton = ({ type, data, text }: ICommonButton) => {
  const getClassByType = (type: TypeButton): string => {
    switch (type) {
      case TypeButton.Link:
        return commonbutton.Link;
      case TypeButton.Load:
        return commonbutton.Load;
      default:
        return "";
    }
  };

  const getTextByType = (type: TypeButton): string => {
    switch (type) {
      case TypeButton.Link:
        return "связаться с нами";
      case TypeButton.Load:
        return "load more";
      default:
        return "";
    }
  };

  const getInnerHtmlByType = (type: TypeButton): ReactElement => {
    if (type == TypeButton.Link) {
      return (
        <a href={`mailto:${data}`} data-mouse-focus={true}>
          <span data-mouse-focus={true}>{getTextByType(type)}</span>
        </a>
      );
    }

    return (
      <Link to={data} data-mouse-focus={true}>
        <span data-mouse-focus={true}>{text}</span>
      </Link>
    );
  };

  return (
    <button
      data-mouse-focus={true}
      onClick={GoUp}
      className={[commonbutton.container, getClassByType(type)].join(" ")}
      data-testid={"common-button"}
    >
      {getInnerHtmlByType(TypeButton.Load)}
    </button>
  );
};

export default CommonButton;
