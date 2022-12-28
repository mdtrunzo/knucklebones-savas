import { useState } from 'react'
import { ApolloProvider } from '@apollo/client'
import { createApolloClientWithSubscription } from './services/GameService'
import { DataProvider } from './context/DataContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../src/styles/styles'
import Homepage from './pages/Homepage'
import Main from './components/Main'
import CreateGameModal from './pages/CreateGameModal'
import GameOverModal from './pages/GameOverModal'
import RedirectUser from './pages/RedirectUser'

function App() {
  const [client] = useState(createApolloClientWithSubscription())

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/game-started" element={<RedirectUser />} />
          <Route
            path="/game/:id"
            element={
              <DataProvider>
                <CreateGameModal />
                <GameOverModal />
                <Main client={client} />
              </DataProvider>
            }
          />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default App
