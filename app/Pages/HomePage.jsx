import { Background } from "../components/Background";
import { FirstLayer } from "../components/FirstLayer";
import { SecondLayer } from "../components/SecondLayer";
import { ThirdLayer } from "../components/ThirdLayer";
import { Navbar } from "../components/Navbar";

export function HomePage() {
  return (
    <div>
      <Background />
      <Navbar />
      <FirstLayer />
      <SecondLayer />
      <ThirdLayer />
    </div>
  );
}
