import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/edu.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Shiksha Vardhan"
              description="Developed a portal for sharing of resources amongst Higher Educational Institutions on mutual agreement
              basis & for fellow development of students among all HEI’S with 3 team members.This project was shortlisted for the finals of smart india hackathon 2022,Tech: React Native, NodeJS, JWT, ExpressJs, Django, MongoDb,"
              ghLink="https://github.com/Devanshu236/Sih"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Plagiraism Detector"
              description=": Built an AI model to resolve issues of copying assignments in the online mode of teaching faster with
              an accuracy of 83.7 percentage.
              Tech: Python, Scikit, Numpy, Pandas, Plotly Heatmap, N-gram machine learning model & OpenCV."
              ghLink="https://github.com/Devanshu236/Plagiarism-checker-using-python"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="IIITN-CONNECT"
              description="This college portal website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management: Designed and curated a college management system where user can log in as admin or register as a
              student where user can get access to institutes profile and curriculum."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="CRMS Website"
              description="Devised a terminal-based customer relations management system for the easy recognition of potential
              customers where customer once logged in fills in conditionals, on the basis of which sorting is done as leads in the back end.
              Emails regarding discount coupons and offers are sent to potential customers by the CRMS.
              Tech: Java, Object Oriented Programming, Xamp Server, SQL Database, JRD."
              ghLink="https://github.com/Devanshu236/Real-estate-Crms-system"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects