import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import Game from '../../models/Games'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    infos: ['10%', 'R$200,00'],
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'Windows',
    title: 'Resident Evil 4',
    image: resident
  },
  {
    id: 2,
    category: 'RPG',
    infos: ['10%', 'R$220,00'],
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    system: 'PS5',
    title: 'Diablo IV',
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    infos: ['10%', 'R$150,00'],
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    system: 'Switch',
    title: 'Zelda',
    image: zelda
  },
  {
    id: 4,
    category: 'Aventura',
    infos: ['10%', 'R$180,00'],
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    system: 'Windows',
    title: 'Star Wars',
    image: starwars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Aventura',
    infos: ['17/08'],
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    system: 'Windows',
    title: 'Star Wars',
    image: starwars
  },
  {
    id: 6,
    category: 'Aventura',
    infos: ['17/08'],
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    system: 'Windows',
    title: 'Zelda',
    image: zelda
  },
  {
    id: 8,
    category: 'Aventura',
    infos: ['17/08'],
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    system: 'Windows',
    title: 'Zelda',
    image: zelda
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} title="Promoções" background="grey" />
    <ProductList games={emBreve} title="Em Breve" background="black" />
  </>
)

export default Home
