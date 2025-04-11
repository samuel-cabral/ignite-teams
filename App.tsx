import { Loading } from '@components/Loading'
import {
  Roboto_400Regular as RobotoRegular,
  Roboto_700Bold as RobotoBold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { Groups } from '@screens/Groups'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'

import theme from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ RobotoRegular, RobotoBold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  )
}
