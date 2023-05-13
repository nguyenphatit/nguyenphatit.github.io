export default function HardSkill() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative">
      <div className="container">
        <h1 className="font-heading text-9xl text-light-primary dark:text-dark-primary mb-12 px-4 md:px-0">
          Hard Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-0">
          <div className="p-4 border-4 border-light-primary dark:border-dark-primary rounded-xl">
            <div className="text-4xl md:text-6xl font-bold text-light-primary dark:text-dark-primary text-center select-none">
              ReactJS
            </div>
          </div>
          <div className="p-4 border-4 border-light-primary dark:border-dark-primary rounded-xl">
            <div className="text-4xl md:text-6xl font-bold text-light-primary dark:text-dark-primary text-center select-none">
              NextJS
            </div>
          </div>
          <div className="p-4 border-4 border-light-primary dark:border-dark-primary rounded-xl">
            <div className="text-4xl md:text-6xl font-bold text-light-primary dark:text-dark-primary text-center select-none">
              GatsbyJS
            </div>
          </div>
          <div className="p-4 border-4 border-light-primary dark:border-dark-primary rounded-xl">
            <div className="text-4xl md:text-6xl font-bold text-light-primary dark:text-dark-primary text-center select-none">
              Angular
            </div>
          </div>
          <div className="p-4 border-4 border-light-primary dark:border-dark-primary rounded-xl">
            <div className="text-4xl md:text-6xl font-bold text-light-primary dark:text-dark-primary text-center select-none">
              NodeJS
            </div>
          </div>
          <div className="p-4 border-4 border-light-primary dark:border-dark-primary rounded-xl">
            <div className="text-4xl md:text-6xl font-bold text-light-primary dark:text-dark-primary text-center select-none">
              Figma
            </div>
          </div>
          <div className="p-4 border-4 border-light-primary dark:border-dark-primary rounded-xl">
            <div className="text-4xl md:text-6xl font-bold text-light-primary dark:text-dark-primary text-center select-none">
              Adobe XD
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
