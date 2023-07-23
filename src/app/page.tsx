import CanDo from "./components/sections/canDo/CanDo";
import Help from "./components/sections/help/Help";
import Hero from "./components/sections/hero/Hero";
import Product from "./components/sections/product/Product";
import Sponsors from "./components/sections/sponsors/Sponsors";

export default function Home() {
  return (
    <>
      <Hero />
      <Sponsors />
      <Product />
      <Help />
      <CanDo />
    </>
  );
}
