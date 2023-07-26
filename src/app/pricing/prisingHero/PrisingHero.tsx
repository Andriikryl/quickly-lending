import { Container } from "@/app/components/container/Container";
import React from "react";
import style from "./style.module.css"
export default function PrisingHero() {
  return (
    <section className={style.prising}>
      <Container>
        <span className={style.prising__description}>Smart plans for growing businesses</span>
        <h1 className={style.pricing__title}>Our Pricing Plans</h1>
      </Container>
    </section>
  );
}
