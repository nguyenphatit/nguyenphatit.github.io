import Logo from "./logo";
import Social from "./social";
import ThemeChanger from "./theme-changer";

export default function Footer() {
  return (
    <footer className="bg-light-secondary dark:bg-dark">
      <div className="flex flex-col md:flex-row justify-between items-center py-20">
        <Logo />
        <div className="flex flex-col justify-center items-end py-4 pr-8">
          <Social defaultMode="dark" size="small" />
          <div className="py-4 text-light">
            Theme: <ThemeChanger />
          </div>
        </div>
      </div>
      <div className="text-center py-4 font-bold bg-light-primary dark:bg-dark-primary text-light dark:text-dark">
        Design by @nguyenphatit
      </div>
    </footer>
  );
}
