import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,1)'};
  backdrop-filter: blur(16px);
  border-bottom: 1px solid ${({ $scrolled }) =>
    $scrolled ? 'rgba(0,0,0,0.08)' : 'rgba(0,0,0,0.06)'};
  transition: box-shadow 0.3s ease;
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? '0 2px 20px rgba(0,0,0,0.07)' : 'none'};
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 20px;
    height: 60px;
  }
`;

const LogoBlock = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled.img`
  width: 170px;
  height: auto;
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 142px;
  }
`;

const Links = styled.ul`
  display: flex;
  align-items: center;
  gap: 36px;
  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: ${({ $open }) => ($open ? '0' : '-100%')};
    width: 300px;
    height: 100dvh;
    background: ${({ theme }) => theme.colors.white};
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    box-shadow: -8px 0 40px rgba(0,0,0,0.12);
    transition: right 0.38s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 1001;
  }
`;

const NavLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMedium};
  letter-spacing: 0.3px;
  text-decoration: none;
  position: relative;
  transition: color 0.25s;

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1.5px;
    background: ${({ theme }) => theme.colors.orange};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.black};
    &::after { width: 100%; }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.black};
  }
`;

const CTABtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: ${({ theme }) => theme.colors.orange};
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  padding: 10px 20px;
  border-radius: 3px;
  text-decoration: none;
  transition: background 0.25s ease, transform 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.colors.orangeDark};
    transform: translateY(-1px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ $open }) => ($open ? 'block' : 'none')};
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.35);
    z-index: 1000;
  }
`;

const Toggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  padding: 6px;
  z-index: 1002;
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
  }
`;

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#acervo', label: 'Acervo' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#historia', label: 'Sobre nós' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Overlay $open={menuOpen} onClick={() => setMenuOpen(false)} />
      <Nav $scrolled={scrolled}>
        <Inner>
          <LogoBlock href="#inicio">
            <LogoImage src="/LogoPreta.png" alt="Algodão Doce Noivas" />
          </LogoBlock>

          <Links $open={menuOpen}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </Links>

          <Right>
            <CTABtn
              href="https://wa.me/5519996141072?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Algod%C3%A3o%20Doce%20Noivas."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={14} />
              Agendar visita
            </CTABtn>
            <Toggle
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </Toggle>
          </Right>
        </Inner>
      </Nav>
    </>
  );
}

