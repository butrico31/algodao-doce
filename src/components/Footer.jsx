import styled from 'styled-components'
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'

const Foot = styled.footer`
  background: ${({ theme }) => theme.colors.black};
  padding: 64px 32px 32px;
  border-top: 1px solid rgba(255,255,255,0.06);
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const TopBar = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 60px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  margin-bottom: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`

const BrandCol = styled.div``

const LogoName = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-style: italic;
  margin-bottom: 6px;
`

const LogoSub = styled.p`
  font-size: 0.65rem;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 600;
  margin-bottom: 20px;
`

const BrandDesc = styled.p`
  font-size: 0.82rem;
  color: rgba(255,255,255,0.35);
  line-height: 1.7;
  max-width: 260px;
  margin-bottom: 24px;
`

const SocialRow = styled.div`
  display: flex;
  gap: 8px;
`

const SocialIcon = styled.a`
  width: 34px;
  height: 34px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.4);
  font-size: 0.9rem;
  transition: all 0.25s;

  &:hover {
    background: ${({ theme }) => theme.colors.orange};
    border-color: ${({ theme }) => theme.colors.orange};
    color: #fff;
    transform: translateY(-2px);
  }
`

const Col = styled.div``

const ColTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.65rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.3);
  font-weight: 600;
  margin-bottom: 20px;
`

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const NavItem = styled.li`
  a {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.45);
    text-decoration: none;
    transition: color 0.25s;

    &:hover { color: ${({ theme }) => theme.colors.white}; }
  }
`

const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const ContactItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: flex-start;

  svg { color: ${({ theme }) => theme.colors.orange}; flex-shrink: 0; margin-top: 2px; }

  span {
    font-size: 0.82rem;
    color: rgba(255,255,255,0.45);
    line-height: 1.55;
  }
`

const BottomBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`

const Copyright = styled.p`
  font-size: 0.72rem;
  color: rgba(255,255,255,0.2);
`

const OrangeTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.65rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 600;
  opacity: 0.6;
`

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#acervo', label: 'Acervo' },
  { href: '#ocasioes', label: 'Ocasiões' },
  { href: '#historia', label: 'Nossa História' },
  { href: '#contato', label: 'Contato' },
]

export default function Footer() {
  return (
    <Foot>
      <Container>
        <TopBar>
          <BrandCol>
            <LogoName>Algodão Doce Noivas</LogoName>
            <LogoSub>Itapira / SP</LogoSub>
            <BrandDesc>Realizando sonhos, um vestido de cada vez. Mais de 20 anos de dedicação ao bem vestir.</BrandDesc>
            <SocialRow>
              <SocialIcon href="https://www.instagram.com/algodaodocenoivasitapira" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com/algodaodocenoivas" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </SocialIcon>
              <SocialIcon href="https://wa.me/5519996141072" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </SocialIcon>
            </SocialRow>
          </BrandCol>

          <Col>
            <ColTitle>Navegação</ColTitle>
            <NavList>
              {navLinks.map((link) => (
                <NavItem key={link.href}><a href={link.href}>{link.label}</a></NavItem>
              ))}
            </NavList>
          </Col>

          <Col>
            <ColTitle>Contato</ColTitle>
            <ContactList>
              <ContactItem>
                <FaWhatsapp size={12} />
                <span>(19) 99614-1072</span>
              </ContactItem>
              <ContactItem>
                <FaInstagram size={12} />
                <span>@algodaodocenoivasitapira</span>
              </ContactItem>
            </ContactList>
          </Col>
        </TopBar>

        <BottomBar>
          <Copyright>© 2025 Algodão Doce Noivas. Todos os direitos reservados.</Copyright>
          <OrangeTag>Itapira · SP</OrangeTag>
        </BottomBar>
      </Container>
    </Foot>
  )
}

