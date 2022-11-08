import styled from 'styled-components'
import { theme } from '~/styles'

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  margin-top: 26rem;

  @media screen and (max-width: ${theme.breakpoints.smallMobile}) {
    margin-top: 18rem;
  }
`

export const Content = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;

  @media screen and (max-width: ${theme.breakpoints.smallMobile}) {
    text-align: center;
  }
`

export const Title = styled.h1`
  font-size: ${theme.font.sizes.title};
  font-weight: ${theme.font.weigths.regular};
  max-width: 68rem;

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    font-size: ${theme.font.sizes.big};
    padding-left: 10rem;
    max-width: 94rem;
  }

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.font.sizes.title};
    margin-top: 18rem;
    text-align: center;
  }

  @media screen and (max-width: ${theme.breakpoints.smallMobile}) {
    padding-left: ${theme.space[7]};
    font-size: ${theme.font.sizes.subtitle};
  }
`

export const Paragraph = styled.p`
  color: ${theme.colors.gray400};
  padding-top: ${theme.space[7]};
  font-size: ${theme.font.sizes.verySmall};

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    font-size: ${theme.font.sizes.paragraph};
    padding-left: 10rem;
  }

  @media screen and (max-width: ${theme.breakpoints.smallMobile}) {
    padding-left: 4rem;
  }
`

export const Link = styled.a`
  color: ${theme.colors.white};
  font-size: ${theme.font.sizes.subtitle};
  text-decoration: underline;
  padding-top: ${theme.space[2]};

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    font-size: ${theme.font.sizes.subtitle};
    padding-left: 10rem;
  }

  @media screen and (max-width: ${theme.breakpoints.smallMobile}) {
    padding-left: 4rem;
  }
`

export const AboutImageWrapper = styled.div`
  position: absolute;
  right: 0;
  padding-right: 20rem;

  @media screen and (max-width: ${theme.breakpoints.smallDesktop}) {
    display: none;
  }
`
