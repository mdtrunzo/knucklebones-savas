import useSession from "./session";
import useComponents from "./components";

const useHooks = () => {
    return {
        useSession,
        useComponents
    }
}

export default useHooks