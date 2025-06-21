import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { AnimateIn, SlideLeft } from "./AnimateIn";

export default function About() {
  return (
    <div className="container">
      <div className="row justify-content-center gx-4 gy-lg-0">
        <h2 className="text-center fw-bolder pb-4 ">
          <span className="main-color">About</span> Me
        </h2>
        <div className="col-12 col-lg-4">
          <AnimateIn>
            <div className="border-main-color bg-dark p-4">
              <h3 className="mb-3 main-color">Personal Information</h3>
              <div className="textblock px-3">
                <h5> FullName:</h5>
                <p>
                  <FontAwesomeIcon icon={faUser} size="sm" /> Marco Luis S.
                  Hernandez
                </p>
              </div>
              <div className="textblock px-3">
                <h5>Address:</h5>
                <p>
                  <FontAwesomeIcon icon={faLocationDot} size="sm" /> Luya, San
                  Luis, Batangas
                </p>
              </div>
              <div className="textblock px-3">
                <h5>Email:</h5>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} size="sm" />{" "}
                  marcoluis.hernandez@gmail.com
                </p>
              </div>
              <div className="row gy-3">
                <div className="col-12">
                  <h5 className="main-color">Webdev Knowledge</h5>
                  <div className="scale">
                    <span className="badge text-bg-danger m-1">HTML</span>
                    <span className="badge text-bg-primary m-1">CSS</span>
                    <span className="badge text-bg-warning m-1">Javascript</span>
                    <span className="badge text-bg-bootstrap m-1">Bootstrap</span>
                    <span className="badge text-bg-reactJS m-1">ReactJS</span>
                    <span className="badge text-bg-bootstrap m-1">PHP</span>
                    <span className="badge text-bg-light m-1">
                      <span className="my">My</span>
                      <span className="sql">SQL</span>
                    </span>
                  </div>
                </div>
                <div className="col-12">
                  <h5 className="main-color ">Other Languages</h5>
                  <div className="scale">
                    <span className="badge text-bg-vb m-1">VisualBasic</span>
                    <span className="badge text-bg-py m-1">Python</span>
                    <span className="badge text-bg-info m-1">C++</span>
                    <span className="badge text-bg-bootstrap m-1">C#</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
        <div className="col-12 col-lg-6 pt-4 pt-lg-0">
          <AnimateIn>
            <div className="border-main-color bg-dark p-4">
              <h3 className="main-color ">Programming Background</h3>
              <div className="timeline">
                <SlideLeft>
                  <h5 className="main-color ">Arktech Philippines Inc. (2024-Present):</h5>
                  <p className="text-justify">
                    Positioned as a Computer Programmer on Aktech Philippines Inc. I was tasked on
                    applying responsive designs to old and new web softwares on their system. Creating softwares
                    for streamlining the work process of employees for various departments. Maintaining, tracing and 
                    bug fixing old softwares. Developing responsive projects, functions and new layouts for new and existing softwares. 
                    Through out the time being a computer programmer in Arktech I have gained knowledge and skills on the following:  
                  </p>
                  <ul>
                    <li>Utilizing nested queries to retreive certain data from the database.</li>
                    <li>Using database triggers for quick table managements.</li>
                    <li>PDF manipulations using GhostScript, FPDI and Poppler Utils.</li>
                    <li>Using Regex to filter out the useful extracted text on the PDF.</li>
                    <li>Using AJAX for semi real-time webpage updates.</li>
                    <li>JSON for passing PHP data to javascript.</li>
                    <li>Arrays and Array Manipulation for quick data organization.</li>
                    <li>Utilizing Javascript eventlisteners for user interactions.</li>
                    <li>PHP Curl request and creating PHP endpoints.</li>
                    <li>Utilizing Libraries such as Jquery, Datatables, Sweetalert, Izimodal and more.</li>
                  </ul>
                </SlideLeft>
                <SlideLeft>  
                  <h5 className="main-color ">College Capstone (2023-2024):</h5>
                  <p className="text-justify">
                    As the programmer of the team in our Capstone Project, I was
                    incharge of developing the Frontend and the Backend of our
                    website. Throughout the frontend development process, I studied
                    the basics of HTML and CSS. After the basics of CSS I studied
                    Bootstrap since it was the tool for creating a responsive
                    website. For the Backend Development, I studied and used PHP and
                    used Phpmyadmin for the database. Over the course of my Academic
                    Year I also learned other programming languages.
                  </p>
                </SlideLeft>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </div>
  );
}
