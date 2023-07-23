import React from "react";
import { Container } from "../../container/Container";
import style from "./style.module.css";
import Image from "next/image";

const data = [
  {
    id: 1,
    img: "/icons/alarm.svg",
    width: 24,
    height: 24,
    alt: "image",
    title: "Save time when designing",
    description:
      "Your new projects are simply a click away with our intuitive creation flow",
  },
  {
    id: 2,
    img: "/icons/check_circle_outline.svg",
    width: 24,
    height: 24,
    alt: "image",
    title: "Get updated on projects",
    description:
      "You receive notifications whenever a team member finishes a task",
  },
  {
    id: 3,
    img: "/icons/tab_unselected.svg",
    width: 24,
    height: 24,
    alt: "image",
    title: "Works on the web",
    description:
      "Don’t download an application when you can just work in browser",
  },
  {
    id: 4,
    img: "/icons/fingerprint.svg",
    width: 24,
    height: 24,
    alt: "image",
    title: "Highly secure interface",
    description: "Use biometrics, 2FA and more to ensure your security in here",
  },
];

export default function CanDo() {
  return (
    <section className={style.canDo}>
      <Container>
        <h3 className={style.canDo__title}>What Quickly can do for you</h3>
        <span className={style.canDo__description}>
          We’re more than just anothe project management software.
        </span>
        <ul className={style.canDo__list}>
          {data.map((item) => {
            return (
              <li key={item.id} className={style.canDo__item}>
                <div className={style.item__image}>
                  <Image
                    src={item.img}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                  />
                </div>
                <h4 className={style.item__title}>{item.title}</h4>
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
