"use client"

import { userAtom } from "@/atoms/user"
import { useRouter } from "next/navigation"
import { useAtom } from "jotai/react"
import { useEffect } from "react"
import { firebaseAuth, firebaseProvider } from "@/lib/firebase"
import { signInWithPopup } from "firebase/auth"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
    const [user, setUser] = useAtom(userAtom)
    const router = useRouter()
    const matches = useMediaQuery("(min-width: 768px)")

    useEffect(() => {
        if (user) {
            router.replace("/")
        }
    }, [user])

    async function handleLogin() {
        const result = await signInWithPopup(firebaseAuth, firebaseProvider)
        const u = result.user

        if (u) {
            setUser({
                uid: u.uid,
                email: u.email || ""
            })
        }
    }

    return (
        <main
            className="w-full h-screen relative bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
        >
            <div className={cn(
                matches ? "absolute top-10 right-10 bottom-10 max-w-md mx-auto min-w-md bg-cyan-500/80 backdrop-blur-sm rounded-4xl p-4" : "w-full h-full flex flex-col items-center justify-center bg-cyan-500",
                "flex flex-col items-center justify-center"
            )}>
                <div className="flex flex-col gap-4 items-center justify-center">
                    <h1 className="text-2xl font-bold">Login</h1>
                    <Button onClick={handleLogin} className="w-full cursor-pointer">Login with Google</Button>
                </div>
            </div>
        </main>
    )
}