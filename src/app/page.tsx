import CanDo from "./components/sections/canDo/CanDo";
import Customers from "./components/sections/customers/Customers";
import Help from "./components/sections/help/Help";
import Hero from "./components/sections/hero/Hero";
import Product from "./components/sections/product/Product";
import Sponsors from "./components/sections/sponsors/Sponsors";
import Trail from "./components/sections/trail/Trail";

export default function Home() {
  return (
    <>
      <Hero />
      <Sponsors />
      <Product />
      <Help />
      <CanDo />
      <Customers />
      <Trail />
    </>
  );
}
