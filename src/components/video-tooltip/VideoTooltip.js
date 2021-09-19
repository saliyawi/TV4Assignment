import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const VideoTooltip = ({ children, toolTipText = "", parentRef }) => {
  const toolTipRef = useRef(null);
  const [isVisible, setState] = useState(false);
  const [toolTipStyle, setToolTipStyle] = useState({
    left: 0,
    top: 0,
    width: 200,
  });

  useEffect(() => {
    if (parentRef?.current) {
      parentRef.current?.addEventListener("mouseover", mouseEnter);
      parentRef.current?.addEventListener("mouseout", mouseLeave);
      parentRef.current?.addEventListener("mousemove", onMouseMove);
    }

    return () => {
      if (parentRef?.current) {
        parentRef.current.removeEventListener("mouseover", mouseEnter);
        parentRef.current.removeEventListener("mouseout", mouseLeave);
        parentRef.current.addEventListener("mousemove", onMouseMove);
      }
    };
  }, []);

  const mouseLeave = (e) => {
    setState(false);
  };

  const mouseEnter = (e) => {
    setState(true);
  };

  const onMouseMove = (e) => {
    setState(true);
    setUpPositionAndWidth(e.pageY, e.pageX);
  };

  const setUpPositionAndWidth = (mouseY, mouseX) => {
    let top = mouseY;
    let left = mouseX;

    if (!toolTipRef?.current || !parentRef?.current) return;
    const parentBoundry = parentRef.current.getBoundingClientRect();

    if (mouseY + toolTipRef?.current.clientHeight > parentBoundry.bottom) {
      top = parentBoundry.bottom - toolTipRef?.current.clientHeight;
    }

    if (mouseX + toolTipRef?.current.clientWidth > parentBoundry.right) {
      left = parentBoundry.right - toolTipRef?.current.clientWidth;
    }

    setToolTipStyle({
      left: left,
      top: top,
      width: parentBoundry.width,
    });
  };

  return (
    <div className={"tool-tip-container"}>
      {children}
      {isVisible && (
        <div ref={toolTipRef} className="tooltip-content" style={toolTipStyle}>
          <span>{toolTipText}</span>
        </div>
      )}
    </div>
  );
};

export default VideoTooltip;
