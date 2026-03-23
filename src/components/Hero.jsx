import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import { FaWhatsapp, FaArrowRight, FaStar } from 'react-icons/fa';

/* �"?�"?�"? Layout �"?�"?�"? */
const Section = styled.section`
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 68px; /* navbar height */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

/* �"?�"?�"? Left column �"?�"?�"? */
const Left = styled.div`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 64px 80px 80px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 72px 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 60px 32px 52px;
    align-items: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 48px 24px 44px;
  }
`;

const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.orange};
  margin-bottom: 24px;

  &::before {
    content: '';
    display: block;
    width: 28px;
    height: 1.5px;
    background: ${({ theme }) => theme.colors.orange};
    flex-shrink: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    letter-spacing: 2.2px;
  }
`;

const Headline = styled.h1`

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .num {
      font-size: 1.55rem;
    }

    .label {
      font-size: 1rem;
      letter-spacing: 1.2px;
    }
  }
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.8rem, 4.5vw, 5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.08;
  margin-bottom: 28px;
  letter-spacing: -0.02em;

  em {
    font-style: italic;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const Sub = styled.p`
  font-family: ${({ theme }) => theme.fonts.subtitle};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textMedium};
  line-height: 1.8;
  max-width: 420px;
  margin-bottom: 44px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.08rem;
  }
`;

const BtnRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 56px;
  flex-wrap: wrap;
`;

const BtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  background: ${({ theme }) => theme.colors.orange};
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  padding: 15px 30px;
  border-radius: 3px;
  text-decoration: none;
  transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
  box-shadow: 0 4px 16px rgba(200,168,130,0.25);

  &:hover {
    background: ${({ theme }) => theme.colors.orangeDark};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(200,168,130,0.35);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const BtnSecondary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  padding: 15px 24px;
  border: 1.5px solid rgba(0,0,0,0.15);
  border-radius: 3px;
  text-decoration: none;
  transition: border-color 0.25s, color 0.25s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.black};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 36px;
  padding-top: 36px;
  border-top: 1px solid rgba(0,0,0,0.07);
`;

const StatItem = styled.div``;

const StatNum = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1;
  margin-bottom: 4px;

  span {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const StatLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMedium};
  letter-spacing: 0.35px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    line-height: 1.45;
  }
`;

/* �"?�"?�"? Right column �"?�"?�"? */
const Right = styled.div`
  background: ${({ theme }) => theme.colors.black};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 380px;
    order: -1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 280px;
  }
`;

const HeroPhoto = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(120deg, rgba(10,10,10,0.7), rgba(10,10,10,0.38) 45%, rgba(10,10,10,0.7)),
    url('/noiva-ez017.jpg');
  background-size: cover;
  background-position: center 22%;
  z-index: 0;
`;

const BigLetter = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(180px, 22vw, 280px);
  font-weight: 700;
  font-style: italic;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.08);
  line-height: 0.85;
  user-select: none;
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
`;

const RightContent = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
    gap: 18px;
  }
`;

const TagPill = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.14);
  border: 1px solid rgba(255,255,255,0.28);
  border-radius: 2px;
  padding: 12px 22px;
  max-width: min(92vw, 420px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px 12px;
  }
`;

const TagLogo = styled.img`
  width: clamp(220px, 24vw, 320px);
  height: auto;
  max-width: 100%;
  object-fit: contain;
  display: block;
  filter: brightness(0) invert(1);
  opacity: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(72vw, 250px);
    height: auto;
  }
`;

const HeroQuote = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.5rem, 3vw, 2.4rem);
  font-style: italic;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  line-height: 1.4;
  max-width: 360px;
  position: relative;

  &::before {
    content: '"';
    display: block;
    font-size: 4rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors.orange};
    opacity: 0.5;
    margin-bottom: -12px;
  }
`;

const OrangeLine = styled.div`
  width: 40px;
  height: 2px;
  background: ${({ theme }) => theme.colors.orange};
`;

const RightBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(200,168,130,0.12);
  border: 1px solid rgba(200,168,130,0.25);
  border-radius: 2px;
  padding: 12px 20px;
`;

const RightBadgeText = styled.div`
  .num {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 1.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.orange};
    display: block;
    line-height: 1;
  }
  .label {
    font-size: 1rem;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .num {
      font-size: 1.55rem;
    }

    .label {
      font-size: 1.05rem;
      letter-spacing: 1.2px;
    }
  }
`;

/* �"?�"?�"? Decorative grid lines �"?�"?�"? */
const GridLines = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: rgba(255,255,255,0.03);
  }

  &::before {
    left: 33.33%;
    top: 0;
    bottom: 0;
    width: 1px;
  }

  &::after {
    left: 66.66%;
    top: 0;
    bottom: 0;
    width: 1px;
  }
`;

const BottomOrangeLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: ${({ theme }) => theme.colors.orange};
  z-index: 4;
`;

export default function Hero() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-eyebrow',   { opacity: 0, x: -30, duration: 0.6 })
        .from('.hero-headline',  { opacity: 0, y: 40, duration: 0.8 }, '-=0.3')
        .from('.hero-sub',       { opacity: 0, y: 24, duration: 0.6 }, '-=0.5')
        .from('.hero-btns',      { opacity: 0, y: 20, duration: 0.5 }, '-=0.4')
        .from('.hero-stats',     { opacity: 0, y: 16, duration: 0.5 }, '-=0.3')
        .from(rightRef.current,  { opacity: 0, x: 40, duration: 0.9 }, 0.1);
    });

    return () => ctx.revert();
  }, []);

  return (
    <Section id="inicio">
      <Left ref={leftRef}>
        <Eyebrow className="hero-eyebrow">Itapira/SP · Desde sempre</Eyebrow>
        <Headline className="hero-headline">
          Realize o sonho do seu<br />
          <em>vestido perfeito</em>
        </Headline>
        <Sub className="hero-sub">
          Aluguel de vestidos de noivas e festa com atendimento personalizado e costureiras
          que transformam momentos em memórias inesquecíveis.
        </Sub>
        <BtnRow className="hero-btns">
          <BtnPrimary
            href="https://wa.me/5519996141072?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Algod%C3%A3o%20Doce%20Noivas."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={16} />
            Agendar visita
          </BtnPrimary>
          <BtnSecondary href="#acervo">
            Ver acervo
            <FaArrowRight size={13} />
          </BtnSecondary>
        </BtnRow>
        <Stats className="hero-stats">
          <StatItem>
            <StatNum>30<span>+</span></StatNum>
            <StatLabel>Anos de experiência</StatLabel>
          </StatItem>
          <StatItem>
            <StatNum>500<span>+</span></StatNum>
            <StatLabel>Vestidos no acervo</StatLabel>
          </StatItem>
          <StatItem>
            <StatNum>4.9<span><FaStar size={15} /></span></StatNum>
            <StatLabel>Amor por cada cliente</StatLabel>
          </StatItem>
        </Stats>
      </Left>

      <Right ref={rightRef}>
        <HeroPhoto />
        <GridLines />
        <BigLetter>A</BigLetter>
        <RightContent>
          <TagPill>
            <TagLogo src="/LogoPreta.png" alt="Algodão Doce Noivas" />
          </TagPill>
          <HeroQuote>
            Cada vestido conta uma história especial
          </HeroQuote>
          <OrangeLine />
          <RightBadge>
            <RightBadgeText>
              <span className="num">4.9<FaStar size={15} /></span>
              <span className="label">Avaliação das clientes</span>
            </RightBadgeText>
          </RightBadge>
        </RightContent>
        <BottomOrangeLine />
      </Right>
    </Section>
  );
}

