import { Container } from "@/app/components/container/Container";
import React from "react";
import style from "./style.module.css";
export default function FeatureHero() {
  return (
    <section className={style.hero}>
      <Container>
        <span className={style.hero__description}>
          Are you really really ready for the boom box?
        </span>
        <h1 className={style.hero__title}>The future of features</h1>
      </Container>
    </section>
  );
}
