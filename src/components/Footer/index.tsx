import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import {
  FooterSection,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Empty,
  FooterContainer,
  Language,
} from "./styles";


interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          {/* <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell us everything")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:l.qqbadze@gmail.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <Large to="/" left="true">
                {t("Application Security")}
              </Large>
              <Large left="true" to="/">
                {t("Software Principles")}
              </Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large left="true" to="/">
                {t("Support Center")}
              </Large>
              <Large left="true" to="/">
                {t("Customer Support")}
              </Large>
            </Col>
          </Row> */}
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Dirección")}</Language>
              <Para>Don Mato 2142</Para>
              <Para>Puente Alto</Para>
              <Para>Región Metropolitana</Para>
            </Col>
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Horario de Atencion")}</Language>
              <Para>Todos los dias de la semana</Para>
              <Para>Las 24 horas</Para>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="190px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/Adrinlol/create-react-app-adrinlol"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/Adrinlolx"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="linkedin.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
