import { auth } from "./auth";

export { auth as proxy } from "@/auth";

export default function proxy() {
    return auth();
}
