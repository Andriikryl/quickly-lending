import React from "react";
import style from "./style.module.css";
import { Container } from "@/app/components/container/Container";

export default function Story() {
  return (
    <section className={style.story}>
      <Container>
        <div className={style.story__box}>
          <div className={style.story__prevu}>
            <span className={style.story__subinfo}>
              Not your typical startup story
            </span>
            <h3 className={style.story__title}>
              Our story isn’t usual but it is extra ordinary learn about it.
            </h3>
          </div>
          <div>
            <p className={style.story__description}>
              We’re doing things bigly, I mean really quite big. The way we
              operate is different from other companies because we disrupt. We
              break the code, we crack the code as well. Get to know how we
              work, who we are and what we value on this all inclusive beautiful
              web page that we put together.With a new approach to product
              design, management and even human resources we’ve transformed the
              market of digital goods and created something that is really great
              if you understand why.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
