import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  background: ${({ theme }) => theme['background']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`