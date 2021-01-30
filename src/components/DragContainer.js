import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./DragContainer.module.css";
import Draggable from "react-draggable";

function DragContainer({ children }) {
  const [drag, setDrag] = useState({
    diffX: 0,
    diffY: 0,
    dragging: false,
    styles: {},
    boundary: { left: 0, right: 0 },
  });

  const dragStart = (e) => {
    console.log(e);
    setDrag({
      ...drag,
      diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
      diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
      dragging: true,
    });
  };

  console.log(drag.styles);
  const dragEnd = () => {
    setDrag({ ...drag, dragging: false });
  };

  const dragging = (e) => {
    if (drag.dragging) {
      let left = e.screenX - drag.diffX;
      left = left < drag.boundary.left ? drag.boundary.left : left;
      const top = e.screenY - drag.diffY;

      setDrag({ ...drag, styles: { ...drag.styles, left, top } });
    }
  };
  return (
    <div className={classes.parent}>
      {/* <div
        style={drag.styles}
        className={classes.DragContainer}
        onMouseDown={dragStart}
        onMouseMove={dragging}
        onMouseUp={dragEnd}
      >
        {children}
      </div> */}

      <Draggable bounds="parent">
        <div className={classes.box}>{children}</div>
      </Draggable>
    </div>
  );
}

DragContainer.propTypes = {
  children: PropTypes.any.isRequired,
};

export default DragContainer;
