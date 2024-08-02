import { idText } from 'typescript'
import Game from '../../models/Games'
import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
  games: Game[]
}

const ProdductList = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            image={game.image}
            description={game.description}
            title={game.title}
            system={game.system}
            infos={game.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProdductList
