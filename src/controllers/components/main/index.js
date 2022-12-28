import { useContext, useEffect } from 'react'
import useSession from "../../session"
import DataContext from '../../../context/DataContext'
import { CONNECT_PLAYER_TWO } from '../../../api/Queries'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom';

const useMainComponent = () => {
    const { id, finalBoard } = useContext(DataContext)
    const { uid } = useSession()
    const [handleMutation] = useMutation(CONNECT_PLAYER_TWO)
    const navigate = useNavigate();

    useEffect(() => {
        if(finalBoard && finalBoard.player1 !== uid && !finalBoard.player2) {
            handleMutation({ variables: { id, uid } })
        }
        else if(finalBoard.player2 && finalBoard.player1 !== uid && finalBoard.player2 !== uid) {
            navigate('/game-started')
        }
    }, [finalBoard])
}

export default useMainComponent
