import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
}

const ProdductList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        <Product
          category="Ação"
          image="//placehold.it/222x250"
          description="teste"
          title="Nome do jogo"
          system="Windows"
          infos={['-10%', 'R$200']}
        />
        <Product
          category="Ação"
          image="//placehold.it/222x250"
          description="teste"
          title="Nome do jogo"
          system="Windows"
          infos={['-10%', 'R$200']}
        />
        <Product
          category="Ação"
          image="//placehold.it/222x250"
          description="teste"
          title="Nome do jogo"
          system="Windows"
          infos={['-10%', 'R$200']}
        />
        <Product
          category="Ação"
          image="//placehold.it/222x250"
          description="teste"
          title="Nome do jogo"
          system="Windows"
          infos={['-10%', 'R$200']}
        />
      </List>
    </div>
  </Container>
)

export default ProdductList
