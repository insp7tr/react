import flutterLogo from "../assets/img/flutterLogo.png";
import csharpLogo from "../assets/img/csharpLogo.png";
import cppLogo from "../assets/img/cppLogo.png";
import dartLogo from "../assets/img/dartLogo.png";
import goLogo from "../assets/img/golangLogo.png";
import javaLogo from "../assets/img/javaLogo.png";
import kotlinLogo from "../assets/img/kotlinLogo.png";
import swiftLogo from "../assets/img/swiftLogo.png";
import pythonLogo from "../assets/img/pythonLogo.png";
import reactLogo from "../assets/img/reactLogo.png";
import htmlLogo from "../assets/img/htmlLogo.png";
import tsLogo from "../assets/img/tsLogo.png";
import angularLogo from "../assets/img/angularLogo.png";
import vueLogo from "../assets/img/vueLogo.png";
import nodeLogo from "../assets/img/nodeLogo.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Frameworks = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  let content;
  content = (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bg-tertiary-dark-bg rounded-3xl text-center py-16 px-12 -mt-16">
              <h5>What Skills I Have</h5>
              <h2 className="mb-5">Languages and Frameworks</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <img src={flutterLogo} alt="" className="mb-12 mt-1" />
                  <h5>Flutter</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <img src={csharpLogo} alt="" className="mb-12 mt-1" />
                  <h5>C#</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <img src={goLogo} alt="" className="w-full mt-14 mb-24" />
                  <h5>Golang</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <img src={dartLogo} alt="" className="mb-12 mt-1" />
                  <h5>Dart</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <img src={cppLogo} alt="" className="mb-8" />
                  <h5>C++</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <img src={javaLogo} alt="" className="w-full mt-10 mb-20" />
                  <h5>Java</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <img src={kotlinLogo} alt="" className="w-full mb-12 mt-1" />
                  <h5>Kotlin</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <img src={swiftLogo} alt="" className="w-full mb-16 mt-1" />
                  <h5>Swift</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <img src={pythonLogo} alt="" className="w-full mb-12 mt-1" />
                  <h5>Python</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <img src={tsLogo} alt="" className="w-full mb-12 mt-1" />
                  <h5>Javascript / Typescript</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <img src={reactLogo} alt="" className="w-full mb-14 mt-2.5" />
                  <h5>React</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <img src={htmlLogo} alt="" className="w-full mb-12 mt-1" />
                  <h5>HTML</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <img src={angularLogo} alt="" className="w-full mb-10" />
                  <h5>Angular</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <img src={vueLogo} alt="" className="w-full mb-11 mt-2" />
                  <h5>Vue</h5>
                </div>
                <div className="w-1/2 mx-auto mt-0 mb-3.5">
                  <img src={nodeLogo} alt="" className="w-full mb-16 mt-12" />
                  <h5>Node</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );

  return content;
};
