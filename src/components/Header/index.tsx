import { HeaderBar, Links, LinkItem, LinkCart } from './styles'

import logo from '../../assets/images/images_M35/images/logo.svg'
import carrinho from '../../assets/images/images_M35/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="logo da página" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Categorias</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - Produtos
      <img src={carrinho} alt="carrinho compras" />
    </LinkCart>
  </HeaderBar>
)

export default Header
