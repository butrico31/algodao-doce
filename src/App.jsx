import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import GlobalStyles from './styles/GlobalStyles'

import Navbar from './components/NavBar'
import Hero from './components/Hero'
import DiferenciaisSection from './components/DiferenciaisSection'
import OcasioesSections from './components/OcasioesSections'
import GaleriaSection from './components/GaleriaSection'
import DepoimentosSection from './components/DepoimentosSection'
import SobreSection from './components/SobreSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <DiferenciaisSection />
        <OcasioesSections />
        <GaleriaSection />
        <DepoimentosSection />
        <SobreSection />
        <CTASection />
      </main>
      <Footer />
    </ThemeProvider>
  )
}