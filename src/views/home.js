import React, { useEffect } from "react";
import Icons from "images/icons.svg";
const Home = (props) => {
  useEffect(() => {
    const dailer = document.querySelector(".dailer");
    let isDragging = false;
    let isRewinding = false;
    let dailerAngle = 0;
    let dailerCenter = null;
    let dragStartAngle = null;

    function getCenterPoint(rect) {
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    }
    function getAngle(p1, p2) {
      const deltaX = p2.x - p1.x;
      const deltaY = p2.y - p1.y;
      return (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
    }
    function setDailerRotation(angle) {
      if (angle > 295) {
        angle = angle < 315 ? 295 : 0;
      }

      dailerAngle = angle;
      dailer.style.transform = `rotate(${angle}deg)`;
    }
    function startRewind() {
      if (dailerAngle <= 0) {
        return;
      }

      isRewinding = true;

      const rewindTime = (dailerAngle * 4.5) << 0;
      dailer.style.transition = `transform ${rewindTime}ms linear`;
      setDailerRotation(0);

      setTimeout(() => endRewind(), rewindTime);
    }
    function endRewind() {
      dailer.style.transition = "none";
      isRewinding = false;
    }
    function drag(e) {
      const angle = getAngle({ x: e.clientX, y: e.clientY }, dailerCenter);
      let angleDiff = angle - dragStartAngle;

      // Convert the angle range from (-180 to 180) to (0 to 360).
      angleDiff = angleDiff < 0 ? 360 - -angleDiff : angleDiff;
      setDailerRotation(angleDiff);
    }
    function endDrag(e) {
      document.removeEventListener("mouseup", endDrag);
      document.removeEventListener("mousemove", drag);
      isDragging = false;
      startRewind();
    }
    function startDrag(e) {
      e.preventDefault();
      if (isRewinding) return;

      isDragging = true;
      dailerCenter = getCenterPoint(dailer.getBoundingClientRect());
      dragStartAngle = getAngle({ x: e.clientX, y: e.clientY }, dailerCenter);
      document.addEventListener("mouseup", endDrag);
      document.addEventListener("mousemove", drag);
    }

    dailer.addEventListener("mousedown", startDrag);
  });
  return (
    <>
      <h1>Home Page</h1>
      <div className="dailer-container">
        <div className="dailer">
          <svg>
            <use href={`${Icons}#icon-aircondition`} />
          </svg>
          <svg>
            <use href={`${Icons}#icon-audio-speaker`} />
          </svg>
          <svg>
            <use href={`${Icons}#icon-water-drop`} />
          </svg>
          <svg>
            <use href={`${Icons}#icon-blind`} />
          </svg>
          <svg>
            <use href={`${Icons}#icon-plug`} />
          </svg>
          <svg>
            <use href={`${Icons}#icon-door-open`} />
          </svg>
          <svg>
            <use href={`${Icons}#icon-light-bulb`} />
          </svg>
          <svg>
            <use href={`${Icons}#icon-home-security`} />
          </svg>
        </div>
        <div className="dailer-btn"></div>
        {/* <div className="dailer-icon-guide"></div> */}
      </div>
    </>
  );
};
export default Home;
