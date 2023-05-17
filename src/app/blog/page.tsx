import AnimationTextCharacter from "@/components/animation/animation-text-character";
import { DEV_TO_API } from "@/common/constants";
import Image from "next/image";

async function getData() {
  const res = await fetch(`${DEV_TO_API}articles?username=nguyenphatit`, { next: { revalidate: 10 }});

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const articles = await getData();
  return (
    <main className="bg-light text-light-secondary dark:bg-dark dark:text-dark-secondary min-h-screen">
      <section className="min-h-screen">
        <div className="container mx-auto pt-32">
          <h1 className="font-heading text-9xl text-light-primary dark:text-dark-primary mb-12 px-4 md:px-0 text-center">
            <AnimationTextCharacter text="Blog" />
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-0">
            {articles &&
              articles.map((article: any) => {
                return (
                  <a href={article?.url} target="_blank" key={article?.id}>
                    <div
                      className="p-6 border-4 border-light dark:border-dark hover:border-light-primary dark:hover:border-dark-secondary cursor-pointer rounded-2xl transition-all duration-200"
                    >
                      <Image
                        src={article?.social_image}
                        alt=""
                        width={300}
                        height={300}
                        className="w-full rounded-2xl"
                      />
                      <h1 className="text-light-primary dark:text-dark-primary text-4xl font-bold my-4">
                        {article?.title}
                      </h1>
                      <p className="text-light-secondary dark:text-dark-secondary">
                        {article?.description}
                      </p>
                      <div className="pt-10">
                        {article?.tag_list?.map((tag: string) => (
                          <div
                            key={tag}
                            className="pl-2 first:pl-0 capitalize inline-block"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </a>
                );
              })}
          </div>
        </div>
      </section>
    </main>
  );
}
