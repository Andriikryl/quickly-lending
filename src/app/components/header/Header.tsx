"use client";
import React, { useEffect, useState } from "react";
import { Container } from "../container/Container";
import styles from "./styles.module.css";
import BurgerButton from "./BurgerButton";
import Logo from "public/logotypes/Quickly..svg";
import Image from "next/image";

export default function Header() {
  const [activeState, setActiveState] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("dis-scroll", activeState);
  }, [activeState]);

  const handleClick = () => {
    setActiveState((prev) => !prev);
  };
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__box}>
          <a className={styles.header__logo} href="#">
            <Image src={Logo} width={99} height={30} alt="logo" />
          </a>
          <nav
            className={`${styles.nav} ${activeState ? styles.menu_active : ""}`}
          >
            <ul className={styles.nav__list}>
              <li className={styles.list__item}>
                <a className={styles.list__link} href="#">
                  About us
                </a>
              </li>
              <li className={styles.list__item}>
                <a className={styles.list__link} href="#">
                  Products
                </a>
              </li>
              <li className={styles.list__item}>
                <a className={styles.list__link} href="#">
                  Features
                </a>
              </li>
              <li className={styles.list__item}>
                <a className={styles.list__link} href="#">
                  Our Blog
                </a>
              </li>
              <li className={styles.list__item}>
                <a className={styles.list__link} href="#">
                  Pricing
                </a>
              </li>
            </ul>
            <div className={styles.flex__group}>
              <a className={styles.nav__link} href="">
                Sign up
              </a>
              <a className={styles.nav__link} href="">
                Log In
              </a>
            </div>
          </nav>
          <BurgerButton onClick={handleClick} activeState={activeState} />
        </div>
      </Container>
    </header>
  );
}
