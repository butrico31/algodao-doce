import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled from 'styled-components'
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const Section = styled.section`
  background: ${({ theme }) => theme.colors.cream};
  padding: 112px 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 88px 20px;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 52px;
  }
`

const TextBlock = styled.div``

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

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.12;
  letter-spacing: -0.02em;
  margin-bottom: 28px;
`

const Body = styled.p`
  font-family: ${({ theme }) => theme.fonts.subtitle};
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textMedium};
  line-height: 1.85;
  margin-bottom: 32px;
`

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 36px;
`

const InfoTag = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMedium};
  padding: 8px 14px;
  border: 1px solid rgba(0,0,0,0.12);
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.white};
`

const CTAWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  background: ${({ theme }) => theme.colors.orange};
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  padding: 15px 30px;
  border-radius: 3px;
  text-decoration: none;
  transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
  box-shadow: 0 4px 16px rgba(200,168,130,0.22);

  &:hover {
    background: ${({ theme }) => theme.colors.orangeDark};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(200,168,130,0.32);
  }
`

const VisualBlock = styled.div`
  position: relative;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.black}, ${({ theme }) => theme.colors.brownCoffee});
  padding: 64px 52px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background-clip: padding-box;
  width: 100%;
  box-sizing: border-box;

  &::after {
    content: '';
    position: absolute;
    right: -20px;
    bottom: -20px;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0,0,0,0.08);
    z-index: -1;
    border-radius: 1px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 42px 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 24px 18px;

    &::after {
      display: none;
    }
  }
`

const StatBox = styled.div`
  position: relative;
  z-index: 1;
  padding: 32px 24px;
  background: ${({ $dark, theme }) => $dark ? 'rgba(255,255,255,0.03)' : 'transparent'};

  .stat-num {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 3.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    line-height: 1;
    display: block;
    margin-bottom: 8px;

    span { color: ${({ theme }) => theme.colors.orange}; }
  }

  .stat-label {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.65rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    line-height: 1.5;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px 14px;

    .stat-num {
      font-size: clamp(2.2rem, 10vw, 2.8rem);
    }

    .stat-label {
      font-size: 0.58rem;
      letter-spacing: 1.4px;
    }
  }
`

const OrangeBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({ theme }) => theme.colors.orange};
`

export default function SobreSection() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const visualRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current.children, {
        scrollTrigger: { trigger: textRef.current, start: 'top 82%', toggleActions: 'play none none none' },
        opacity: 0, x: -48, duration: 0.8, stagger: 0.1, ease: 'power3.out',
      })
      gsap.from(visualRef.current, {
        scrollTrigger: { trigger: visualRef.current, start: 'top 82%', toggleActions: 'play none none none' },
        opacity: 0, x: 48, duration: 0.9, ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <Section ref={sectionRef} id="historia">
      <Container>
        <TextBlock ref={textRef}>
          <Eyebrow>Nossa história</Eyebrow>
          <Title>Uma história de amor por cada cliente</Title>
          <Body>
            Na Algodão Doce Noivas, acreditamos que cada ocasião merece um vestido especial.
            Nossas costureiras dedicadas há mais de 20 anos transformam o aluguel em uma
            experiência única — porque você merece se sentir incrível em cada momento
            marcante da sua vida?" porque você merece se sentir incrível em cada momento
            marcante da sua vida.
          </Body>
          <InfoRow>
            <InfoTag><FaMapMarkerAlt size={12} /> Itapira / SP</InfoTag>
            <InfoTag>Atendimento Estadual</InfoTag>
          </InfoRow>
          <CTAWrap>
            <CTAButton
              href="https://wa.me/5519996141072?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Algod%C3%A3o%20Doce%20Noivas."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={15} />
              Agende seu Horário
            </CTAButton>
          </CTAWrap>
        </TextBlock>

        <VisualBlock ref={visualRef}>
          <StatBox>
            <span className="stat-num">20<span>+</span></span>
            <span className="stat-label">Anos de experiência</span>
          </StatBox>
          <StatBox $dark>
            <span className="stat-num">500<span>+</span></span>
            <span className="stat-label">Vestidos no acervo</span>
          </StatBox>
          <StatBox $dark>
            <span className="stat-num">∞</span>
            <span className="stat-label">Amor por cada cliente</span>
          </StatBox>
          <StatBox>
            <span className="stat-num">4.9<span>★</span></span>
            <span className="stat-label">Avaliação média</span>
          </StatBox>
          <OrangeBar />
        </VisualBlock>
      </Container>
    </Section>
  )
}

