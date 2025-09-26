import { Card } from "./Card";
import loghousewebsite from "../assets/loghousewebsite.png";
import prulifewebsite from "../assets/southernjadewebsite.png";
import portfolio from "../assets/portfolio.png";
import visibloom from "../assets/visibloom.png";
import game from "../assets/game.png";
import brgy from "../assets/brgy.png";
import chatapp from "../assets/mernchatapp.png";
import {
  ReactBadge,
  HtmlBadge,
  CssBadge,
  JSBadge,
  BSBadge,
  PhpBadge,
  TailwindBadge,
  GsapBadge,
  NodeBadge,
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
    imgsrc: visibloom,
    name: "Visibloom's Website",
    p: (
      <>
        This website was a project of my team when we were establishing an idea
        of ours to have a business which solely focused on social media
        management. Visibloom's website was a static website whose only purpose
        was to promote and feature the services we like to provide. View here:
        &nbsp;
        <a
          href="https://visibloom.github.io/explore/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visibloom
        </a>
        .
      </>
    ),
    badges: [<ReactBadge />, <TailwindBadge />, <GsapBadge />],
  },
  {
    imgsrc: brgy,
    name: "Barangay System",
    p: `This was one of my full stack development of a capstone project when I was freelancing. This system handles account
    registration, account logins and submitting Form requests of certain equipments or documents on the User's side. On the 
    other hand, The admin's side is capable of reviewing the verifying accounts, accepting and confirming requests. This system 
    handles basic CRUD functions on the database`,
    badges: [<HtmlBadge />, <BSBadge />, <JSBadge />, <PhpBadge />],
  },
  {
    imgsrc: game,
    name: "Turn Based Game",
    p: (
      <>
        This is a personal project of mine which is mainly developed through
        javascript. This was at a point where I was trying to learn more about
        javascript and objects which I am still enjoying to explore and continue
        to add more. This is an endless RNG based game, by which you are to
        progress through different enemies. As the game go on tougher enemies
        are starting to appear. Take items, weapons armor and enchantments to
        enhance your odds on surving and get to the highest round. Play here:
        &nbsp;
        <a
          href="https://moonimits.github.io/Turn-Based-Game/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Through the Unfortunate
        </a>
      </>
    ),
    badges: [<HtmlBadge />, <CssBadge />, <BSBadge />, <JSBadge />],
  },
  {
    imgsrc: chatapp,
    name: "MERN Stack Chat App",
    p: (
      <>
        I have developed a simple chat app using the MERN Stack guided by a
        tutorial. Currently I have my focus on studying development using Node
        JS and React JS for fullstack development. In this small project it
        utilizes JSONWebTocken for user authentication, MongoDB for the
        database, Cloudinary for image storage and websocket.io for realtime
        behaviors. Developing RESTful apis on NodeJS, utilizing Axios on React
        for creating requests and Zustand for React state management. Visit
        here: &nbsp;
        <a
          href="https://chat-app-587d.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat-App
        </a>
      </>
    ),
    badges: [<ReactBadge />, <TailwindBadge />, <NodeBadge />],
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
