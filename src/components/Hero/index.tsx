import bannerImg from '../../assets/images/images_M35/images/fundo_hogwarts.png'
import Button from '../Button'
import Tag from '../Tag'

import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,0</span>
          Por R$ 190,0
        </p>
        <Button
          variant="primary"
          title="Cliqui aqui para adiciona ao carrinho"
          type="button"
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
