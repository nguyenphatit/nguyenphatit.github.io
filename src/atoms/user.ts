import { atomWithStorage } from "jotai/utils";

export type User = {
    uid: string;
    email: string
} | null;

export const userAtom = atomWithStorage<User>("user", null);