import { Container } from "@/app/components/container/Container";
import React from "react";
import style from "./style.module.css";
import WorkList from "./WorkList/WorkList";
import WorkWeb from "./WorkWeb/WorkWeb";

export default function Works() {
  return (
    <section className={style.works}>
      <Container>
        <div className={style.works__info}>
          <div>
            <h3 className={style.works__title}>How the product works</h3>
            <span className={style.works__description}>
              I want to fly like an angel flare on a ten feet snare I want to
              dance until the sun comes up I want to fight your cousin.
            </span>
          </div>
          <button className={style.works__btn}>Start your trial</button>
        </div>
        <div className={style.flex__group}>
          <WorkList />
          <WorkWeb />
        </div>
      </Container>
    </section>
  );
}
