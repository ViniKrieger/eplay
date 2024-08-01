import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do jogo </Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima
      reprehenderit, asperiores doloribus velit animi rem ex totam distinctio,
      veniam vitae, vel omnis temporibus exercitationem soluta. Voluptate minus
      sit porro!
    </Descricao>
  </Card>
)

export default Product
