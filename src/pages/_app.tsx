import { AppTemplate } from '@/components/AppTemplate'
import { theme } from '@/styles/themes/dark'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppTemplate>
        <Component {...pageProps} />
      </AppTemplate>
    </ThemeProvider>
  )
}
