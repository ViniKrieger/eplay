import Section from '../Section'

import { Items, Item, Action, Modal, ModalContent } from './styles'

import zelda from '../../assets/images/images_M35/images/zelda.png'
import play from '../../assets/images/images_M35/images/play.png'
import zoom from '../../assets/images/images_M35/images/zoom.png'
import spiderman from '../../assets/images/images_M35/images/banner-homem-aranha.png'
import hogwarts from '../../assets/images/images_M35/images/fundo_hogwarts.png'
import fechar from '../../assets/images/images_M35/images/fechar.png'
import { useState } from 'react'
import { url } from 'inspector'

interface GalleryItem {
  type: 'imagem' | 'video'
  url: string
}

const mok: GalleryItem[] = [
  {
    type: 'imagem',
    url: spiderman
  },
  {
    type: 'imagem',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=GirLirXJoKwDhZF5'
  }
]

type Props = {
  defaultCover: string
  name: string
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setMOdal] = useState<ModalState>({
    isVisible: false,
    type: 'imagem',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'imagem') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'imagem') return zoom
    return play
  }

  const closeModal = () => {
    setMOdal({
      isVisible: false,
      type: 'imagem',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mok.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setMOdal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para ampliar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Icone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'imagem' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
