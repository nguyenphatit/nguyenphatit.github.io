import { ThemeToggleButton } from "@/components/ui/theme-toggle-button";

export function ThemeToggle() {
    return (
        <div className="h-full w-full flex items-center justify-center ">

            <ThemeToggleButton showLabel />
            <ThemeToggleButton showLabel variant="circle-blur" start="top-right" />
            <ThemeToggleButton showLabel variant="circle-blur" start="bottom-left" />
            <ThemeToggleButton showLabel variant="circle-blur" start="bottom-right" />

            <ThemeToggleButton showLabel variant="circle" start="top-left" />
            <ThemeToggleButton showLabel variant="circle" start="top-right" />
            <ThemeToggleButton showLabel variant="circle" start="bottom-left" />
            <ThemeToggleButton showLabel variant="circle" start="bottom-right" />

            <ThemeToggleButton showLabel variant="circle" start="center" />
        </div>
    )
}