import { Artists } from "./components/artists";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Paints } from "./components/paints";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Artists />
      <Paints />
      <Footer />
    </>
  );
}
