import { Container } from "@/app/components/container/Container";
import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import IMage from "public/build/Image.jpg";

export default function Build() {
  return (
    <section className={style.build}>
      <Container>
        <div className={style.build__box}>
          <div className={style.build__text}>
            <h1 className={style.build__title}>
              {" "}
              We wanted to build a company that you will love to work with and
              connect to
            </h1>
            <p className={style.build__description}>
              We’re doing things bigly, I mean really quite big. The way we
              operate is different from other companies because we disrupt. We
              break the code, we crack the code as well.{" "}
            </p>
          </div>
          <div className={style.build__image}>
            <Image src={IMage} width={385} height={415} alt="image" />
          </div>
        </div>
      </Container>
    </section>
  );
}
