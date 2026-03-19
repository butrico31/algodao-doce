import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled from 'styled-components'

gsap.registerPlugin(ScrollTrigger)

const Section = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: 112px 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 88px 20px;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 28px;
  }
`

const LeftCol = styled.div``

const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.7rem;
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
`

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.12;
  letter-spacing: -0.02em;
  margin-bottom: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 28px;
  }
`

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  background: rgba(0,0,0,0.06);
`

const TestimonialCard = styled.button`
  background: ${({ $active, theme }) => $active ? theme.colors.black : theme.colors.white};
  padding: 28px 32px;
  text-align: left;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
  width: 100%;

  p:first-child {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: ${({ $active, theme }) => $active ? theme.colors.orange : theme.colors.textMedium};
    margin-bottom: 6px;
    transition: color 0.3s ease;
  }

  p:last-child {
    font-family: ${({ theme }) => theme.fonts.subtitle};
    font-size: 0.92rem;
    color: ${({ $active, theme }) => $active ? 'rgba(255,255,255,0.7)' : theme.colors.textMedium};
    line-height: 1.6;
    font-style: italic;
    transition: color 0.3s ease;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 22px 18px;

    p:first-child {
      font-size: 0.68rem;
      letter-spacing: 1.2px;
    }

    p:last-child {
      white-space: normal;
      overflow: visible;
      text-overflow: unset;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`

const RightCol = styled.div`
  position: relative;
`

const QuoteBlock = styled.div`
  background: ${({ theme }) => theme.colors.black};
  padding: 52px 48px;
  position: relative;
  min-height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::before {
    content: '\u201c';
    position: absolute;
    top: 24px;
    left: 40px;
    font-size: 6rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors.orange};
    opacity: 0.35;
    font-family: Georgia, serif;
    pointer-events: none;
    user-select: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 300px;
    padding: 44px 18px 38px;

    &::before {
      top: 10px;
      left: 16px;
      font-size: 4.2rem;
    }
  }
`

const QuoteText = styled.p`
  font-family: ${({ theme }) => theme.fonts.subtitle};
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: rgba(255,255,255,0.9);
  line-height: 1.75;
  font-style: italic;
  margin-bottom: 28px;
  position: relative;
  z-index: 1;
  overflow-wrap: anywhere;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 20px;
  }
`

const QuoteAuthor = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.orange};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.66rem;
    letter-spacing: 1.4px;
  }
`

const OrangeAccent = styled.div`
  height: 3px;
  background: ${({ theme }) => theme.colors.orange};
  margin-top: 0;
`

const testimonials = [
  {
    author: 'Maria L. · Noiva 2024',
    text: 'Encontrei o vestido dos meus sonhos para o casamento! As costureiras fizeram ajustes perfeitos e me senti princesa no meu grande dia.',
  },
  {
    author: 'Beatriz A. · Formanda',
    text: 'Atendimento incrível, super acolhedor. O vestido da minha formatura ficou lindo! Toda a equipe me recebeu com muito carinho.',
  },
  {
    author: 'Sofia M. · Debutante',
    text: 'Fui para minha debutante com um vestido deslumbrante. Toda atenção foi para mim — me senti realmente especial e única!',
  },
]

export default function DepoimentosSection() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const quoteRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current.children, {
        scrollTrigger: { trigger: leftRef.current, start: 'top 82%', toggleActions: 'play none none none' },
        opacity: 0, x: -40, duration: 0.75, stagger: 0.12, ease: 'power3.out',
      })
      gsap.from(quoteRef.current, {
        scrollTrigger: { trigger: quoteRef.current, start: 'top 82%', toggleActions: 'play none none none' },
        opacity: 0, x: 40, duration: 0.85, ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleChange = (i) => {
    gsap.to(quoteRef.current, {
      opacity: 0, y: -10, duration: 0.18, ease: 'power2.in',
      onComplete: () => {
        setActive(i)
        gsap.to(quoteRef.current, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' })
      },
    })
  }

  return (
    <Section ref={sectionRef} id="depoimentos">
      <Container>
        <Layout>
          <LeftCol ref={leftRef}>
            <Eyebrow>O que dizem nossas clientes</Eyebrow>
            <SectionTitle>Histórias que nos enchem de orgulho</SectionTitle>
            <Cards>
              {testimonials.map((t, i) => (
                <TestimonialCard
                  key={i}
                  $active={i === active}
                  onClick={() => handleChange(i)}
                >
                  <p>{t.author}</p>
                  <p>{t.text}</p>
                </TestimonialCard>
              ))}
            </Cards>
          </LeftCol>

          <RightCol>
            <QuoteBlock ref={quoteRef}>
              <QuoteText>{testimonials[active].text}</QuoteText>
              <QuoteAuthor>-" {testimonials[active].author}</QuoteAuthor>
            </QuoteBlock>
            <OrangeAccent />
          </RightCol>
        </Layout>
      </Container>
    </Section>
  )
}

