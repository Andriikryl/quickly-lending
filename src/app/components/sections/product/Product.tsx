import React from "react";
import { Container } from "../../container/Container";
import style from "./style.module.css";
import Image from "next/image";
import ProductImage from "public/product/Image.png";
import Arrow from "public/icons/confirm.svg";
import Reait from "public/icons/trending_up.svg";

const data = [
  {
    id: 1,
    img: "/icons/contact_support.svg",
    width: 24,
    height: 24,
    alt: "image",
    titel: "Unbeatable support",
    descriprtion:
      "We have 140 support staff on call 24/7 to support your needs.",
  },
  {
    id: 2,
    img: "/icons/code.svg",
    width: 24,
    height: 24,
    alt: "image",
    titel: "Effortless integrations",
    descriprtion:
      "Integrate with over 500 popular applications with only a few clicks.",
  },
  {
    id: 3,
    img: "/icons/3d_rotation.svg",
    width: 24,
    height: 24,
    alt: "image",
    titel: "3D rotation features",
    descriprtion:
      "Flip it, completely around it’s amazing the power of three ds.",
  },
  {
    id: 4,
    img: "/icons/android.svg",
    width: 24,
    height: 24,
    alt: "image",
    titel: "Robot friends are here",
    descriprtion:
      "If you feel down you can listen to the Idles with a friendly robot",
  },
];

export default function Product() {
  return (
    <section className={style.product}>
      <Container>
        <div className={style.product__box}>
          <div className={style.product__info}>
            <h3 className={style.product__title}>
              The source of truth for all of your product decisions
            </h3>
            <span className={style.pruduct__description}>
              This goes further than what you expected, here you can communicate
              two really important product features with icons.
            </span>
            <ul className={style.prduct__list}>
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
                    <h4 className={style.item__title}>{item.titel}</h4>
                    <span className={style.item__description}>
                      {item.descriprtion}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={style.product__image}>
            <Image src={ProductImage} width={546} height={547} alt="image" />
            <div className={style.project__box}>
              <div className={style.project__image}>
                <Image src={Arrow} width={20} height={20} alt="confirm" />
              </div>
              <div className={style.project__view}>
                <span className={style.project__name}> Project Updated</span>
                <div className={style.line}></div>
                <div className={style.line__two}></div>
              </div>
            </div>

            <div className={style.project__boxRait}>
              <div className={style.project__imageRait}>
                <Image src={Reait} width={20} height={20} alt="confirm" />
              </div>
              <div className={style.project__viewRait}>
                <span className={style.project__nameRait}>215 new clients</span>
                <div className={style.lineRait}></div>
                <div className={style.line__twoRait}></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
