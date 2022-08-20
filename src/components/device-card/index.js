import React from "react";
import * as css from "./css.module.scss";
import PropTypes from "prop-types";
import Card from "components/card";
import Switch from "components/switch";
import Range from "components/range";
import Icons from "images/icons.svg";
const DeviceCard = (props) => {
  const { device, width } = props;

  return (
    <Card width={width}>
      <div className={css.header}>
        <svg>
          <use href={`${Icons}#icon-${device.type}`} />
        </svg>
        {device.name}
        <Switch checked={device.state.on} />
      </div>
      <div className={css.content}>
        <Range />
      </div>
      <div className={css.footer}></div>
    </Card>
  );
};

DeviceCard.prototype = {
  width: PropTypes.number,
};
DeviceCard.defaultProps = {
  width: 600,
};

export default DeviceCard;
{
  /* <Card width={320} key={device.id}>
  <svg width={32} fill="#a1d5b1">
    <use href={`${Icons}#icon-airconditioner`} />
  </svg>
  {device.name}
  <Switch checked={device.state.on} />
  <div>
    <input type="range" min="18" max="32" value={device.state.temp} />
  </div>
  <ul>
    <li>AC: {device.state.on ? "ON" : "OFF"}</li>
    <li>Tempreture: {device.state.temp}</li>
    <li>Fan: {device.state.fan}</li>
    <li>Location: {device.location}</li>
  </ul>
</Card>; */
}
