import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SocialIcon } from "react-social-icons";
import juhi from "./Pics/juhi.jpg";
import shreya from "./Pics/shreya.jpg";
import rutuja from "./Pics/rutuja.jpg";
import "../AboutUs/AboutUs.css";

function TeamMember({
  imageSrc,
  name,
  role,
  description,
  email,
  linkedIn,
  github,
}) {
  return (
    <Col md={4} sm={6}>
      <Card className="sampleContainer">
        <Card.Img
          variant="top"
          src={imageSrc}
          alt={name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{role}</Card.Subtitle>
          <Card.Text style={{ fontSize: "14px" }}>{description}</Card.Text>

          <SocialIcon url={linkedIn} style={{ marginRight: "10px" }} />
          <SocialIcon
            url={email}
            network="email"
            style={{ marginRight: "10px" }}
          />
          <SocialIcon url={github} network="github" />
        </Card.Body>
      </Card>
    </Col>
  );
}

function TeamPage() {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "6rem" }}>
        <span className="header">Our Team</span>
      </h2>
      <Container>
        <Row>
          <TeamMember
            imageSrc={juhi}
            name="Juhi Augustine Kamaraj Nalli"
            role="Developer"
            description="Hi everyone! I'm Juhi, a Computer Science Graduate Student at Portland State University. I've created a captivating carousel, informative alert component, and air quality feature for park visitors. I also implemented an engaging Activity vs National Park donut chart and a user-friendly pop-up modal for categorizing national parks by US states. Additionally, I designed and implemented the footer view and about us page. It's been an exciting journey applying my knowledge and making a meaningful impact on the project."
            email="juh3@pdx.edu"
            linkedIn="https://www.linkedin.com/in/juhikamaraj/"
            github="https://github.com/juhiaugustine"
          />
          <TeamMember
            imageSrc={shreya}
            name="Shreya Choure"
            role="Developer"
            description="Hello, I'm Shreya Choure, a Computer Science graduate student at PSU. We developed a user-centric dashboard app to explore new technologies. Check out the interactive map I created and navigate to individual park pages. Our National Park pages can be accessed from the search bar. I added park info, weather details, and directions from National Park services. I also compiled passport stamping locations for visitors. Our website features a polar area chart and pie chart showcasing park designations and campground counts. It's been a thrilling journey, and we welcome your feedback. Happy exploring!"
            email="schoure@pdx.edu"
            linkedIn="https://www.linkedin.com/in/shreya-choure/"
            github=" https://github.com/schoure98"
          />
          <TeamMember
            imageSrc={rutuja}
            name="Rutuja Padgilwar"
            role="Developer"
            description="Hello, I'm Rutuja Padgilwar, a Graduate Student at Portland State University studying MS in Computer Science. In this project, I designed and implemented various components including the navbar section, informative card components (weather forecast, park activities, things to do, campground, and more), line charts (5-day weather forecast), bar charts (state vs. national park, state vs. generic parks), 3D pie charts (alerts count per category for all parks and national parks), and pop-up modal components. Despite initial uncertainty, I successfully accomplished our goals with newfound knowledge and past experiences. Explore the website and share your valuable feedback."
            email="rpadgil2@pdx.edu"
            linkedIn="https://www.linkedin.com/in/rutuja-padgilwar"
            github=" https://github.com/rutujapadgilwar"
          />
        </Row>
      </Container>
    </div>
  );
}

function AboutUs() {
  return (
    <div>
      <TeamPage />
    </div>
  );
}

export default AboutUs;
