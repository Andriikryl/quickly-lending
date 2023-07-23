import React from "react";
import { Container } from "../../container/Container";
import style from "./style.module.css";
import ProjectCard from "./projectCard/ProjectCard";
import ProjectUpdate from "./projectUpdate/ProjectUpdate";
import ProjectAvatar from "./projectAvatar/ProjectAvatar";
export default function Help() {
  return (
    <section className={style.help}>
      <Container>
        <h4 className={style.help__title}>
          How Quickly helps you get more done
        </h4>
        <div>
          <ul className={style.help__list}>
            <ProjectCard />
            <ProjectUpdate />
            <ProjectAvatar />
          </ul>
        </div>
      </Container>
    </section>
  );
}
