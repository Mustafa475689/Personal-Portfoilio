import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import stop from "../../Assets/Projects/stop watch.png"; // stop watch
import candy from "../../Assets/Projects/candy crush.png"; // candy crush
import snake from "../../Assets/Projects/snake.png"; // snake game
import typing from "../../Assets/Projects/typing.png"; // typing test
import todo from "../../Assets/Projects/to do list.png"; // todo list
import memory from "../../Assets/Projects/memory.png"; // memory
import foodApp from "../../Assets/Projects/foodapp.png"; // foodApp

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
       
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodApp}
              isBlog={false}
              title="Food app (React js)"
              description="A complete frontend website made by react js."
              ghLink="https://github.com/Mustafa475689/Static-food-site"
              demoLink="https://static-food-site.vercel.app/"
            />
          </Col>
       
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={typing}
              isBlog={false}
              title="Typing Test (React js)"
              description="A typing test web application to check or enhance the speed of his user."
              ghLink="https://github.com/Mustafa475689/Typing--Tester-React-js"
              demoLink="https://typing-tester-react-js.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="ToDo List (React js)"
              description="Todo list a mini web applicaation to set the daily schedule for the user. It has to add, delet and edit features and its also has the feaature to up and down the your task to manage your daily routine properly."
              ghLink="https://github.com/Mustafa475689/To-Do-List-React-Js"
               demoLink="https://to-do-list-react-js-amber.vercel.app/" // <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stop}
              isBlog={false}
              title="Stop Watch (React js)"
              description="A simple stop watch application which has increased my skills in react js."
              ghLink="https://github.com/Mustafa475689/Stop-Watch-React-js"
              demoLink="https://stop-watch-react-js-sq6x.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={candy}
              isBlog={false}
              title="Candy Crush (React js)"
              description="Candy Crush game which is a stisfing game play to his user. This project helped me 
              to learn alot about react js."
              ghLink="https://github.com/Mustafa475689/Candy-Crush-react-js"
              demoLink="https://candy-crush-react-js.vercel.app/" //  <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake Game (JS)"
              description="Snake game a clone project of nostelgic mobile snake game made by HTML5, CSS and JavaScript. It has many features 
              link sound effect and backgound music and also has high score funtionality"
              ghLink="https://github.com/Mustafa475689/Snake-Game-JS-"
              demoLink="https://mustafa475689.github.io/Snake-Game-JS-/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memory}
              isBlog={false}
              title="Memory Game (JS)"
              description="Memory game made ny HTML5, CSS and JavaScrip a simple but an intersting project."
              ghLink="https://github.com/Mustafa475689/Memory-Game-JS-"
              demoLink="https://mustafa475689.github.io/Memory-Game-JS-/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
