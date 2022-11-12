import styled from 'styled-components'
import { motion } from 'framer-motion'

import { theme } from '~/styles'

export const Overlay = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.8);
  overflow: hidden;
`

export const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  flex-direction: column;
  overflow: auto;
  background: ${theme.colors.black};
  width: 100%;
  height: 100%;
  color: ${theme.colors.gray800};
  gap: ${theme.space[8]};
  padding: ${theme.space[8]};
`

export const CloseButton = styled.button`
  display: flex;
  width: max-content;
  background: none;
  color: ${theme.colors.white};
  align-items: center;
  z-index: 3;

  &:hover {
    color: ${theme.colors.gray400};
  }
`
