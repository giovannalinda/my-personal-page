import styled from 'styled-components'
import { motion } from 'framer-motion'

import { theme } from '~/styles'

export const Overlay = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: right;
  align-items: right;
  overflow: hidden;
`

export const Container = styled(motion.div)`
  background: ${theme.colors.black};
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  color: ${theme.colors.gray800};
  padding: 0 ${theme.space[5]} ${theme.space[5]} ${theme.space[7]};
`

export const CloseButton = styled.button`
  display: flex;
  background: none;
  position: fixed;
  color: ${theme.colors.white};
  top: 4.4rem;
  align-items: center;
  left: 10rem;
  z-index: 3;
`

export const Content = styled.div``
