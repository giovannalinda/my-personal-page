import { motion } from 'framer-motion'

import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.div`
  button {
    display: flex;
    background: none;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.paragraph};
    padding-right: ${theme.space[2]};
  }

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    margin-right: ${theme.space[4]};

    button {
      padding: 0;
      height: auto;
    }
  }
`

export const SelectList = styled(motion.ul)`
  display: flex;
  flex-direction: row;
`
