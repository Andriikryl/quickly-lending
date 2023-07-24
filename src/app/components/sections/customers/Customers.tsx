import React from "react";
import { Container } from "../../container/Container";
import style from "./style.module.css";
import Image from "next/image";

const data = [
  {
    id: 1,
    img: "/icons/qo.svg",
    width: 31,
    height: 25,
    alt: "image",
    text: "I love the flexibility of the product, we’ve been able to integrate with all the  other platforms we use in product.",
    title: "Tom Parsons",
    description: "VP of Product",
  },
  {
    id: 2,
    img: "/icons/qo.svg",
    width: 31,
    height: 25,
    alt: "image",
    text: "This is the first time that the entire team from design to management has been in love with a tool.",
    title: "Claudia Winkleman",
    description: "Product Manager",
  },
  {
    id: 3,
    img: "/icons/qo.svg",
    width: 31,
    height: 25,
    alt: "image",
    text: "Thanks so much to the team at Quickly for building something truly fun to use, and excellently equipt",
    title: "Renata Salvatore",
    description: "Director of Design",
  },
];

export default function Customers() {
  return (
    <section className={style.customers}>
      <Container>
        <div className={style.flex__group}>
          <div>
            <h4 className={style.customers__title}>
              Our customers keep talking
            </h4>
            <span className={style.customers__description}>
              Listen to what they say about our product offering right here
            </span>
          </div>
          <button className={style.customers__btn}>Find out more</button>
        </div>
        <ul className={style.customers__list}>
          {data.map((item) => {
            return (
              <li key={item.id} className={style.list__item}>
                <div className={style.item__image}>
                  <Image
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                  />
                </div>
                <blockquote>
                  <p className={style.item__text}>{item.text}</p>
                </blockquote>
                <h5 className={style.item__title}>{item.title}</h5>
                <span className={style.item__description}>
                  {item.description}
                </span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
