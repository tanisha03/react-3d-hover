import React, { useRef, useState } from "react";

const defaultStyles = {
  transformStyle: "preserve-3d",
  display: "inline-block"
};

function Hover({
  style = {},
  children,
  easing = "cubic-bezier(.03,.98,.52,.99)",
  scale = 1,
  speed = 400,
  perspective = 1000,
  max = 10,
  onMouseEnter = () => {},
  onMouseMove = () => {},
  onMouseLeave = () => {}
}) {
  const [tiltStyles, setTiltStyles] = useState(defaultStyles);
  const element = useRef();
  const width = useRef(0);
  const height = useRef(0);
  const top = useRef(0);
  const left = useRef(0);
  const updateCall = useRef(null);
  const transitionTimeout = useRef(null);

  const handleOnMouseEnter = () => {
    updateElementPosition();
    setTransition();
    return onMouseEnter();
  };

  const handleOnMouseMove = (event) => {
    if (updateCall.current !== null && typeof window !== "undefined") {
      window.cancelAnimationFrame(updateCall.current);
    }
    updateCall.current = requestAnimationFrame(() => updateElementStyle(event));
    return onMouseMove(event);
  };

  const handleOnMouseLeave = (event) => {
    setTransition();
    handleReset();
    return onMouseLeave(event);
  };

  const updateElementStyle = (event) => {
    const values = getValues(event);

    setTiltStyles((prevStyle) => ({
      ...prevStyle,
      transform: `perspective(${perspective}px) rotateX(
        ${values.tiltY}deg) rotateY(${values.tiltX}deg) scale3d(${scale}, ${scale}, ${scale})`
    }));
  };

  const getValues = (event) => {
    let x = (event.clientX - left.current) / width.current;
    let y = (event.clientY - top.current) / height.current;

    x = Math.min(Math.max(x, 0), 1);
    y = Math.min(Math.max(y, 0), 1);

    let tiltX = -1 * (max / 2 - x * max).toFixed(2);
    let tiltY = -1 * (max / 2 - y * max).toFixed(2);

    let angle =
      Math.atan2(
        event.clientX - (left.current + width.current / 2),
        -(event.clientY - (top.current + height.current / 2))
      ) *
      (180 / Math.PI);

    let percentageX = x * 100;
    let percentageY = y * 100;

    return {
      tiltX,
      tiltY,
      angle,
      percentageX,
      percentageY
    };
  };

  const updateElementPosition = () => {
    const rect = element.current.getBoundingClientRect();
    width.current = rect.width;
    height.current = rect.height;
    top.current = rect.top;
    left.current = rect.left;
  };

  const setTransition = () => {
    clearTimeout(transitionTimeout.current);

    setTiltStyles((prevStyle) => ({
      ...prevStyle,
      transition: `${speed}ms ${easing}`
    }));

    transitionTimeout.current = setTimeout(() => {
      setTiltStyles((prevStyle) => ({
        ...prevStyle,
        transition: ""
      }));
    }, speed);
  };

  const handleReset = () => {
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(() => {
        setTiltStyles((prevStyle) => ({
          ...prevStyle,
          transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
        }));
      });
    }
  };

  return (
    <div
      className="hover-3d"
      style={{
        ...style,
        ...tiltStyles
      }}
      ref={element}
      onMouseEnter={handleOnMouseEnter}
      onMouseMove={handleOnMouseMove}
      onMouseLeave={handleOnMouseLeave}
    >
      {children}
    </div>
  );
}

export default Hover;
