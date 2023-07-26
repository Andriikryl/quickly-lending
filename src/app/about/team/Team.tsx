import { Container } from "@/app/components/container/Container";
import React from "react";
import style from "./style.module.css";
import Image from "next/image";

const data = [
  {
    id: 1,
    img: "/team/image-1.jpg",
    width: 195,
    heigth: 195,
    alt: "image",
    title: "Roberta Flack",
    description: "Chief Innovator",
    faceImg: "/icons/mdi_facebook.svg",
    instImg: "/icons/mdi_instagram.svg",
    twiterImg: "/icons/mdi_twitter.svg",
  },
  {
    id: 2,
    img: "/team/image-2.jpg",
    width: 195,
    heigth: 195,
    alt: "image",
    title: "Robert Wilts",
    description: "Head of HR",
    faceImg: "/icons/mdi_facebook.svg",
    instImg: "/icons/mdi_instagram.svg",
    twiterImg: "/icons/mdi_twitter.svg",
  },
  {
    id: 3,
    img: "/team/image-3.jpg",
    width: 195,
    heigth: 195,
    alt: "image",
    title: "Charlie Roberts",
    description: "Chief Innovation Officer",
    faceImg: "/icons/mdi_facebook.svg",
    instImg: "/icons/mdi_instagram.svg",
    twiterImg: "/icons/mdi_twitter.svg",
  },
  {
    id: 4,
    img: "/team/image-4.jpg",
    width: 195,
    heigth: 195,
    alt: "image",
    title: "Christian Heart",
    description: "UX Writing Lead",
    faceImg: "/icons/mdi_facebook.svg",
    instImg: "/icons/mdi_instagram.svg",
    twiterImg: "/icons/mdi_twitter.svg",
  },
  {
    id: 5,
    img: "/team/image-5.jpg",
    width: 195,
    heigth: 195,
    alt: "image",
    title: "Tommy Wisby",
    description: "Chief of Cutlery",
    faceImg: "/icons/mdi_facebook.svg",
    instImg: "/icons/mdi_instagram.svg",
    twiterImg: "/icons/mdi_twitter.svg",
  },
  {
    id: 6,
    img: "/team/image-6.jpg",
    width: 195,
    heigth: 195,
    alt: "image",
    title: "Teddy Pendergrass",
    description: "Legendary Song Writer",
    faceImg: "/icons/mdi_facebook.svg",
    instImg: "/icons/mdi_instagram.svg",
    twiterImg: "/icons/mdi_twitter.svg",
  },
];

export default function Team() {
  return (
    <section className={style.team}>
      <Container>
        <h3 className={style.team__title}>A team of exceptional people</h3>
        <div className={style.inner___box}>
          <ul className={style.team__list}>
            {data.map((item) => {
              return (
                <li key={item.id} className={style.list__item}>
                  <div className={style.item__image}>
                    <Image
                      src={item.img}
                      width={item.width}
                      height={item.heigth}
                      alt={item.alt}
                    />
                  </div>
                  <h4 className={style.item__title}>{item.title}</h4>
                  <span className={style.item__description}>
                    {item.description}
                  </span>
                  <ul className={style.social__list}>
                    <li className={style.inner__item}>
                      <a className={style.social__link} href="#">
                        <Image
                          src={item.faceImg}
                          width={24}
                          height={24}
                          alt="social"
                        />
                      </a>
                    </li>
                    <li className={style.inner__item}>
                      <a className={style.social__link} href="#">
                        <Image
                          src={item.instImg}
                          width={24}
                          height={24}
                          alt="social"
                        />
                      </a>
                    </li>
                    <li className={style.inner__item}>
                      <a className={style.social__link} href="#">
                        <Image
                          src={item.twiterImg}
                          width={24}
                          height={24}
                          alt="social"
                        />
                      </a>
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
