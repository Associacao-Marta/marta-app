import React from "react";
import FontSizeChanger from "react-font-size-changer";
import up from "../../assets/img/btn_increase.svg"
import down from "../../assets/img/btn_decrease.svg"

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
        up:
          <img src={up} style={{scale: "1.2"}}/>
        ,
        down: <img src={down} style={{scale: "1.2"}}/>
        ,
        style: {
          border: "none",
          width: "30px",
          height: "30px",
        },
        buttonsMargin: 5,
      }}
    />
  );
}
