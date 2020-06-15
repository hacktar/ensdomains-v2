import React from "react"
import styled from "@emotion/styled"

import logo from "../assets/ensLogo.svg"
import logoText from "../assets/ensLogoText.svg"
import twitter from "../assets/twitter.svg"
import github from "../assets/github.svg"
import medium from "../assets/medium.svg"

const FooterContainer = styled("footer")`
  background: #1e3277;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const social = [
  {
    img: twitter,
    text: "Twitter",
    link: "https://twitter.com",
  },
  {
    img: medium,
    text: "Medium",
    link: "https://medium.com",
  },
  {
    img: github,
    text: "Github",
    link: "https://github.com",
  },
]

const Logo = styled("div")`
  height: 48px;
  display: flex;

  img {
    display: block;
  }

  .ens-logo {
    width: 35px;
    margin-right: 10px;
  }

  .ens-logo-text {
    width: 57px;
  }
`

const ExternalLink = styled("a")`
  font-family: Karma;
  font-size: 28px;
  color: white;
  text-decoration: none;
  font-weight: 300;

  img {
    margin-right: 8px;
  }
  padding: 0 25px 0;
  border-right: solid 1px rgba(255, 255, 255, 0.5);
  &:last-child {
    padding: 0 0 0 25px;
    border-right: none;
  }
`

const SocialContainer = styled("div")`
  display: flex;
  align-items: center;
`

const MailTo = styled("a")`
  color: rgba(255, 255, 255, 0.5);
`

export default function Footer(props) {
  return (
    <FooterContainer>
      <Logo>
        <img src={logo} alt="ENS Logo" className="ens-logo" />
        <img src={logoText} alt="ENS Logo text" className="ens-logo-text" />
      </Logo>
      <SocialContainer>
        {social.map(s => (
          <ExternalLink href={s.link}>
            <img src={s.img} />
            {s.text}
          </ExternalLink>
        ))}
      </SocialContainer>
      <MailTo href="mailto:press.ens.domains">press@ens.domains</MailTo>
    </FooterContainer>
  )
}