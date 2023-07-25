import { Container } from "@/app/components/container/Container";
import React from "react";
import style from "./style.module.css";
import Image from "next/image";

const data = [
  {
    id: 1,
    img: "/boring/Image-1.png",
    width: 305,
    height: 266,
    alt: "image",
  },
  {
    id: 2,
    img: "/boring/Image-2.png",
    width: 285,
    height: 369,
    alt: "image",
  },
  {
    id: 3,
    img: "/boring/Image-3.png",
    width: 285,
    height: 295,
    alt: "image",
  },
  {
    id: 4,
    img: "/boring/Image-4.png",
    width: 285,
    height: 329,
    alt: "image",
  },
];

export default function Boring() {
  return (
    <section className={style.boring}>
      <Container>
        <h3 className={style.boring__title}>Work shouldn’t be boring</h3>
        <span className={style.boring__description}>
          I want to fly like an angel flare on a ten feet snare I want to dance
          until the sun comes I want to fight your cousin.
        </span>
        <ul className={style.boring__list}>
          {data.map((item) => {
            return (
              <li key={item.id} className={style.list__item}>
                <Image
                  src={item.img}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
