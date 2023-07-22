import React from "react";
import { Container } from "../../container/Container";
import style from "./style.module.css";
import MainLink from "../../conprols/MainLink";
import HeroImage from "public/hero/hero-bg.png";
import Avatar from "public/hero/avatar.svg";
import Image from "next/image";
import Arrow from "public/icons/confirm.svg";

export default function Hero() {
  return (
    <section className={style.hero}>
      <Container>
        <div className={style.hero__box}>
          <div className={style.hero__info}>
            <span className={style.hero__subtitle}>
              The new way to work online
            </span>
            <h1 className={style.hero__title}>
              Get the important work done <span>faster</span>
            </h1>
            <span className={style.hero__subinfo}>
              With Quickly, you can get more productive work done in far less
              time than ever before.
            </span>
            <div className={style.flex__group}>
              <MainLink text="Sign up" />
              <MainLink text="Learn more" />
            </div>
          </div>
          <div className={style.hero__innerBox}>
            <div className={style.avatar__box}>
              <div className={style.avatar__image}>
                <Image src={Avatar} width={63} height={63} alt="avatar" />
              </div>
              <div className={style.avatar__text}>
                <span className={style.main__text}>New task assigned</span>
                <span className={style.sub__text}>
                  Louise assigned you a project
                </span>
              </div>
            </div>
            <div className={style.hero__image}>
              <Image src={HeroImage} width={415} height={490} alt="hero" />
            </div>
            <div className={style.project__box}>
              <div className={style.project__image}>
                <Image src={Arrow} width={34} height={34} alt="confirm" />
              </div>
              <div className={style.project__view}>
                <span className={style.project__name}> Project Updated</span>
                <div className={style.line}></div>
                <div className={style.line__two}></div>
                <div className={style.box}></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
