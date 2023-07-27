import React from "react";
import style from "./style.module.css";
import { Container } from "@/app/components/container/Container";
import ImageSource from "public/source/Image.jpg";
import Image from "next/image";

export default function Source() {
  return (
    <section className={style.source}>
      <Container>
        <div className={style.source__box}>
          <div className={style.source__image}>
            <Image src={ImageSource} width={546} height={516} alt="image" />
          </div>
          <div className={style.source__info}>
            <h2 className={style.source__title}>
              The source of truth for all of your product decisions
            </h2>
            <p className={style.source__description}>
              Not only can you create and track projects, you can also work on
              roadmaps, map them to your OKRs and ensure your entire team is
              aligned on the most important work.
            </p>
            <ul className={style.sourse__list}>
              <li className={style.list__item}>
                <div>
                  <h3 className={style.item__title}>Roadmap support</h3>
                  <span className={style.item__description}>
                    Need to assign a designer to your new project, that’s easy
                    with quickly
                  </span>
                </div>
              </li>
              <li className={style.list__item}>
                <div>
                  <h3 className={style.item__title}>
                    Track progress and map your roadmap flexibly
                  </h3>
                  <span className={style.item__description}>
                    Track project progress with swim lanes, road maps and other
                    tools
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
