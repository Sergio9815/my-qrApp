import "./styles.css";
import React, { useEffect, useState } from "react";
import QRCode from "easyqrcodejs";

export default function App() {
  const qrRef = React.createRef();
  const [text, setText] = useState("");
  const [data, setData] = useState(false);

  const colors = [
    "#25AFF5",
    "#f26d8c",
    "#675AB7",
    "#71EFA3",
    "#B7744B",
  ]

  useEffect(() => {
    qrRef.current.innerHTML = "";
    console.log(qrRef);
    new QRCode(qrRef.current, getQrOptions(data ? data : ""));
  }, [data]);

  function getQrOptions(text) {
    const colorDark = colors[Math.floor(Math.random() * 5)];
    const colorLight = "#ffffff";
    let length = 230;

    return {
      text: text,
      width: length,
      height: length,
      colorDark: colorDark,
      colorLight: colorLight,
      correctLevel: QRCode.CorrectLevel.L, // L, M, Q, H
      dotScale: 1, // Must be greater than 0, less than or equal to 1. default is 1

      quietZone: 10,
      quietZoneColor: colorLight,

      // logo: qrlogo,
      // logoWidth: 40,                   // width. default is automatic width
      // logoHeight: 40,                  // height. default is automatic height
      // logoBackgroundColor: '#FFFFFF',  // Logo background color, Invalid when `logBgTransparent` is true; default is '#ffffff'
      // logoBackgroundTransparent: true, // Whether use transparent image, default is false

      // === position Pattern(Eye) Color
      PO: colorDark, // Global position Outer color. if not set, the default is `colorDark`
      PI: colorDark, // Global position Inner color. if not set, the default is `colorDark`
      PO_TL: colorDark, // position Outer color - Top Left
      PI_TL: colorDark, // position Inner color - Top Left
      PO_TR: colorDark, // position Outer color - Top Right
      PI_TR: colorDark, // position Inner color - Top Right
      PO_BL: colorDark, // position Outer color - Bottom Left
      PI_BL: colorDark, // position Inner color - Bottom Left

      // === Alignment Color
      AO: colorDark, // Alignment Outer. if not set, the default is `colorDark`
      AI: colorDark, // Alignment Inner. if not set, the default is `colorDark`

      // === Timing Pattern Color
      timing: colorDark, // Global Timing color. if not set, the default is `colorDark`
      timing_H: colorDark, // Horizontal timing color
      timing_V: colorDark // Vertical timing color
    };
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="App qrapp">
      <h1>MY QR CODE WITH JS </h1>
      <div class="container">
        <input
          onChange={handleChange}
          className="input"
          type="text"
          placeholder="WRITE SOMETHING..."
        />
        <button
          className="bar--button"
          type="button"
          onClick={() => setData(text)}
        >
          Create QR
        </button>
      </div>

      <div className={data ? "" : "hide"}>
        <div ref={qrRef}></div>
      </div>

      {!data && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="230"
          height="230"
          viewBox="0 0 24 24"
        >
          <path
            fill="#424242"
            d="M9 6h-1v-1h2v2h-1v-1zm2-1h-1v-2h-2v-1h3v1h1v1h-1v1zm2-3h-2v-1h-3v-1h4v1h1v-1h1v5h-1v-3zm-8 3h-3v-3h3v3zm7 0h1v1h-1v-1zm8 0h-3v-3h3v3zm2-5h-7v7h7v-7zm-1 6h-5v-5h5v5zm-10 0h1v1h-1v-1zm2 1v-1h1v1h-1zm-7 2v1h-1v-1h1zm1-9h-7v7h7v-7zm-1 6h-5v-5h5v5zm3 8v2h-1v-2h1zm-4-6v1h-2v1h1v1h-3v-1h1v-1h-2v-1h5zm-3 9h3v3h-3v-3zm-2 5h7v-7h-7v7zm1-6h5v5h-5v-5zm5-3h1v1h-1v-1zm-2-1v-1h1v3h-1v-1h-1v1h-1v-1h-1v1h-1v-2h4zm6.089 4.734c0-3.765 3.149-6.845 6.915-6.725 1.954.052 3.761.944 4.996 2.429v-2.4379999999999997h-1v-2h-1v1.69c-.627-.284-1.298-.483-2-.591v-.099h1v-1h-2v1h-1v-1h-1v1h-1v-1h-1v1h-1v-1h-1v1h-1v1h-1v-1h1v-1h-4v1h2v1h-2v1h1v2h1v-1h2v1.1c-.471.88-.775 1.86-.874 2.9h-.126v1h-1v5h1v-1h1.383c.239.356.495.674.791 1h1.473c-1.677-1.334-2.558-3.295-2.558-5.266zm.911-5.734v-1h1v.698c-.362.29-.695.613-1 .962v-.66zm-2 9v-1h.429c.106.345.242.677.393 1h-.822zm15 2.586l-2.832-2.832c.524-.79.832-1.735.832-2.754 0-2.761-2.239-5-5-5s-5 2.239-5 5 2.239 5 5 5c1.019 0 1.964-.308 2.754-.832l2.832 2.832 1.414-1.414zm-7-2.586c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"
          />
        </svg>
      )}
    </div>
  );
}
