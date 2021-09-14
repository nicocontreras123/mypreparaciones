import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import { Carousel } from "react-carousel-minimal";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: any;
}

const data = [
  {
    image: "https://firebasestorage.googleapis.com/v0/b/myp-reparaciones.appspot.com/o/image3.jpeg?alt=media&token=a3676e8e-f67a-4955-8875-e64dd6a44c7d",
    caption: ""
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/myp-reparaciones.appspot.com/o/image4.jpeg?alt=media&token=409ef3da-9acf-4cdd-b319-896700c2ff59",
    caption: ""
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/myp-reparaciones.appspot.com/o/image2.jpeg?alt=media&token=9f0a3b8a-da8c-4cbb-b2ec-24b8ff98602c",
    caption: ""
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/myp-reparaciones.appspot.com/o/WhatsApp%20Image%202021-09-13%20at%206.53.35%20PM.jpeg?alt=media&token=c360e239-83ad-45a2-be3a-ab02d5b4f530",
    caption: ""
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/myp-reparaciones.appspot.com/o/WhatsApp%20Image%202021-09-13%20at%206.53.36%20PM%20(1).jpeg?alt=media&token=139a79ae-7c6c-442b-9a70-f000a6678941",
    caption: ""
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/myp-reparaciones.appspot.com/o/WhatsApp%20Image%202021-09-13%20at%206.53.37%20PM%20(2).jpeg?alt=media&token=d7a9d7ec-d02c-4752-af42-135d7377df1b",
    caption: ""
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/myp-reparaciones.appspot.com/o/WhatsApp%20Image%202021-09-13%20at%206.54.00%20PM.jpeg?alt=media&token=2f3d1b8d-2a55-4666-a06c-b4ee65f78bd3",
    caption: ""
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/myp-reparaciones.appspot.com/o/WhatsApp%20Image%202021-09-13%20at%206.56.07%20PM%20(2).jpeg?alt=media&token=3d05fa5a-6043-4df7-96e3-1bcf7882853f",
    caption: ""
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/myp-reparaciones.appspot.com/o/WhatsApp%20Image%202021-09-13%20at%206.56.07%20PM%20(1).jpeg?alt=media&token=9dc4eb39-34dd-4d19-8353-ff8469d7660a",
    caption: ""
  }
];

const captionStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
}
const slideNumberStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
}
const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo("mission")}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
