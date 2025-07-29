import { Toolbar } from "@/components/layout/toolbar";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col bg-background">
            <Toolbar />
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}