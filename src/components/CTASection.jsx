import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled from 'styled-components'
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const Section = styled.section`
  background: ${({ theme }) => theme.colors.black};
  padding: 112px 32px;
  position: relative;
  overflow: hidden;
`

const Noise = styled.div`
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(255,255,255,0.012) 2px,
    rgba(255,255,255,0.012) 4px
  );
  pointer-events: none;
  z-index: 0;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
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

const Headline = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 4vw, 3.4rem);
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
`

const Sub = styled.p`
  font-family: ${({ theme }) => theme.fonts.subtitle};
  font-size: 1.05rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.75;
  margin-bottom: 12px;
`

const Schedule = styled.p`
  font-size: 0.7rem;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.3);
  font-weight: 600;
`

const ActionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const BtnPrimary = styled.a`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 16px;
  background: ${({ theme }) => theme.colors.orange};
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 600;
  padding: 20px 32px;
  border-radius: 3px;
  text-decoration: none;
  transition: background 0.25s, transform 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.orangeDark};
    transform: translateX(4px);
  }

  svg { flex-shrink: 0; font-size: 1.3rem; align-self: center; }

  .btn-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .btn-sub {
    font-size: 0.7rem;
    font-weight: 400;
    opacity: 0.75;
  }
`

const BtnSecondary = styled.a`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 16px;
  background: rgba(255,255,255,0.05);
  color: rgba(255,255,255,0.75);
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  padding: 20px 32px;
  border-radius: 3px;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.1);
  transition: background 0.25s, color 0.25s, transform 0.2s;

  &:hover {
    background: rgba(255,255,255,0.08);
    color: #fff;
    transform: translateX(4px);
  }

  svg { flex-shrink: 0; font-size: 1.3rem; align-self: center; }

  .btn-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .btn-sub {
    font-size: 0.7rem;
    font-weight: 400;
    opacity: 0.6;
  }
`

const BtnTertiary = styled.a`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 16px;
  background: transparent;
  color: rgba(255,255,255,0.4);
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.85rem;
  font-weight: 400;
  padding: 16px 32px;
  border-radius: 3px;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.07);
  transition: color 0.25s;

  &:hover { color: rgba(255,255,255,0.7); }

  svg { flex-shrink: 0; align-self: center; }
`

export default function CTASection() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const actionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current.children, {
        scrollTrigger: { trigger: textRef.current, start: 'top 82%', toggleActions: 'play none none none' },
        opacity: 0, x: -40, duration: 0.75, stagger: 0.1, ease: 'power3.out',
      })
      gsap.from(actionRef.current.children, {
        scrollTrigger: { trigger: actionRef.current, start: 'top 82%', toggleActions: 'play none none none' },
        opacity: 0, x: 40, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <Section ref={sectionRef} id="contato">
      <Noise />
      <Container>
        <TextBlock ref={textRef}>
          <Eyebrow>Vamos conversar</Eyebrow>
          <Headline>Pronta para encontrar o seu vestido?</Headline>
          <Sub>Visite-nos e deixe nossas especialistas encontrarem o vestido perfeito para o seu momento.</Sub>
          <Schedule>Segunda a Sábado · 9h às 18h</Schedule>
        </TextBlock>

        <ActionBlock ref={actionRef}>
          <BtnPrimary
            href="https://wa.me/5519996141072?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20o%20acervo%20da%20Algod%C3%A3o%20Doce%20Noivas."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            <span className="btn-text">
              Chamar no WhatsApp
              <span className="btn-sub">(19) 99614-1072</span>
            </span>
          </BtnPrimary>

          <BtnSecondary
            href="https://www.instagram.com/algodaodocenoivasitapira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
            <span className="btn-text">
              Ver no Instagram
              <span className="btn-sub">@algodaodocenoivasitapira</span>
            </span>
          </BtnSecondary>

          <BtnTertiary
            href="https://maps.google.com/?q=Rua+Comendador+Jo%C3%A3o+Cintra+363+Itapira+SP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt />
            R. Comendador João Cintra, 363" Centro, Itapira/SP
          </BtnTertiary>
        </ActionBlock>
      </Container>
    </Section>
  )
}

gsap.registerPlugin(ScrollTrigger)

