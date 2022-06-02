import React from "react";

import circle from "./Circle.module.scss";

const Circle = React.forwardRef(({}, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={circle.circle} id={"navigation-circle"} ref={ref} data-mouse-focus={true} />
  );
});

Circle.displayName = "Circle";

export default Circle;
