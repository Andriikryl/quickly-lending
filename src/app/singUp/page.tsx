import React from "react";
import { Container } from "../components/container/Container";
import style from "./style.module.css";
export default function SingUp() {
  return (
    <section className={style.singUp}>
      <Container>
        <form action="#" className={style.form}>
          <h1 className={style.form__title}>Get started with Quickly.</h1>
          <div className={style.flex__group}>
            <label className={style.label} htmlFor="name">
              Your name
            </label>
            <input
              className={style.input}
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className={style.flex__group}>
            <label className={style.label} htmlFor="email">
              Your email
            </label>
            <input
              className={style.input}
              type="email"
              name="email"
              id="email"
              placeholder="Your@email.com"
            />
          </div>
          <div className={style.flex__group}>
            <label className={style.label} htmlFor="password">
              Password
            </label>
            <input
              className={style.input}
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              autoComplete="new-password"
            />
          </div>
          <button className={style.form__btn} type="submit">
            Create your free account
          </button>
          <span className={style.from__description}>
            Already have an account?{" "}
            <a className={style.link} href="#">
              Sing in
            </a>
          </span>
        </form>
      </Container>
    </section>
  );
}
