"use client"

import { useQuery } from "convex/react";
import { Hero } from "./components/hero";
import { api } from "../../../convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.get);

  return (
    <main className="font-sans w-full">
      <Hero />
      {/* {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)} */}
    </main>
  );
}
