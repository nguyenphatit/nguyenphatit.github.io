import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative">
            <div className="absolute top-44 right-0 md:right-52 -rotate-6">
                <Image alt="nguyenphatit" priority={false} src="/profile-picture.webp" loading="lazy" width={500} height={600} />
            </div>
            <div className="absolute top-32 right-32 md:right-64">
                <Image alt="" priority={false} src="/black_tape_desktop.webp" loading="lazy" width={80} height={100} />
            </div>
            <div className="uppercase font-bold text-2xl md:text-3xl my-12 z-10  select-none">Web Developer</div>
            <div className="flex flex-col justify-center items-center font-serif text-8xl md:text-9xl uppercase relative select-none">
                <div>
                    <span className="inline-block will-change-transform bg-[url('/texture-pink.webp')] md:bg-[url('/texture-golden.webp')] transition-all duration-150 bg-cover bg-center bg-no-repeat bg-clip-text text-fill-color text-8xl md:text-[15rem]">P</span>
                    <span className="inline-block will-change-transform bg-[url('/texture-pink.webp')] md:bg-[url('/texture-golden.webp')] transition-all duration-150 bg-cover bg-center bg-no-repeat bg-clip-text text-fill-color text-8xl md:text-[15rem]">H</span>
                    <span className="inline-block will-change-transform bg-[url('/texture-pink.webp')] md:bg-[url('/texture-golden.webp')] transition-all duration-150 bg-cover bg-center bg-no-repeat bg-clip-text text-fill-color text-8xl md:text-[15rem]">A</span>
                    <span className="inline-block will-change-transform bg-[url('/texture-pink.webp')] md:bg-[url('/texture-golden.webp')] transition-all duration-150 bg-cover bg-center bg-no-repeat bg-clip-text text-fill-color text-8xl md:text-[15rem]">T</span>
                </div>
                <div>
                    <span className="inline-block will-change-transform bg-[url('/texture-pink.webp')] md:bg-[url('/texture-golden.webp')] transition-all duration-150 bg-cover bg-center bg-no-repeat bg-clip-text text-fill-color text-8xl md:text-[15rem]">N</span>
                    <span className="inline-block will-change-transform bg-[url('/texture-pink.webp')] md:bg-[url('/texture-golden.webp')] transition-all duration-150 bg-cover bg-center bg-no-repeat bg-clip-text text-fill-color text-8xl md:text-[15rem]">G</span>
                    <span className="inline-block will-change-transform bg-[url('/texture-pink.webp')] md:bg-[url('/texture-golden.webp')] transition-all duration-150 bg-cover bg-center bg-no-repeat bg-clip-text text-fill-color text-8xl md:text-[15rem]">U</span>
                    <span className="inline-block will-change-transform bg-[url('/texture-pink.webp')] md:bg-[url('/texture-golden.webp')] transition-all duration-150 bg-cover bg-center bg-no-repeat bg-clip-text text-fill-color text-8xl md:text-[15rem]">Y</span>
                    <span className="inline-block will-change-transform bg-[url('/texture-pink.webp')] md:bg-[url('/texture-golden.webp')] transition-all duration-150 bg-cover bg-center bg-no-repeat bg-clip-text text-fill-color text-8xl md:text-[15rem]">E</span>
                    <span className="inline-block will-change-transform bg-[url('/texture-pink.webp')] md:bg-[url('/texture-golden.webp')] transition-all duration-150 bg-cover bg-center bg-no-repeat bg-clip-text text-fill-color text-8xl md:text-[15rem]">N</span>
                </div>
            </div>
        </section>
    )
}
