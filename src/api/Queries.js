import { gql } from '@apollo/client'

/* Mutations */
export const SET_PLAYER_ONE_CONNECTED = gql`
  mutation SetPlayerOneConnected {
    update_game(
      where: { id: { _eq: "660a52e9-dc1b-4d93-a218-1dc9d283e0f4" } }
      _set: { player1_connected: false }
    ) {
      returning {
        id
      }
    }
  }
`
export const SET_DICE_NUMBER = gql`
  mutation SetDiceNumber($diceNumber: Int, $index: Int, $id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: { player1_tile1: $diceNumber }
    ) {
      returning {
        id
        player1_tile2
      }
    }
  }
`
export const SET_DICE_NUMBER_TWO = gql`
  mutation SetDiceNumber($diceNumber: Int, $index: Int, $id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: { player1_tile2: $diceNumber }
    ) {
      returning {
        id
        player1_tile2
      }
    }
  }
`

export const SET_DICE_NUMBER_THREE = gql`
  mutation SetDiceNumber($diceNumber: Int, $index: Int, $id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: { player1_tile3: $diceNumber }
    ) {
      returning {
        id
        player1_tile3
      }
    }
  }
`
export const SET_DICE_NUMBER_FOUR = gql`
  mutation SetDiceNumber($diceNumber: Int, $index: Int, $id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: { player1_tile4: $diceNumber }
    ) {
      returning {
        id
        player1_tile4
      }
    }
  }
`
export const SET_DICE_NUMBER_FIVE = gql`
  mutation SetDiceNumber($diceNumber: Int, $index: Int, $id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: { player1_tile5: $diceNumber }
    ) {
      returning {
        id
        player1_tile5
      }
    }
  }
`
export const SET_DICE_NUMBER_SIX = gql`
  mutation SetDiceNumber($diceNumber: Int, $index: Int, $id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: { player1_tile6: $diceNumber }
    ) {
      returning {
        id
        player1_tile6
      }
    }
  }
`

export const SET_DICE_NUMBER_SEVEN = gql`
  mutation SetDiceNumber($diceNumber: Int, $index: Int, $id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: { player1_tile7: $diceNumber }
    ) {
      returning {
        id
        player1_tile7
      }
    }
  }
`
export const SET_DICE_NUMBER_EIGHT = gql`
  mutation SetDiceNumber($diceNumber: Int, $index: Int, $id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: { player1_tile8: $diceNumber }
    ) {
      returning {
        id
        player1_tile8
      }
    }
  }
`
export const SET_DICE_NUMBER_NINE = gql`
  mutation SetDiceNumber($diceNumber: Int, $index: Int, $id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: { player1_tile9: $diceNumber }
    ) {
      returning {
        id
        player1_tile9
      }
    }
  }
`

export const SET_DICE_NUMBER_TEN = gql`
  mutation SetDiceNumber($diceNumber: Int, $index: Int, $id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: { player2_tile1: $diceNumber }
    ) {
      returning {
        id
        player2_tile1
      }
    }
  }
`

export const SET_DICE_NUMBER_ELEVEN = gql`
  mutation SetDiceNumber($diceNumber: Int, $index: Int, $id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: { player2_tile2: $diceNumber }
    ) {
      returning {
        id
        player2_tile2
      }
    }
  }
`

export const SET_DICE_NUMBER_TWELVE = gql`
  mutation SetDiceNumber($diceNumber: Int, $index: Int, $id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: { player2_tile3: $diceNumber }
    ) {
      returning {
        id
        player2_tile3
      }
    }
  }
`

export const SET_DICE_NUMBER_THIRTEEN = gql`
  mutation SetDiceNumber($diceNumber: Int, $index: Int, $id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: { player2_tile4: $diceNumber }
    ) {
      returning {
        id
        player2_tile4
      }
    }
  }
`

export const SET_DICE_NUMBER_FOURTEEN = gql`
  mutation SetDiceNumber($diceNumber: Int, $index: Int, $id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: { player2_tile5: $diceNumber }
    ) {
      returning {
        id
        player2_tile5
      }
    }
  }
`

export const SET_DICE_NUMBER_FIFTEEN = gql`
  mutation SetDiceNumber($diceNumber: Int, $index: Int, $id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: { player2_tile6: $diceNumber }
    ) {
      returning {
        id
        player2_tile6
      }
    }
  }
`

export const SET_DICE_NUMBER_SIXTEEN = gql`
  mutation SetDiceNumber($diceNumber: Int, $index: Int, $id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: { player2_tile7: $diceNumber }
    ) {
      returning {
        id
        player2_tile7
      }
    }
  }
`

export const SET_DICE_NUMBER_SEVENTEEN = gql`
  mutation SetDiceNumber($diceNumber: Int, $index: Int, $id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: { player2_tile8: $diceNumber }
    ) {
      returning {
        id
        player2_tile8
      }
    }
  }
`

export const SET_DICE_NUMBER_EIGHTEEN = gql`
  mutation SetDiceNumber($diceNumber: Int, $index: Int, $id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: { player2_tile9: $diceNumber }
    ) {
      returning {
        id
        player2_tile9
      }
    }
  }
`
export const SET_GAME_OVER = gql`
  mutation SetGameOver($id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: {
        isGameOver: true
      }
    ) {
      returning {
        id
        isGameOver
      }
    }
  }
`

export const RESET_GAME = gql`
  mutation SetDiceNumber($id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: {
        player1_tile1: 0
        player1_tile2: 0
        player1_tile3: 0
        player1_tile4: 0
        player1_tile5: 0
        player1_tile6: 0
        player1_tile7: 0
        player1_tile8: 0
        player1_tile9: 0
        player2_tile1: 0
        player2_tile2: 0
        player2_tile3: 0
        player2_tile4: 0
        player2_tile5: 0
        player2_tile6: 0
        player2_tile7: 0
        player2_tile8: 0
        player2_tile9: 0
        isGameOver: false
        playerOneTurn: true
        playerTwoTurn: false
      }
    ) {
      returning {
        id
        player1_tile1
        player1_tile2
        player1_tile3
        player1_tile4
        player1_tile5
        player1_tile6
        player1_tile7
        player1_tile8
        player1_tile9
        player2_tile1
        player2_tile2
        player2_tile3
        player2_tile4
        player2_tile5
        player2_tile6
        player2_tile7
        player2_tile8
        player2_tile9
        isGameOver
        playerOneTurn
        playerTwoTurn
        rolled_number
        player1
        player2
      }
    }
  }
`

/* Subscriptions */
export const GET_GAME = gql`
  subscription GetGame {
    game {
      id
      player1
      player2
      player1_connected
      player1_tile1
      player1_tile2
      player1_tile3
      player1_tile4
      player1_tile5
      player1_tile6
      player1_tile7
      player1_tile8
      player1_tile9
      player2_connected
      player2_tile1
      player2_tile2
      player2_tile3
      player2_tile4
      player2_tile5
      player2_tile6
      player2_tile7
      player2_tile8
      player2_tile9
      isGameOver
      playerOneTurn
      playerTwoTurn
      randomNumber
      rolled_number
    }
  }
`

export const CREATE_GAME = gql`
  mutation createNewGame($id: uuid, $uid: uuid) {
    insert_game(
      objects: {
        id: $id
        player1: $uid
        player1_connected: true
        player1_tile1: 0
        player1_tile2: 0
        player1_tile3: 0
        player1_tile4: 0
        player1_tile5: 0
        player1_tile6: 0
        player1_tile7: 0
        player1_tile8: 0
        player1_tile9: 0
        player2_connected: false
        player2_tile1: 0
        player2_tile2: 0
        player2_tile3: 0
        player2_tile4: 0
        player2_tile5: 0
        player2_tile6: 0
        player2_tile7: 0
        player2_tile8: 0
        player2_tile9: 0
        isGameOver: false
      }
    ) {
      returning {
        id
        player1
        player1_connected
        player1_tile1
        player1_tile2
        player1_tile3
        player1_tile4
        player1_tile5
        player1_tile6
        player1_tile7
        player1_tile8
        player1_tile9
        player2_connected
        player2_tile1
        player2_tile2
        player2_tile3
        player2_tile4
        player2_tile5
        player2_tile6
        player2_tile7
        player2_tile8
        player2_tile9
        isGameOver
        rolled_number
      }
    }
  }
`

export const SWITCH_TURN = gql`
  mutation SetTurn($id: uuid, $playerOneTurn: Boolean, $playerTwoTurn: Boolean) {
    update_game(
      where: { id: { _eq: $id } }
      _set: {
        playerOneTurn: $playerOneTurn
        playerTwoTurn: $playerTwoTurn
        rolled_number: null
      }
    ) {
      returning {
        id
        playerOneTurn
        playerTwoTurn
      }
    }
  }
`

export const RANDOM_NUMBER = gql`
  mutation SetTurn($randomNumber: Int, $id: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: {
        randomNumber: $randomNumber
      }
    ) {
      returning {
        id
        randomNumber
      }
    }
  }
`
export const CONNECT_PLAYER_TWO = gql`
  mutation SetDiceNumber($id: uuid, $uid: uuid) {
    update_game(
      where: { id: { _eq: $id } }
      _set: { 
        player2: $uid 
        player2_connected: true
      }
    ) {
      returning {
        id
        player2_tile7
      }
    }
  }
`

export const SET_ROLLED_NUMBER = gql`
  mutation SetDiceNumber($id: uuid, $number: Int) {
    update_game(
      where: { id: { _eq: $id } }
      _set: { 
        rolled_number: $number 
      }
    ) {
      returning {
        id
      }
    }
  }
`
/* Queries */
