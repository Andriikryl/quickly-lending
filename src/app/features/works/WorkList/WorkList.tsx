import React from "react";
import style from "./style.module.css";

const data = [
  {
    id: 1,
    title: "Visually plot your roadmap",
    decription: "With our intuitive layout",
  },
  {
    id: 2,
    title: "Edit your feature backlog",
    decription: "Via API or directly",
  },
  {
    id: 3,
    title: "Effortless collaboration",
    decription: "With our web based modules",
  },
  {
    id: 4,
    title: "Project tracking made easy",
    decription: "Not just tickets",
  },
];

export default function WorkList() {
  return (
    <ul className={style.work__list}>
      {data.map((item) => {
        return (
          <li className={style.list__item} key={item.id}>
            <h4 className={style.item__title}>{item.title}</h4>
            <span className={style.item__description}>{item.decription}</span>
          </li>
        );
      })}
    </ul>
  );
}
