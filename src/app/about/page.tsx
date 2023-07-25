import Boring from "./boring/Boring";
import Build from "./build/Build";
import Story from "./story/Story";
import Team from "./team/Team";
import Work from "./work/Work";

export default function About() {
  return (
    <div>
      <Build />
      <Work />
      <Story />
      <Boring />
      <Team />
    </div>
  );
}
