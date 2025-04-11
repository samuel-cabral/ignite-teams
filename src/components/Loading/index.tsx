import { useTheme } from 'styled-components/native'

import { Container, LoadIndicator } from './styles'

export function Loading() {
  const { COLORS } = useTheme()

  return (
    <Container>
      <LoadIndicator color={COLORS.GREEN_700} />
    </Container>
  )
}
