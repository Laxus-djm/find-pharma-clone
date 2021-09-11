import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";
import { useState } from "react";

export function RenderCounter({ endTime }) {
  const [dur, setDur] = useState(2.75);
  return (
    <CountUp start={0} end={endTime} duration={dur} onEnd={() => setDur(0)}>
      {({ countUpRef, start }) => (
        <Waypoint onEnter={start}>
          <div style={{ margin: "15px 0" }}>
            <span ref={countUpRef} />
          </div>
        </Waypoint>
      )}
    </CountUp>
  );
}
