import React from "react";
import style from "./style.module.css";
import { Container } from "@/app/components/container/Container";

const data = [
  {
    id: 1,
    title: "Free",
    price: "£19.99",
    description: "Get the main benefits of quickly for this unbelievable offer",
    btn: "Get Started",
    stufs: [
      "All features",
      "Unlimited projects",
      "No payment needed",
      "Free onboarding",
    ],
  },
  {
    id: 2,
    title: "Business",
    price: "£39.99",
    description: "Premium features for growing businesses and companies",
    btn: "Get Started",
    stufs: [
      "All features",
      "Unlimited projects",
      "No payment needed",
      "Free onboarding",
      "No payment needed",
      "Free onboarding",
    ],
  },
  {
    id: 3,
    title: "Expert",
    price: "£59.99",
    description: "The ultimate collection of features for expert users",
    btn: "Get Started",
    stufs: [
      "All features",
      "Unlimited projects",
      "No payment needed",
      "Free onboarding",
      "No payment needed",
      "Free onboarding",
      "Unlimited projects",
      "No payment needed",
      "Free onboarding",
    ],
  },
  {
    id: 4,
    title: "Enterprise",
    price: "£199.99",
    description: "Custom solutions for the world’s most demanding industries",
    btn: "Get Started",
    stufs: [
      "All features",
      "Unlimited projects",
      "No payment needed",
      "Free onboarding",
      "No payment needed",
      "Free onboarding",
      "Unlimited projects",
      "No payment needed",
      "Free onboarding",
      "Free onboarding",
      "Free onboarding",
    ],
  },
];

export default function Plans() {
  return (
    <section className={style.plans}>
      <Container>
        <h2 className={style.plans__title}>Pricing plans for every team</h2>
        <span className={style.plans__description}>
          Democracy. It’s what we see, it’s how we live and what we breathe.
          Here is a cup of tea, please won’t you drink it with me.
        </span>
        <div>
          <ul className={style.plans__list}>
            {data.map((item) => {
              return (
                <li key={item.id} className={style.list__item}>
                  <h3 className={style.item__title}>{item.title}</h3>
                  <span className={style.item__price}>{item.price}</span>
                  <p className={style.item__description}>{item.description}</p>
                  <button className={style.item__btn}>{item.btn}</button>
                  <ul className={style.inner__list}>
                    {item.stufs.map((stuf, index) => {
                      return (
                        <li className={style.inner__item} key={index}>
                          {stuf}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
