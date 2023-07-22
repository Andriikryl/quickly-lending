import React from "react";
import { Container } from "../../container/Container";
import style from "./style.module.css";
import Image from "next/image";

const data = [
  {
    id: 1,
    img: "/sponsors/sonylogo.svg",
    width: 150,
    height: 31,
  },
  {
    id: 2,
    img: "/sponsors/Louis_Vuitton_logo logo.svg",
    width: 203,
    height: 22,
  },
  {
    id: 3,
    img: "/sponsors/slack-plain-wordmarkogo.svg",
    width: 161,
    height: 74,
  },
  {
    id: 4,
    img: "/sponsors/facebooklogo.svg",
    width: 150,
    height: 29,
  },
];

export default function Sponsors() {
  return (
    <section className={style.sponsors}>
      <Container>
        <h2 className={style.sponsors__title}>
          We work with some of the world’s leading companies
        </h2>
        <ul className={style.sponsors__box}>
          {data.map((item) => {
            return (
              <li key={item.id} className={style.box__item}>
                <Image
                  src={item.img}
                  width={item.width}
                  height={item.height}
                  alt="image"
                />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
