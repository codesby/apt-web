import React, { useState } from "react";
import * as css from "./device.module.scss";

const Device = ({ deviceName }) => {
  const openSettings = () => {
    console.log("opened settings");
  };

  const [turnedOn, setTurnedOn] = useState(false);
  const [fanOn, setFanOn] = useState(false);
  const [routine, setRoutine] = useState(false);
  const handleChange = (e) => {
    if (e.target.name == "on_off") {
      setTurnedOn(!turnedOn);
      console.log(turnedOn);
    } else if (e.target.name == "fan") {
      setFanOn(!fanOn);
      console.log(fanOn);
    } else if (e.target.name == "routine") {
      setRoutine(!routine);
      console.log(routine);
    }
  };
  return (
    <div className={css.main}>
      <p className={css.deviceName}>{deviceName}</p>
      <div className={css.slantDiv}>
        <div style={{ verticalAlign: "center" }}>
          <span>
            <svg
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.08998 12.28H6.17998V19.48C6.17998 21.16 7.08998 21.5 8.19998 20.24L15.77 11.64C16.7 10.59 16.31 9.72 14.9 9.72H11.81V2.52C11.81 0.840004 10.9 0.500004 9.78998 1.76L2.21998 10.36C1.29998 11.42 1.68998 12.28 3.08998 12.28Z"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>{" "}
          <span style={{ color: "white" }}>Energy Usage</span>
          <div className={css.divider}></div>
        </div>
        {/*end energy usage title div */}
        <div className={css.energyUsage}>
          <p className={css.usageTitle}>Today</p>
          <p className={css.usageTitle}>This Month</p>
          <p className={css.usageCount}>
            <svg
              width="12"
              height="18"
              viewBox="0 0 12 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.589897 8.85853C0.716135 9.09252 0.956179 9.2384 1.21726 9.2384H5.28271V17.2657C5.28271 17.671 5.60404 18 5.99997 18C6.3959 18 6.71724 17.671 6.71724 17.2657V9.2384H10.7827C11.0447 9.2384 11.2848 9.09252 11.4101 8.85853C11.5372 8.62453 11.5286 8.33865 11.39 8.11248L6.60726 0.342671C6.47528 0.129236 6.24671 0 5.99997 0C5.75324 0 5.52467 0.129236 5.39269 0.342671L0.60998 8.11248C0.537298 8.23193 0.5 8.36802 0.5 8.50411C0.5 8.62551 0.530603 8.74789 0.589897 8.85853Z"
                fill="#F7F7F9"
              />
            </svg>
            {"  "}
            {30.7} kwH
          </p>
          <p className={css.usageCount}>
            <svg
              width="12"
              height="18"
              viewBox="0 0 12 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.589897 8.85853C0.716135 9.09252 0.956179 9.2384 1.21726 9.2384H5.28271V17.2657C5.28271 17.671 5.60404 18 5.99997 18C6.3959 18 6.71724 17.671 6.71724 17.2657V9.2384H10.7827C11.0447 9.2384 11.2848 9.09252 11.4101 8.85853C11.5372 8.62453 11.5286 8.33865 11.39 8.11248L6.60726 0.342671C6.47528 0.129236 6.24671 0 5.99997 0C5.75324 0 5.52467 0.129236 5.39269 0.342671L0.60998 8.11248C0.537298 8.23193 0.5 8.36802 0.5 8.50411C0.5 8.62551 0.530603 8.74789 0.589897 8.85853Z"
                fill="#F7F7F9"
              />
            </svg>
            {"  "}
            {235.37} kwH
          </p>
        </div>
        <div className={css.optionsDiv}>
          <div className={css.options}>
            <label for="on_off">
              <div className={css.icons}>
                <svg
                  width="38"
                  height="41"
                  viewBox="0 0 38 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.2949 6.63712C25.6709 5.71955 26.7248 5.27283 27.6014 5.73641C30.8093 7.43294 33.4568 10.048 35.1924 13.2654C37.2132 17.0116 37.8726 21.3426 37.0581 25.5204C36.2436 29.6982 34.0058 33.4644 30.7258 36.1773C27.4458 38.8901 23.3267 40.3817 19.0702 40.398C14.8138 40.4142 10.6834 38.9541 7.38279 36.2664C4.0822 33.5787 1.81564 29.8297 0.969307 25.6582C0.122974 21.4867 0.749232 17.1508 2.74138 13.3893C4.4523 10.1588 7.07979 7.52355 10.2747 5.80257C11.1477 5.33231 12.205 5.77097 12.5879 6.68564C12.9709 7.60031 12.5328 8.64303 11.6712 9.13383C9.23829 10.5196 7.23662 12.574 5.91474 15.0699C4.31142 18.0973 3.8074 21.5869 4.48854 24.9442C5.16969 28.3015 6.99386 31.3188 9.65024 33.4819C12.3066 35.645 15.6309 36.8201 19.0565 36.807C22.4822 36.794 25.7974 35.5935 28.4372 33.4101C31.077 31.2268 32.878 28.1957 33.5335 24.8333C34.189 21.4709 33.6583 17.9852 32.032 14.9702C30.6911 12.4844 28.6737 10.4454 26.2304 9.07824C25.365 8.59404 24.9189 7.55469 25.2949 6.63712Z"
                    fill={turnedOn ? "white" : "#BF9381"}
                  />
                  <path
                    d="M19 0.290344C20.0161 0.290344 20.8398 1.11405 20.8398 2.13015L20.8398 23.8398C20.8398 24.8559 20.0161 25.6796 19 25.6796C17.9839 25.6796 17.1602 24.8559 17.1602 23.8398L17.1602 2.13015C17.1602 1.11405 17.9839 0.290344 19 0.290344Z"
                    fill={turnedOn ? "white" : "#BF9381"}
                  />
                </svg>
              </div>
              {/*End Icons Div 1*/}
              <input
                type="checkbox"
                id="on_off"
                name="on_off"
                onChange={(e) => handleChange(e)}
                value={turnedOn}
              />
              <p>{turnedOn ? "ON" : "OFF"}</p>
            </label>
          </div>
          {/*End Options Div 1*/}
          <div className={css.options}>
            <label for="fan">
              <div className={css.icons}>
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.5333 23.3212C32.7394 21.7515 30.7212 21.5273 29.1515 21.0788C28.0303 21.0788 27.3576 20.8545 26.4606 20.406C30.7212 19.5091 34.0848 17.2667 35.6545 13.903C36.4448 12.3308 36.8376 10.5889 36.7985 8.82965C36.7594 7.07044 36.2896 5.34764 35.4303 3.81211C34.7954 2.74235 33.9153 1.83881 32.8627 1.17601C31.81 0.513207 30.6148 0.110122 29.3757 -1.04755e-05C27.1333 -0.224253 24.6666 0.672717 23.3212 2.46666C22.0605 4.00088 21.2804 5.87297 21.0788 7.84847L20.406 10.5394C19.5091 6.27878 17.2666 2.91514 13.903 1.34544C12.3308 0.55514 10.5888 0.162337 8.82964 0.20143C7.07043 0.240524 5.34763 0.710322 3.8121 1.56969C2.74233 2.20456 1.8388 3.08462 1.176 4.1373C0.513193 5.18999 0.110107 6.38515 -2.46409e-05 7.62423C-0.0977756 8.75666 0.0748835 9.89611 0.503733 10.9487C0.932583 12.0014 1.60536 12.9371 2.46664 13.6788C4.26058 15.2485 6.05452 15.4727 7.84846 15.697L10.5394 16.5939C6.27876 17.4909 2.91513 19.7333 1.34543 23.097C0.555126 24.6691 0.162323 26.4111 0.201416 28.1703C0.24051 29.9295 0.710308 31.6523 1.56967 33.1879C2.26654 34.3499 3.25239 35.3118 4.43128 35.9799C5.61017 36.6479 6.94193 36.9993 8.29694 37C10.5394 37 12.3333 36.103 13.6788 34.5333C15.2485 32.7394 15.4727 30.7212 15.9212 29.1515C15.9212 28.0303 16.1454 27.3576 16.5939 26.4606C17.4909 30.7212 19.7333 34.0848 23.0969 35.6545C24.5359 36.4746 26.1511 36.9361 27.806 37C29.6 37 31.3939 36.3273 33.1879 35.4303C34.2576 34.7954 35.1612 33.9154 35.824 32.8627C36.4868 31.81 36.8898 30.6148 37 29.3757C37.2242 27.1333 36.3272 24.8909 34.5333 23.3212ZM18.3879 22.6485C17.7627 22.7948 17.1125 22.7979 16.486 22.6577C15.8594 22.5174 15.2727 22.2373 14.7696 21.8384C14.2665 21.4395 13.8601 20.932 13.5807 20.3539C13.3014 19.7758 13.1562 19.142 13.1562 18.5C13.1562 17.8579 13.3014 17.2242 13.5807 16.6461C13.8601 16.068 14.2665 15.5605 14.7696 15.1616C15.2727 14.7627 15.8594 14.4826 16.486 14.3423C17.1125 14.202 17.7627 14.2052 18.3879 14.3515C19.3237 14.5706 20.1581 15.0996 20.7553 15.8528C21.3525 16.6059 21.6775 17.5388 21.6775 18.5C21.6775 19.4612 21.3525 20.3941 20.7553 21.1472C20.1581 21.9004 19.3237 22.4294 18.3879 22.6485ZM24.4424 8.29696C24.6666 6.9515 24.8909 5.83029 25.7879 4.70908C26.1929 4.2234 26.7124 3.84613 27.2996 3.61126C27.8868 3.37638 28.5232 3.29128 29.1515 3.36363C30.4969 3.58787 31.8424 4.2606 32.5151 5.38181C33.1193 6.43342 33.4557 7.6174 33.4948 8.82958C33.5339 10.0418 33.2745 11.245 32.7394 12.3333C31.6182 14.8 29.1515 16.3697 25.7879 17.0424C25.4477 15.2769 24.4947 13.6885 23.0969 12.5576C23.9939 10.9879 24.2182 9.64241 24.4424 8.29696ZM4.70907 11.2121C4.22339 10.807 3.84612 10.2875 3.61124 9.70033C3.37637 9.11314 3.29127 8.47674 3.36361 7.84847C3.58785 6.50302 4.26058 5.15757 5.38179 4.48484C6.4334 3.88067 7.61739 3.54423 8.82956 3.50513C10.0417 3.46603 11.2449 3.72546 12.3333 4.2606C14.8 5.38181 16.3697 7.84847 17.0424 10.9879C15.2445 11.3861 13.6514 12.4216 12.5576 13.903C10.9879 13.0061 9.6424 12.7818 8.29694 12.5576C6.95149 12.3333 5.83028 12.1091 4.70907 11.2121ZM12.5576 28.703C12.3333 30.0485 12.1091 31.1697 11.2121 32.2909C10.807 32.7766 10.2875 33.1538 9.70032 33.3887C9.11313 33.6236 8.47673 33.7087 7.84846 33.6364C7.17153 33.5768 6.517 33.3641 5.9343 33.0145C5.35159 32.6649 4.85596 32.1874 4.48482 31.6182C3.88066 30.5666 3.54422 29.3826 3.50512 28.1704C3.46601 26.9582 3.72545 25.755 4.26058 24.6667C5.38179 22.2 7.84846 20.6303 10.9879 19.9576C11.3861 21.7555 12.4216 23.3486 13.903 24.4424C13.006 26.0121 12.7818 27.3576 12.5576 28.703ZM33.6363 29.1515C33.5768 29.8284 33.3641 30.483 33.0145 31.0657C32.6649 31.6484 32.1874 32.144 31.6182 32.5151C30.5665 33.1193 29.3826 33.4557 28.1704 33.4948C26.9582 33.5339 25.755 33.2745 24.6666 32.7394C22.2 31.6182 20.6303 29.1515 19.9576 26.0121C21.7555 25.6139 23.3486 24.5784 24.4424 23.097C26.0121 23.9939 27.3576 24.2182 28.703 24.4424C30.0485 24.6667 31.1697 24.8909 32.2909 25.7879C32.7766 26.1929 33.1538 26.7125 33.3887 27.2996C33.6236 27.8868 33.7087 28.5232 33.6363 29.1515Z"
                    fill={fanOn ? "white" : "#BF9381"}
                  />
                </svg>
              </div>
              {/*End Icons Div 2*/}

              <input
                type="checkbox"
                id="fan"
                name="fan"
                value={fanOn}
                onChange={(e) => handleChange(e)}
              />
              <p>FAN</p>
            </label>
          </div>
          {/*End Options Div 2 */}
          <div className={css.options}>
            <label for="routine">
              <div className={css.icons}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill={routine ? "white" : "#BF9381"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66663 20V10.6667"
                    stroke={routine ? "white" : "#BF9381"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.99996 29.3333C9.39319 29.3333 11.3333 27.3932 11.3333 25C11.3333 22.6068 9.39319 20.6667 6.99996 20.6667C4.60673 20.6667 2.66663 22.6068 2.66663 25C2.66663 27.3932 4.60673 29.3333 6.99996 29.3333Z"
                    stroke={routine ? "white" : "#BF9381"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66663 10.6667C8.87577 10.6667 10.6666 8.8758 10.6666 6.66666C10.6666 4.45752 8.87577 2.66666 6.66663 2.66666C4.45749 2.66666 2.66663 4.45752 2.66663 6.66666C2.66663 8.8758 4.45749 10.6667 6.66663 10.6667Z"
                    stroke={routine ? "white" : "#BF9381"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.3334 10.6667C27.5425 10.6667 29.3334 8.8758 29.3334 6.66666C29.3334 4.45752 27.5425 2.66666 25.3334 2.66666C23.1242 2.66666 21.3334 4.45752 21.3334 6.66666C21.3334 8.8758 23.1242 10.6667 25.3334 10.6667Z"
                    stroke={routine ? "white" : "#BF9381"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.83997 20C7.43997 17.6667 9.5733 15.9333 12.0933 15.9466L16.6666 15.96C20.16 15.9733 23.1333 13.7333 24.2266 10.6133"
                    stroke={routine ? "white" : "#BF9381"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {/*End Icons Div 3*/}
              <input
                type="checkbox"
                id="routine"
                name="routine"
                value={routine}
                onChange={(e) => handleChange(e)}
              />
              <p>ROUTINE</p>
            </label>
          </div>
          {/*End Option Div 3*/}
        </div>
        {/*End Group Options Div*/}
        <button className={css.settingsButton} onClick={openSettings}>
          Device Settings
        </button>
      </div>{" "}
      {/*End Slant Div*/}
    </div>
  );
};

export default Device;
