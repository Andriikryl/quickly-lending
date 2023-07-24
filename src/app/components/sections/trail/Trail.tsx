import React from "react";
import { Container } from "../../container/Container";
import style from "./style.module.css";
export default function Trail() {
  return (
    <section className={style.trail}>
      <Container>
        <span className={style.trial__description}>
          Stop wasting time, start saving it
        </span>
        <h4 className={style.trail__title}>
          Sign up for your free trial, with the world’s best product tool
        </h4>
        <div className={style.btn__box}>
          <button className={style.trail__btn}>Start your trial</button>
        </div>
      </Container>
    </section>
  );
}
