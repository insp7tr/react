import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "./desktop.css";
// import { ProjectCard } from "../../ProjectCard";
import projImg1 from "../../../../assets/img/project-img1.png";
import projImg2 from "../../../../assets/img/project-img2.png";
import projImg3 from "../../../../assets/img/project-img3.png";
import colorSharp2 from "../../../../assets/img/color-sharp2.png";

const NotUploaded = () => {
  return (
    <p className="text-gray-300 text-lg tracking-wider leading-6 mt-3 mx-auto mb-7 text-center w-7/12">
      Projects not uploaded yet.
    </p>
  );
};

export const Desktop = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="py-20 px-0 realtive bg-black desktop" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2 className="text-5xl font-bold text-center">Languages</h2>
              <p className="text-gray-300 text-lg tracking-wider leading-6 mt-3 mx-auto mb-7 text-center w-7/12">
                Select a language to see it's relevant projects.
              </p>

              <Tab.Container id="desktop-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="bg-[#ffffff1a] overflow-hidden w-9/12 my-0 mx-auto rounded-2xl mb-5 justify-center items-center"
                  id="pills-tab"
                >
                  <Nav.Item className="w-full">
                    <Nav.Link
                      eventKey="one"
                      className="bg-transparent rounded-t-3xl py-3 px-0 text-white w-full text-base tracking-wider font-medium relative transition text-center z-0"
                    >
                      C#
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="one">
                    {/* <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row> */}
                    <NotUploaded />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
