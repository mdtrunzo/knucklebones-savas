import { v4 as getUid } from 'uuid'

const useSession = () => {
    if(!localStorage.getItem('knuck')) {
        localStorage.setItem('knuck', getUid())
    }
    const uid = localStorage.getItem('knuck');

    return {
        uid
    }
}

export default useSession