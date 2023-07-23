import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import Avatar from "public/hero/avatar.svg";

export default function ProjectAvatar() {
  return (
    <li className={style.list__item}>
      <div className={style.item__card}>
        <div className={style.inner__card}>
          <div className={style.avatar__box}>
            <Image src={Avatar} width={67} height={67} alt="avatar" />
          </div>
          <h5 className={style.card__title}>Anneta Wilson</h5>
          <span className={style.card__description}>Product Manager</span>
          <div className={style.line}></div>
          <div className={style.line__two}></div>
        </div>
      </div>
      <h6 className={style.item__title}>Advanced Tracking</h6>
      <span className={style.item__description}>
        Track project progress with swim lanes, road maps and other tools
      </span>
    </li>
  );
}
