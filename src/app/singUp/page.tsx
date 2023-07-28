"use client";

import React from "react";
import { Container } from "../components/container/Container";
import style from "./style.module.css";
import { useForm } from "react-hook-form";
export default function SingUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <section className={style.singUp}>
      <Container>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="Your@email.com"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid.",
                },
              })}
            />
            {errors.email?.type === "required" && (
              <p className={style.errorMsg}>Email is required.</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className={style.errorMsg}>Email is not valid</p>
            )}
          </div>
          <div className={style.flex__group}>
            <label className={style.label} htmlFor="password">
              Password
            </label>
            <input
              className={style.input}
              type="password"
              id="password"
              placeholder="Enter password"
              autoComplete="new-password"
              {...register("password", {
                required: true,
                validate: {
                  checkLength: (value) => value.length >= 6,
                  matchPattern: (value) =>
                    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                      value
                    ),
                },
              })}
            />
            {errors.password?.type === "required" && (
              <p className={style.errorMsg}>Password is required.</p>
            )}
            {errors.password?.type === "checkLength" && (
              <p className={style.errorMsg}>
                Password should be at-least 6 characters.
              </p>
            )}
            {errors.password?.type === "matchPattern" && (
              <p className={style.errorMsg}>
                Password should contain at least one uppercase letter, lowercase
                letter, digit, and special symbol.
              </p>
            )}
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
