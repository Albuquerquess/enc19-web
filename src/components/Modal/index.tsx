import React from 'react';

import { ModalContainer } from './styles';

interface modalProps {
    image: string[];
    title: string;
    description: string;
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<modalProps> = ({active, setActive, image, title, description}) => {
  React.useEffect(() => {
    if (active) {
      document.getElementsByTagName('body')[0].setAttribute('class', 'on-modal-active')
    }else {
      document.getElementsByTagName('body')[0].classList.remove('on-modal-active')
    }
  }, [active])

  return <ModalContainer active={active} onClick={() => setActive(false)} id="modal">
      <div className="modal-wrapper">

      <img src={image[1]} alt="Falha ao carregar arquivo de imagem"/>

      <div id="modal-content">
          <p id="modal-content-title" >{title}</p>
          <p id="modal-content-desc">{description}</p>
      </div>
      </div>
  </ModalContainer>;
}

export default Modal;