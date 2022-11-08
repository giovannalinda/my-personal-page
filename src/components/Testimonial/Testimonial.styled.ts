import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  margin-top: ${theme.space[7]};
  text-align: center;
  border: 1px solid ${theme.colors.gray800};
  padding: 8rem 18rem;

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    margin: ${theme.space[7]} ${theme.space[7]};
  }

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.space[7]} ${theme.space[7]};
  }

  @media screen and (max-width: ${theme.breakpoints.smallMobile}) {
    padding: ${theme.space[7]} 0;
  }
`

export const Recommendation = styled.h1`
  font-size: ${theme.font.sizes.paragraph};
  font-weight: ${theme.font.weigths.regular};
  padding: ${theme.space[7]};
`

export const Paragraph = styled.p`
  font-size: ${theme.font.sizes.verySmall};
  font-weight: ${theme.font.weigths.medium};
  padding: ${theme.space[7]};
`

export const Title = styled.h1`
  font-size: ${theme.font.sizes.subtitle};
  font-weight: ${theme.font.weigths.regular};

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    padding-left: ${theme.space[7]};
  }
`
