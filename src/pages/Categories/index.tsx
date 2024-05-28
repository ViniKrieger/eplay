import { Game } from '../Home'
import ProductsList from '../../components/ProductsList'

import { useEffect, useState } from 'react'

const Categories = () => {
  const [gamesAcao, setGameAcao] = useState<Game[]>([])
  const [gamesEsporte, setGameEsporte] = useState<Game[]>([])
  const [gamesSimulacao, setGamSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamLuta] = useState<Game[]>([])
  const [gamesRPG, setGamRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGameAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGameEsporte(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamRPG(res))
  }, [])
  return (
    <>
      <ProductsList games={gamesAcao} title="Ação" background="black" />
      <ProductsList games={gamesEsporte} title="Esportes" background="gray" />
      <ProductsList games={gamesLuta} title="Luta" background="black" />
      <ProductsList games={gamesRPG} title="RPG" background="gray" />
      <ProductsList
        games={gamesSimulacao}
        title="Simulação"
        background="black"
      />
    </>
  )
}

export default Categories
