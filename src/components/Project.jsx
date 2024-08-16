import { Card } from "./Card";
import loghousewebsite from "../assets/loghousewebsite.png";
import prulifewebsite from "../assets/southernjadewebsite.png";
import portfolio from "../assets/portfolio.png";
import {
  ReactBadge,
  HtmlBadge,
  CssBadge,
  JSBadge,
  BSBadge,
  PhpBadge,
} from "./Badges";
import { ScaleIn } from "./AnimateIn";

const content = [
  {
    imgsrc: loghousewebsite,
    name: "Log House Farm Resort Website",
    p: `The Log House Farm Resort Website is our Capstone Project. This system includes a 3D virtual
        tour function that displays the resort's facilities and amenities with an interactive
        360-degree view. The user module which includes signup and login, a reservation function, viewing announcements and
        room/cottage details and email notifications. The admin module which handle reports, manages website content, 
        and handles feedback and requests.`,
    badges: [
      <HtmlBadge />,
      <CssBadge />,
      <BSBadge />,
      <JSBadge />,
      <PhpBadge />,
    ],
  },
  {
    imgsrc: prulifewebsite,
    name: "PruLife UK Monitoring System",
    p: `The Pru Life - UK Southern Jade Life Monitoring System is project from my partner
        I programmed the project's backend, and I assisted my partner with the development
        of the project's frontend. This system includes user registration, CRUD functions and 
        uploading of documents. For the admin module includes monitoring applicant lists, documents
        and information as well as an emailing function using phpmailer`,
    badges: [
      <HtmlBadge />,
      <CssBadge />,
      <BSBadge />,
      <JSBadge />,
      <PhpBadge />,
    ],
  },
  {
    imgsrc: portfolio,
    name: "Personal Portfolio",
    p: `This portfolio is made from ReactJS, using its various concepts that I am progressively learning
        such as rendering lists, props and components. Also learning various CSS concepts such as perspective, transforms
        transitions and animations.`,
    badges: [<ReactBadge />, <BSBadge />, <CssBadge />],
  },
];

function Project() {
  return (
    <div>
      <div className="container">
        <h2 className="text-center fw-bolder pb-4">Projects</h2>
        <div className="row justify-content-center gy-4">
          {content.map((item, index) => (
            <div key={index} className="col-12 col-lg-5">
              <ScaleIn>
                <Card {...item} />
              </ScaleIn>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
