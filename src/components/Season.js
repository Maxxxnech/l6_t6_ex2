import React from "react";
import images from "../data/images.json";

//Default value is 3
export default function Season({ value = 3, mode }) {
  console.log("mode: " + mode);
  let seasonName = "";
  /******************************* */
  /*1. Условный рендеринг: if-else */
  /******************************* */
  if (mode === "if-else") {
    if (value === 0) {
      seasonName = "Зима";
      return (
        <div>
          <h2>
            {seasonName}, режим:  {mode}
          </h2>
          <img src={images[value]?.src} alt={seasonName}></img>
        </div>
      );
    }
    if (value === 1) {
      seasonName = "Весна";
      return (
        <div>
          {" "}
          <h2>
            {seasonName}, режим: {mode}
          </h2>
          <img src={images[value]?.src} alt={seasonName}></img>
        </div>
      );
    }
    if (value === 2) {
      seasonName = "Лето";
      return (
        <div>
          <h2>
            {seasonName}, режим:  {mode}
          </h2>
          <img src={images[value]?.src} alt={seasonName}></img>
        </div>
      );
    }
    if (value === 3) {
      seasonName = "Осень";
      return (
        <div>
          <h2>
            {seasonName}, режим:  {mode}
          </h2>
          <img src={images[value]?.src} alt={seasonName}></img>
        </div>
      );
    }
  }
  /******************************* */
  /*2. Условный рендеринг: switch  */
  /******************************* */
  if (mode === "switch") {
    switch (value) {
      case 0:
        seasonName = "Зима";
        return (
          <div>
            <h2>
              {seasonName}, режим:  {mode}
            </h2>
            <img src={images[value]?.src} alt={seasonName}></img>
          </div>
        );
      case 1:
        seasonName = "Весна";
        return (
          <div>
            <h2>
              {seasonName}, режим:  {mode}
            </h2>
            <img src={images[value]?.src} alt={seasonName}></img>
          </div>
        );
      case 2:
        seasonName = "Лето";
        return (
          <div>
            <h2>
              {seasonName}, режим:  {mode}
            </h2>
            <img src={images[value]?.src} alt={seasonName}></img>
          </div>
        );
      case 3:
        seasonName = "Осень";
        return (
          <div>
            <h2>
              {seasonName}, режим:  {mode}
            </h2>
            <img src={images[value]?.src} alt={seasonName}></img>
          </div>
        );
    }
  }
  /***************************************** ***/
  /*2. Условный рендеринг: тернарный оператор  */
  /******************************************* */
  if (mode === "тернарный оператор") {
    return value === 0
      ? ((seasonName = "Зима"),
        (
          <div>
            <h2>
              {seasonName}, режим:  {mode}
            </h2>
            <img src={images[value]?.src} alt={seasonName}></img>
          </div>
        ))
      : value === 1
      ? ((seasonName = "Весна"),
        (
          <div>
            <h2>
              {seasonName}, режим:  {mode}
            </h2>
            <img src={images[value]?.src} alt={seasonName}></img>
          </div>
        ))
      : value === 2
      ? ((seasonName = "Лето"),
        (
          <div>
            <h2>
              {seasonName}, режим:  {mode}
            </h2>
            <img src={images[value]?.src} alt={seasonName}></img>
          </div>
        ))
      : ((seasonName = "Осень"),
        (
          <div>
            <h2>
              {seasonName}, режим:  {mode}
            </h2>
            <img src={images[value]?.src} alt={seasonName}></img>
          </div>
        ));
  }
  if (mode === "тернарный оператор в пропсе") {
    return (
      <div>
        <h2>
          {
            (seasonName =
              value === 0
                ? "Зима"
                : value === 1
                ? "Весна"
                : value === 2
                ? "Лето"
                : "Осень")
          }, режим:  {mode}
        </h2>
        <img src={images[value]?.src} alt={seasonName}></img>
      </div>
    );
  }
  if (mode === "&& в JSX") {

    return (
      <div>
        <h2>
          {value === 0 &&
            (seasonName = "Зима") &&
            seasonName + ", режим: " + mode}
          {value === 1 &&
            (seasonName = "Весна") &&
            seasonName + ", режим: " + mode}
          {value === 2 &&
            (seasonName = "Лето") &&
            seasonName + ", режим: " + mode}
          {value === 3 &&
            (seasonName = "Осень") &&
            seasonName + ", режим: " + mode}
        </h2>
        <img src={images[value]?.src} alt={seasonName}></img>
      </div>
    );
  }
  return (
    <div>
      something wrong, value: {value} mode: {mode}
    </div>
  );
}
