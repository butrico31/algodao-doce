import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled from 'styled-components'
import { FaHeart, FaGraduationCap, FaStar, FaCalendarAlt } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const Section = styled.section`
  background: ${({ theme }) => theme.colors.black};
  padding: 112px 32px;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const TopRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 44px;
  }
`

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
  margin-bottom: 14px;

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
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.12;
  letter-spacing: -0.02em;
`

const TotalBadge = styled.div`
  white-space: nowrap;
  padding: 14px 24px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 2px;

  p:first-child {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.orange};
    font-weight: 700;
    line-height: 1;
  }
  p:last-child {
    font-size: 0.65rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.4);
    font-weight: 600;
    margin-top: 4px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: rgba(255,255,255,0.06);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const OccasionCard = styled.div`
  background: ${({ theme }) => theme.colors.black};
  padding: 52px 32px 44px;
  position: relative;
  cursor: default;
  overflow: hidden;
  transition: background 0.4s ease;
  group: true;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.orange};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    background: rgba(255,255,255,0.03);
    &::before { transform: scaleX(1); }
  }
`

const OccasionIcon = styled.div`
  font-size: 1.6rem;
  margin-bottom: 24px;
  display: block;
  color: ${({ theme }) => theme.colors.orange};
`

const OccasionTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 10px;
  line-height: 1.2;
  letter-spacing: -0.01em;
`

const OccasionCount = styled.p`
  font-size: 0.7rem;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 600;
  margin-bottom: 20px;
`

const OccasionDesc = styled.p`
  font-size: 0.82rem;
  color: rgba(255,255,255,0.4);
  line-height: 1.7;
`

const occasions = [
  { icon: FaHeart, title: 'Casamentos', count: '200+ opções', desc: 'Do vestido de noiva às madrinhas, temos o modelo certo para o grande dia.' },
  { icon: FaGraduationCap, title: 'Formaturas', count: '150+ opções', desc: 'Elegância e estilo para celebrar essa conquista especial.' },
  { icon: FaStar, title: 'Debutantes', count: '120+ opções', desc: 'Vestidos encantadores para tornar os 15 anos inesquecíveis.' },
  { icon: FaCalendarAlt, title: 'Eventos Sociais', count: '80+ opções', desc: 'Para jantares, festas e ocasiões que pedem um look especial.' },
]

export default function OcasioesSections() {
  const sectionRef = useRef(null)
  const topRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(topRef.current.children, {
        scrollTrigger: { trigger: topRef.current, start: 'top 82%', toggleActions: 'play none none none' },
        opacity: 0, y: 36, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      })
      gsap.from(cardsRef.current, {
        scrollTrigger: { trigger: cardsRef.current[0], start: 'top 82%', toggleActions: 'play none none none' },
        opacity: 0, y: 40, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <Section ref={sectionRef} id="ocasioes">
      <Container>
        <TopRow ref={topRef}>
          <div>
            <Eyebrow>Para cada momento especial</Eyebrow>
            <SectionTitle>Qual é a sua ocasião?</SectionTitle>
          </div>
          <TotalBadge>
            <p>550<span style={{color:'rgba(255,255,255,0.25)', fontSize:'1rem'}}>+</span></p>
            <p>Vestidos no acervo</p>
          </TotalBadge>
        </TopRow>
        <Grid>
          {occasions.map((occ, i) => (
            <OccasionCard key={occ.title} ref={(el) => (cardsRef.current[i] = el)}>
              <OccasionIcon><occ.icon /></OccasionIcon>
              <OccasionTitle>{occ.title}</OccasionTitle>
              <OccasionCount>{occ.count}</OccasionCount>
              <OccasionDesc>{occ.desc}</OccasionDesc>
            </OccasionCard>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

