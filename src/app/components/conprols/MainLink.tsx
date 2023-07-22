import React from "react";
import style from "./style.module.css";

type LinkProps = {
  text: string;
};

export default function MainLink({ text }: LinkProps) {
  return (
    <a href="#" className={style.link}>
      {text}
    </a>
  );
}
