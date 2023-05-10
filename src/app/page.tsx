import HeadApp from "@/components/common/headApp";
import IncreaseTextEffect from "@/components/features/IncreaseTextEffect";
import Scene from "@/components/features/Scene";

export default function Home() {
  return (
    <>
      <HeadApp title="nguyenphatit" />
      <div className="relative z-[1]">
        <IncreaseTextEffect
          text="Hello world!"
          className="text-9xl font-heading text-gray-950 font-bold fixed bottom-4 right-4"
        />
      </div>
      <Scene />
    </>
  );
}
