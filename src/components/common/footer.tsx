import Logo from "./logo";
import Social from "./social";

export default function Footer() {
  return (
    <footer className="bg-light-secondary dark:bg-dark">
      <div className="flex flex-col md:flex-row justify-between items-center py-20">
        <Logo />
        <div className="flex flex-row justify-center items-center py-4 pr-8">
          <Social mode="dark" size="small" />
        </div>
      </div>
      <div className="text-center py-4 font-bold bg-light-primary dark:bg-dark-primary text-light dark:text-dark">
        Design by @nguyenphatit
      </div>
    </footer>
  );
}
