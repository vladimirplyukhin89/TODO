import React from "react";
import {
  animated,
  config,
  useChain,
  useSpring,
  useSpringRef,
} from "react-spring";

import s from "../../styles/modules/checkboxAnimation.module.scss";

const CheckboxAnimation = ({ completed }) => {
  const [checkLength, setCheckLength] = React.useState(null);
  const checkboxAnimationRef = useSpringRef();

  const checkboxAnimation = useSpring({
    backgroundColor: completed ? "rgb(100, 255, 218)" : "#fff",
    borderColor: completed ? "rgb(100, 255, 218)" : "#fff",
    config: config.gentle,
    ref: checkboxAnimationRef,
  });

  const checkAnimationRef = useSpringRef();
  const checkAnimationStyle = useSpring({
    x: completed ? 0 : checkLength,
    config: config.gentle,
    ref: checkAnimationRef,
  });

  useChain(
    completed
      ? [checkboxAnimationRef, checkAnimationRef]
      : [checkAnimationRef, checkboxAnimationRef],
    [0, 0.1]
  );

  return (
    <animated.svg
      style={checkboxAnimation}
      className={s.checkbox}
      aria-hidden="true"
      viewBox="0 0 15 11"
      fill="none"
    >
      <animated.path
        d="M1 4.5L5 9L14 1"
        strokeWidth="2"
        stroke="#fff"
        strokeDasharray={checkLength}
        strokeDashoffset={checkAnimationStyle.x}
        ref={(ref) => {
          if (ref) {
            setCheckLength(ref.getTotalLength());
          }
        }}
      />
    </animated.svg>
  );
};

export default CheckboxAnimation;
