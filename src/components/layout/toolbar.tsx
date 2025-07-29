"use client";

import { AnimatePresence, motion } from "motion/react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function Toolbar() {
    const scrollDirection = useScrollDirection();
    const matches = useMediaQuery('(min-width: 768px)');
    const shouldShow = scrollDirection === "up";

    return (
        <AnimatePresence>
            {shouldShow && (
                <motion.div
                    key="toolbar"
                    initial={{ y: matches ? -80 : 80, opacity: 0 }}
                    animate={{ y: matches ? 0 : 0, opacity: 1 }}
                    exit={{ y: matches ? -80 : 80, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={cn(
                        "fixed left-0 w-full z-50 px-6 py-4 transition-all duration-300",
                        "bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-2xs",
                        "top-0",
                        "bg-white/20 dark:bg-black/20 backdrop-blur-sm border"
                    )}
                >
                    <div className={cn("max-w-7xl mx-auto flex justify-between items-center", "text-foreground")}>
                        <h1 className="text-xl font-bold">NgX</h1>
                        <nav className="space-x-4 flex items-center">
                            <a className="text-sm" href="#">Home</a>
                            <a className="text-sm" href="#">Projects</a>
                            <a className="text-sm" href="#">Contact</a>
                            <ThemeToggleButton variant="circle" start="top-right" className="cursor-pointer"/>
                        </nav>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}