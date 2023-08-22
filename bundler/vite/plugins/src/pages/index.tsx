import { Link } from "@solidjs/router";
import "./index.css";

const Index = () => {
  return (
    <ul class="pages">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/About">About</Link></li>
    </ul>
  );
};

export default Index;
