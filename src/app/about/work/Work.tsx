import React from "react";
import style from "./style.module.css";
import { Container } from "@/app/components/container/Container";

const data = [
  {
    id: 1,
    number: 32,
    title: "Cups of coffee",
    description: "Designing this section",
  },
  {
    id: 2,
    number: 412,
    title: "Team members",
    description: "Working right now",
  },
  {
    id: 3,
    number: 17,
    title: "Languages spoken",
    description: "On our table in the pub",
  },
  {
    id: 4,
    number: 2.142,
    title: "Dollars spent today",
    description: "On khachapuri imeruli",
  },
];

export default function Work() {
  return (
    <section className={style.work}>
      <Container>
        <div className={style.work__box}>
          <div className={style.work__text}>
            <h2 className={style.work__title}>
              When we get to work we really make things happen fast and
              powerfully
            </h2>
            <p className={style.work__description}>
              I want to fly like an angel flare on a ten feet snare I want to
              dance until the sun comes up I want to fight your cousin.
            </p>
            <button className={style.work__btn}>Sign up</button>
          </div>
          <div className={style.list__box}>
            <ul className={style.work__list}>
              {data.map((item) => {
                return (
                  <li className={style.work__item} key={item.id}>
                    <h3 className={style.item__title}>
                      <span className={style.title__number}>{item.number}</span>
                      {item.title}
                    </h3>
                    <span className={style.item__description}>
                      {item.description}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
