import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import Arrow from "public/icons/confirm.svg";

export default function ProjectUpdate() {
  return (
    <li className={style.list__item}>
      <div className={style.item__card}>
        <div className={style.project__box}>
          <div className={style.project__image}>
            <Image src={Arrow} width={20} height={20} alt="confirm" />
          </div>
          <div className={style.project__view}>
            <span className={style.project__name}> Project Updated</span>
            <div className={style.line}></div>
            <div className={style.line__two}></div>
          </div>
        </div>
      </div>
      <h6 className={style.item__title}>Effortless Collaboration</h6>
      <span className={style.item__description}>
        Need to assign a designer to your new project, that’s easy with quickly
      </span>
    </li>
  );
}
