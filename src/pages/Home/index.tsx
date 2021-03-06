import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ContactContent from "../../content/ContactContent.json";
import { SvgIcon } from "../../common/SvgIcon";
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <p>
        Contactanos en los numeros
        <SvgIcon
          src="whatsapp.svg"
          width="60px"
          height="60px"
        />
           +56 9 5090 1991 - +56 9 7660 8841</p>
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        // button={IntroContent.button}
        icon="repair.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button=''
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="plumber.svg"
        id="about"
      />
      <ContentBlock
        type="left"
        title={MissionContent.title}
        content={MissionContent.text}
        section={MissionContent.section}
        icon="fixing.svg"
        id="mission"
      />
      {/* <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      /> */}
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
