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
        <Range value={device.state.temp} />
      </div>
      <div className={css.footer}>
        <span></span>
        <span>Bedroom</span>
      </div>
    </Card>
  );
};

DeviceCard.prototype = {
  width: PropTypes.number,
};
DeviceCard.defaultProps = {
  width: 330,
};

export default DeviceCard;
