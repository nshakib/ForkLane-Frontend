import { TopBar } from "./top-bar";
import { MainNav } from "./main-nav";

export function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 flex flex-col bg-white dark:bg-slate-950 shadow-sm">
      <TopBar />
      <MainNav />
     
    </header>
  );
}