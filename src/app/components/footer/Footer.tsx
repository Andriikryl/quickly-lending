import React from "react";
import { Container } from "../container/Container";
import Image from "next/image";
import logo from "public/logotypes/Quickly..svg";
import style from "./style.module.css";
export default function Footer() {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.footer__box}>
          <div className={style.footer__location}>
            <a href="#" className={style.logo}>
              <Image src={logo} width={132} height={40} alt="logo" />
            </a>
            <ul className={style.location__list}>
              <li className={style.location__item}>
                32 - 44 Upper Rupert Street
              </li>
              <li className={style.location__item}>W12 8DY Kensington</li>
              <li className={style.location__item}>United Kingdom</li>
            </ul>
          </div>
          <div className={style.footer__links}>
            <ul className={style.links__list}>
              <li className={style.list__item}>Our Company</li>
              <li className={style.list__item}>
                <a href="#">Our Team</a>
              </li>
              <li className={style.list__item}>
                <a href="#">Company Vision</a>
              </li>
              <li className={style.list__item}>
                <a href="#">Our History</a>
              </li>
              <li className={style.list__item}>
                <a href="#">Investorys</a>
              </li>
            </ul>

            <ul className={style.links__list}>
              <li className={style.list__item}>Our Resources</li>
              <li className={style.list__item}>
                <a href="#">The Blog</a>
              </li>
              <li className={style.list__item}>
                <a href="#">Downloads</a>
              </li>
              <li className={style.list__item}>
                <a href="#">Change Log</a>
              </li>
              <li className={style.list__item}>
                <a href="#">Slack Channel</a>
              </li>
            </ul>

            <ul className={style.links__list}>
              <li className={style.list__item}>Our Product</li>
              <li className={style.list__item}>
                <a href="#">New Features</a>
              </li>
              <li className={style.list__item}>
                <a href="#">Roadmap</a>
              </li>
              <li className={style.list__item}>
                <a href="#">Product Demo</a>
              </li>
              <li className={style.list__item}>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
