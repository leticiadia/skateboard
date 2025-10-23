import { Navbar } from "../navbar/Navbar";

import SkateboardLogo from "../../../assets/images/skateboard-logo.svg";

export function Header() {
  return (
    <header className="bg-black-700 w-full py-8 px-4 flex items-center justify-between md:py-6 lg:px-16 2xl:justify-evenly">
      <div>
        <img src={SkateboardLogo} className="h-8 object-cover lg:h-14" alt="" />
      </div>

      <Navbar />
    </header>
  );
}
