"use client";
import React, { useEffect, useState } from "react";
import { Container } from "../container/Container";
import styles from "./styles.module.css";
import BurgerButton from "./BurgerButton";
import Logo from "public/logotypes/Quickly..svg";
import Image from "next/image";
import Link from "next/link";

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
          <Link className={styles.header__logo} href="/">
            <Image src={Logo} width={99} height={30} alt="logo" />
          </Link>
          <nav
            className={`${styles.nav} ${activeState ? styles.menu_active : ""}`}
          >
            <ul className={styles.nav__list}>
              <li className={styles.list__item}>
                <Link href="/about" className={styles.list__link}>
                  About us
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link href="/products" className={styles.list__link}>
                  Products
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link href="/features" className={styles.list__link}>
                  Features
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link href="/blog" className={styles.list__link}>
                  Our Blog
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link href="/pricing" className={styles.list__link}>
                  Pricing
                </Link>
              </li>
            </ul>
            <div className={styles.flex__group}>
              <Link href={"/singUp"} className={styles.nav__link}>
                Sign up
              </Link>
              <Link className={styles.nav__link} href="">
                Log In
              </Link>
            </div>
          </nav>
          <BurgerButton onClick={handleClick} activeState={activeState} />
        </div>
      </Container>
    </header>
  );
}
