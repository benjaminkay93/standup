import React from 'react'
import styled from 'styled-components'
import Stack from 'layouts/Stack'
import Paragraph from 'components/Paragraph'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary}
`

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.antiHighlight};
  ::visited {
    color: ${({ theme }) => theme.colors.antiHighlight}
  }
  ::active {
    color: ${({ theme }) => theme.colors.antiHighlight}
  }
  ::hover {
    color: ${({ theme }) => theme.colors.antiHighlight}
  }
`
const StyledStack = styled(Stack)`
  padding-top: ${({ theme }) => theme.spacing.base}
`

export default () => {
  return (
    <StyledStack>
      <Title>
        Standup Time!
      </Title>
      <Paragraph>
        Links to active projects:
      </Paragraph>
      <Paragraph>
        <StyledLink href="/webcore-pres">Webcore Pres</StyledLink>
      </Paragraph>
    </StyledStack>
  )
}
