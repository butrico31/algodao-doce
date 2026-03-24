import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled from 'styled-components'
import { FaCut, FaHeart, FaGem } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const Section = styled.section`
  background: ${({ theme }) => theme.colors.white};
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
  margin-bottom: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 52px;
  }
`

const TitleBlock = styled.div``

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
  margin-bottom: 16px;

  &::before {
    content: '';
    display: block;
    width: 28px;
    height: 1.5px;
    background: ${({ theme }) => theme.colors.orange};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    letter-spacing: 2.4px;
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
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textMedium};
  line-height: 1.8;
  max-width: 400px;
  align-self: end;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`

const Divider = styled.div`
  height: 1px;
  background: rgba(0,0,0,0.06);
  margin-bottom: 72px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: rgba(0,0,0,0.06);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1px;
  }
`

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 48px 40px;
  position: relative;
  transition: ${({ theme }) => theme.transition};
  will-change: transform;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.orange};
    transition: width 0.45s ease;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.cream};
    &::after { width: 100%; }
  }
`

const CardNum = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3.5rem;
  font-weight: 700;
  color: rgba(0,0,0,0.04);
  line-height: 1;
  display: block;
  margin-bottom: 24px;
  font-style: italic;
`

const IconWrap = styled.div`
  width: 44px;
  height: 44px;
  background: ${({ theme }) => theme.colors.orange};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: #fff;
  border-radius: 3px;
  margin-bottom: 20px;
`

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 12px;
  line-height: 1.2;
  letter-spacing: -0.01em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.35rem;
    line-height: 1.25;
  }
`

const CardText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMedium};
  line-height: 1.8;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.05rem;
    line-height: 1.75;
  }
`

const cards = [
  {
    num: '01',
    icon: <FaCut />,
    title: 'Costureiras Experientes',
    text: 'Mais de 30 anos de dedicação ao ofício, garantindo o ajuste perfeito para o seu corpo e ocasião.',
  },
  {
    num: '02',
    icon: <FaHeart />,
    title: 'Atendimento Personalizado',
    text: 'Cada cliente é única. Noivas com hora marcada, demais clientes com acolhimento imediato e carinhoso.',
  },
  {
    num: '03',
    icon: <FaGem />,
    title: 'Acervo Exclusivo',
    text: 'Centenas de vestidos em diferentes cores, tamanhos e estilos para casamentos, formaturas, debutantes e mais.',
  },
]

export default function DiferenciaisSection() {
  const sectionRef = useRef(null)
  const topRef = useRef(null)
  const cardsRef = useRef([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const topChildren = Array.from(topRef.current?.children || [])
      const cards = cardsRef.current.filter(Boolean)

      if (topChildren.length) {
        gsap.fromTo(
          topChildren,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: topRef.current,
              start: 'top 82%',
              once: true,
            },
          },
        )
      }

      if (cards.length) {
        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: 48 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cards[0],
              start: 'top 82%',
              once: true,
            },
          },
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <Section ref={sectionRef} id="diferenciais">
      <Container>
        <TopRow ref={topRef}>
          <TitleBlock>
            <Eyebrow>Por que nos escolher</Eyebrow>
            <SectionTitle>O que nos torna<br />especiais</SectionTitle>
          </TitleBlock>
          <SectionDesc>
            Décadas de experiência, amor pelo que fazemos e a atenção que cada cliente merece.
          </SectionDesc>
        </TopRow>
        <Divider />
        <Grid>
          {cards.map((card, i) => (
            <Card key={card.title} ref={(el) => (cardsRef.current[i] = el)}>
              <CardNum>{card.num}</CardNum>
              <IconWrap>{card.icon}</IconWrap>
              <CardTitle>{card.title}</CardTitle>
              <CardText>{card.text}</CardText>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

gsap.registerPlugin(ScrollTrigger)

