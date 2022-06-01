import React, { useEffect, useRef } from "react";

import party from "./Party.module.scss";

import {
  InfinityLoop,
  InfinityLoopDirection,
} from "../../../../Animation/InfinityLoop/InfinityLoop";

const Party = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const ball1 = useRef<HTMLDivElement | null>(null);

  const InfinitLoop = (
    el: HTMLDivElement | null,
    direction: InfinityLoopDirection
  ): NodeJS.Timeout | undefined => {
    if (!el || !container.current) return;

    const cx = container.current?.offsetLeft + container.current?.clientWidth / 2;
    const cy = container.current?.offsetTop + container.current?.clientHeight / 2;

    const loop = new InfinityLoop(el, cx, cy, direction);
    return loop.Start();
  };

  useEffect(() => {
    const timeout = InfinitLoop(ball1.current, InfinityLoopDirection.RIGHT);

    return () => {
      if(timeout)
        clearTimeout(timeout)
    };
  }, []);

  return (
    <div className={party.container} ref={container}>
      <div className={party.ball_1} ref={ball1} />
      <div className={party.ball_2} />
      <div className={party.ball_3} />
    </div>
  );
};

export default Party;
