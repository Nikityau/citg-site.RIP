import React, { useEffect, useRef } from "react";

import { AnimationLevitation } from "../../../Animation/AnimationLevitation/AnimationLevitation";
import { AnimationCircle } from "../../../Animation/AnimationCircle/AnimationCircle";

import biglogo from "./BigLogo.module.scss";
import biglogo_img from "../../../assets/icons/BigLogo/big_logo.png";

const BigLogo = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const bigCircle = useRef<HTMLDivElement | null>(null);
  const mediumCircle = useRef<HTMLDivElement | null>(null);
  const smallCircle = useRef<HTMLDivElement | null>(null);
  const rotatingCircle = useRef<HTMLDivElement | null>(null);
  const rotatingTrail = useRef<HTMLDivElement | null>(null);

  const init = () => {
    if (!mediumCircle.current || !smallCircle.current || !rotatingCircle.current) return;

    const bc = {
      width: bigCircle.current?.clientWidth || 0,
      height: bigCircle.current?.clientHeight || 0,
      offsetLeft: bigCircle.current?.offsetLeft || 0,
      offsetTop: bigCircle.current?.offsetTop || 0,
    };

    mediumCircle.current.style.top = bc.offsetTop + bc.height + bc.height / 10 + "px";
    mediumCircle.current.style.left = bc.offsetLeft - bc.width / 6 + "px";

    smallCircle.current.style.top = bc.offsetTop + bc.height / 3.5 + "px";
    smallCircle.current.style.left = bc.offsetLeft - bc.width / 3 + "px";

    rotatingCircle.current.style.top = bc.offsetTop + "px";
    rotatingCircle.current.style.left = bc.offsetLeft + bc.width + bc.width / 4 + "px";
  };
  const rotateCircle = (): () => void | undefined => {
    if (!rotatingCircle.current || !bigCircle.current || !container.current) return;

    const r = bigCircle.current.clientWidth / 2;
    const cx = bigCircle.current.offsetLeft + r;
    const cy = bigCircle.current.offsetTop + r;

    if (!rotatingTrail.current) return;

    rotatingTrail.current.style.top = cy * 0.35 + "px";
    rotatingTrail.current.style.left = cx + "px";
    rotatingTrail.current.style.width = r * 2.4 + "px";
    rotatingTrail.current.style.height = r * 2.4 + "px";

    let animation = null;

    if (window.screen.width <= 500) {
      animation = new AnimationCircle(
        rotatingCircle.current,
        rotatingTrail.current,
        cx * 1.2,
        cy * 0.9,
        r * 1.2,
        {
          x: container.current?.clientWidth,
          y: 0,
        },
        35,
        true
      );
    } else {
      animation = new AnimationCircle(
        rotatingCircle.current,
        rotatingTrail.current,
        cx * 1.2,
        cy * 0.9,
        r * 1.2,
        {
          x: container.current?.clientWidth,
          y: 0,
        },
        35
      );
    }

    animation.Start()

    return animation.Stop;
  };
  const mediumCircleAnimation = (): () => void | undefined => {
   /* if (window.screen.width <= 500) return;
    if (!mediumCircle.current) return;

    const animation = new AnimationLevitation(mediumCircle.current, 20, 80);
    animation.Start()

    return animation.Stop;*/

    return;
  };
  const smallCircleAnimation = (): () => void | undefined => {
    /*if (window.screen.width <= 500) return;
    if (!smallCircle.current) return;

    const animation = new AnimationLevitation(smallCircle.current, 8, 100, 0.8);
    animation.Start()

    return animation.Stop;*/

    return
  };

  useEffect(() => {
    init();
    const _medium = mediumCircleAnimation();
    const _small = smallCircleAnimation();
    const _rotate = rotateCircle();

    return () => {
      if (_medium) _medium();

      if (_small) _small();

      if (_rotate) _rotate();
    };
  }, []);

  return (
    <div className={biglogo.container} ref={container} data-testid={"big-logo"}>
      <div className={biglogo.innerContainer} data-testid={"big-logo-main"}>
        <div className={biglogo.mainCircle} ref={bigCircle}>
          <img src={biglogo_img} onDragStart={(e) => e.preventDefault()} />
        </div>
        <div
          className={biglogo.mediumCircle}
          ref={mediumCircle}
          data-testid={"big-logo-medium-circle"}
        />
        <div
          className={biglogo.smallCircle}
          ref={smallCircle}
          data-testid={"big-logo-small-circle"}
        />
        <div
          className={biglogo.rotatingCircle}
          ref={rotatingCircle}
          data-testid={"big-logo-rotating-circle"}
        />
        <div className={biglogo.circleTrail} ref={rotatingTrail} />
      </div>
    </div>
  );
};

export default BigLogo;
