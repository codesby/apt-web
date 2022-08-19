import React from "react";
import * as css from "./device.module.scss";

const Device = ({ deviceName }) => {
  const openSettings = () => {
    console.log("opened settings");
  };
  return (
    <div className={css.main}>
      <p className={css.deviceName}>{deviceName}</p>
      <div className={css.options}>
        <label for="on_off">
          <svg
            width="38"
            height="41"
            viewBox="0 0 38 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.2949 6.63712C25.6709 5.71955 26.7248 5.27283 27.6014 5.73641C30.8093 7.43294 33.4568 10.048 35.1924 13.2654C37.2132 17.0116 37.8726 21.3426 37.0581 25.5204C36.2436 29.6982 34.0058 33.4644 30.7258 36.1773C27.4458 38.8901 23.3267 40.3817 19.0702 40.398C14.8138 40.4142 10.6834 38.9541 7.38279 36.2664C4.0822 33.5787 1.81564 29.8297 0.969307 25.6582C0.122974 21.4867 0.749232 17.1508 2.74138 13.3893C4.4523 10.1588 7.07979 7.52355 10.2747 5.80257C11.1477 5.33231 12.205 5.77097 12.5879 6.68564C12.9709 7.60031 12.5328 8.64303 11.6712 9.13383C9.23829 10.5196 7.23662 12.574 5.91474 15.0699C4.31142 18.0973 3.8074 21.5869 4.48854 24.9442C5.16969 28.3015 6.99386 31.3188 9.65024 33.4819C12.3066 35.645 15.6309 36.8201 19.0565 36.807C22.4822 36.794 25.7974 35.5935 28.4372 33.4101C31.077 31.2268 32.878 28.1957 33.5335 24.8333C34.189 21.4709 33.6583 17.9852 32.032 14.9702C30.6911 12.4844 28.6737 10.4454 26.2304 9.07824C25.365 8.59404 24.9189 7.55469 25.2949 6.63712Z"
              fill="white"
            />
            <path
              d="M19 0.290344C20.0161 0.290344 20.8398 1.11405 20.8398 2.13015L20.8398 23.8398C20.8398 24.8559 20.0161 25.6796 19 25.6796C17.9839 25.6796 17.1602 24.8559 17.1602 23.8398L17.1602 2.13015C17.1602 1.11405 17.9839 0.290344 19 0.290344Z"
              fill="white"
            />
          </svg>
          <input type="checkbox" id="on_off" /> On
        </label>
      </div>
      <div className={css.options}>
        <label for="fan">
          <input type="checkbox" id="on_off" /> Fan
        </label>
      </div>
      <div className={css.options}>
        <label for="routine">
          <input type="checkbox" id="on_off" /> Routine
        </label>
      </div>
      <button className={css.settingsButton} onClick={openSettings}>
        Device Settings
      </button>
    </div>
  );
};

export default Device;
