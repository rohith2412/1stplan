import { Background } from "./components/Background";
import { FirstLayer } from "./components/FirstLayer";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div>
    <Background />
    <Navbar />
    <FirstLayer />
    </div>
  );
}
