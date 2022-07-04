import React, {useContext, useEffect, useRef} from "react";

import party from "./Party.module.scss";

import {InfinityLoopDirection,} from "../../../../Animation/InfinityLoop/InfinityLoop";

import {AppContext, Browser} from "../../../App/App";

const Party = () => {
  const appContext = useContext(AppContext)

  const container = useRef<HTMLDivElement | null>(null);
  const ball1 = useRef<HTMLDivElement | null>(null);

  const InfinitLoop = (
    el: HTMLDivElement | null,
    direction: InfinityLoopDirection
  ): NodeJS.Timeout | undefined => {
    if (!el || !container.current) return;

   /* const cx = container.current?.offsetLeft + container.current?.clientWidth / 2;
    const cy = container.current?.offsetTop + container.current?.clientHeight / 2;

    const loop = new InfinityLoop(el, cx, cy, direction);
    return loop.Start();*/
  };

  useEffect(() => {
    /*const timeout = InfinitLoop(ball1.current, InfinityLoopDirection.RIGHT);

    return () => {
      if(timeout)
        clearTimeout(timeout)
    };*/
  }, []);

  const getBallStyle = () => {
    if(appContext.browser === Browser.SAFARI)
      return party.ball_Safari

    return party.ball_Default
  }

  return (
    <div className={party.container} ref={container}>
      <div className={[party.ball_1, getBallStyle()].join(' ')} ref={ball1} />
      <div className={[party.ball_2, getBallStyle()].join(' ')} />
      <div className={[party.ball_3, getBallStyle()].join(' ')} />
    </div>
  );
};

export default Party;
