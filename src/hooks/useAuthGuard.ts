import { userAtom } from "@/atoms/user";
import { useAtomValue } from "jotai/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useAuthGuard(redirectTo: string = "/login") {
    const router = useRouter();
    const user = useAtomValue(userAtom);

    useEffect(() => {
        if (!user) {
            router.push(redirectTo);
        }
    }, [user])
}