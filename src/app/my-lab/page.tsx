"use client";

import Clock from "@/components/features/Clock";
import { motion } from "framer-motion";

export default function Page() {
    return (
        <main className="bg-light text-light-secondary dark:bg-dark dark:text-dark-secondary min-h-screen">
            <section className="min-h-screen">
                <div className="container mx-auto pt-32">
                    <div className="text-center select-none">
                        <motion.span
                            initial={{ y: 50, scale: 0.2 }}
                            animate={{
                                y: 0,
                                scale: 1,
                            }}
                            whileHover={{ scale: 1.2 }}
                            className="material-icons text-light-primary dark:text-dark-primary text-9xl relative"
                        >
                            science
                        </motion.span>
                    </div>
                    <h1 className="font-heading text-9xl text-light-primary dark:text-dark-primary px-4 md:px-0 text-center select-none">
                        Welcome to my Lab
                    </h1>
                    <h2 className="text-3xl opacity-50 text-light-secondary dark:text-dark-secondary mb-12 px-4 md:px-0 text-center">
                        A place to discover new technologies
                    </h2>
                    <div className="py-24">
                        {/* <Sheet /> */}
                        <Clock />
                    </div>  
                </div>
            </section>
        </main>
    )
}
