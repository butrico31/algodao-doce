import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled from 'styled-components'

gsap.registerPlugin(ScrollTrigger)

const Section = styled.section`
  background: ${({ theme }) => theme.colors.cream};
  padding: 112px 32px;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: end;
  margin-bottom: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 44px;
  }
`

const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 3.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.orange};
  margin-bottom: 14px;

  &::before {
    content: '';
    display: block;
    width: 28px;
    height: 1.5px;
    background: ${({ theme }) => theme.colors.orange};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    letter-spacing: 2.5px;
  }
`

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.12;
  letter-spacing: -0.02em;
`

const SectionDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.subtitle};
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.textMedium};
  line-height: 1.8;
  align-self: end;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.lightGray};
  aspect-ratio: ${({ $ratio }) => $ratio};
  will-change: transform;

  &:nth-child(1) { grid-row: span 2; aspect-ratio: unset; min-height: 460px; }

  .inner-label {
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1rem;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    z-index: 2;
  }

  .inner-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(22,11,8,0.12) 0%, rgba(22,11,8,0.4) 100%);
    transition: background 0.4s ease;
    z-index: 1;
  }

  &:hover .inner-overlay {
    background: linear-gradient(180deg, rgba(22,11,8,0.2) 0%, rgba(22,11,8,0.52) 100%);
  }

  &:hover .inner-img {
    transform: scale(1.04);
  }

  .inner-img {
    position: absolute;
    inset: 0;
    background-image: ${({ $image }) => `url(${$image})`};
    background-size: cover;
    background-position: top ${({ $focusY = '18%' }) => $focusY};
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    &:nth-child(1) { min-height: 260px; }

    .inner-label {
      font-size: 1rem;
      letter-spacing: 2px;
    }
  }
`

const items = [
  { label: 'Vestido Noiva', ratio: '3/4', image: '/noiva-ez017.jpg', focusY: '14%' },
  { label: 'Vestido Formatura', ratio: '4/3', image: '/vestido_festa_azul.jpg', focusY: '18%' },
  { label: 'Vestido Debutante', ratio: '4/3', image: '/vestido_festa_rosa-bebe.jpg', focusY: '16%' },
  { label: 'Vestido Social', ratio: '4/3', image: '/noiva-ez002.jpg', focusY: '20%' },
  { label: 'Vestido Madrinha', ratio: '4/3', image: '/vestido-madrinha.webp', focusY: '18%' },
]

export default function GaleriaSection() {
  const sectionRef = useRef(null)
  const topRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(topRef.current.children, {
        scrollTrigger: { trigger: topRef.current, start: 'top 82%', toggleActions: 'play none none none' },
        opacity: 0, y: 36, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      })
      gsap.from(Array.from(gridRef.current.children), {
        scrollTrigger: { trigger: gridRef.current, start: 'top 82%', toggleActions: 'play none none none' },
        opacity: 0, y: 40, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <Section ref={sectionRef} id="acervo">
      <Container>
        <TopRow ref={topRef}>
          <div>
            <Eyebrow>Nosso acervo</Eyebrow>
            <SectionTitle>Vestidos para cada sonho</SectionTitle>
          </div>
          <SectionDesc>
            Uma curadoria especial de peças que transformam momentos em memórias inesquecíveis.
          </SectionDesc>
        </TopRow>
        <Grid ref={gridRef}>
          {items.map((item, i) => (
            <GalleryItem key={i} $ratio={item.ratio} $image={item.image} $focusY={item.focusY}>
              <div className="inner-img" />
              <div className="inner-overlay" />
              <span className="inner-label">{item.label}</span>
            </GalleryItem>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

gsap.registerPlugin(ScrollTrigger)

