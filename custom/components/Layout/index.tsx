import React from 'react'
import styled from 'styled-components'

import { MEDIA } from 'const'

// Layout: Subcomponents
import Header from 'components/Layout/Header'
import Footer from 'components/Layout/Footer'

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-flow: column wrap;

  main {
    flex: 0 1 auto;
    margin: 2.4rem auto 5rem;
    width: auto;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 1.3rem;
    line-height: 1.2;

    @media ${MEDIA.mobile} {
      width: 100%;
    }

    > section {
      width: 100%;

      @media ${MEDIA.mobile} {
        overflow: initial;
      }
    }

    @media ${MEDIA.mobile} {
      margin: 1.6rem auto 3.2rem;
    }
  }
`

const navigation = [
  {
    label: 'Trade',
    to: '/trade',
    order: 1,
  },
  {
    label: 'Balances',
    to: '/wallet',
    order: 4,
    withPastLocation: true,
  },
]

const Layout: React.FC = ({ children }) => (
  <Wrapper>
    <Header navigation={navigation} />
    <main>{children}</main>
    <Footer />
  </Wrapper>
)

export default Layout
