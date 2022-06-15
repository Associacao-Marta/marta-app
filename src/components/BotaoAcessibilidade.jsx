import React from "react";
import FontSizeChanger from "react-font-size-changer";

export default function BotaoAcessibilidade() {
  return (
    <FontSizeChanger
      targets={["#target .content"]}
      onChange={(element, newValue, oldValue) => {
        console.log(element, newValue, oldValue);
      }}
      options={{
        stepSize: 1,
        range: 10,
      }}
      customButtons={{
        up: (
          <span style={{ fontSize: "24px" }}>
            <b>A</b>
          </span>
        ),
        down: <span style={{ fontSize: "14px" }}>A</span>,
        style: {
          backgroundColor: "#2196F380",
          border: "none",
          color: "white",
          borderRadius: "5px",
          width: "30px",
          height: "30px",
        },
        buttonsMargin: 5,
      }}
    />
  );
}
