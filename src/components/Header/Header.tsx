import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { AiOutlineAlignRight } from 'react-icons/ai'
import { Sidebar } from '../Sidebar/Sidebar'

import * as S from './Header.styled'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenSidebar() {
    setIsOpen(true)
  }

  function handleCloseSidebar() {
    setIsOpen(false)
  }
  return (
    <S.Header>
      <S.List>
        <S.ListItem>
          <h1>Giovanna</h1>
          <p>Souza</p>
        </S.ListItem>
        <S.ListItem>
          <small>PT EN</small>
        </S.ListItem>
        <S.ListItem>
          <S.OpenSidebarButton>
            <AiOutlineAlignRight size={24} onClick={handleOpenSidebar} />
          </S.OpenSidebarButton>

          <AnimatePresence>
            {isOpen && <Sidebar onClose={handleCloseSidebar} />}
          </AnimatePresence>
        </S.ListItem>
      </S.List>
    </S.Header>
  )
}
