import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import linkedinImg from '../../assets/linkedin_img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Home() {
    return (
      <Container id="hello">
        <Card className='bg-transparent border-0'>
          <Card.Body>
            <h1>Hi!</h1>
            <h1> My name is Arundhati Singh.</h1>
            <p id = "about_me">I am a full-stack developer, software engineer, and ML researcher. I love envisioning, prototyping, and implementing my ideas
                into real-world applications. I am also working as an undergraduate research assistant in the FabLab at the University of Wisconsin-Madison where 
                I am working on developing a program that communicates with a 3D-metal printer to print 3D titanium models. I am also creating an online platform called DevPals that connects 
                Computer Science enthusiasts across the world to collaborate on projects and learn from each other. I am open to new opportunities and would love to connect with you! I look forward
                to working together and bringing our visions to life! 
            </p>
            <img id = "picture" src = {linkedinImg} alt = "LinkedIn Image"/>
            <div id = "social-icons">
            <a href="https://github.com/arundhatisingh17" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/arundhati-singh171003/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="mailto:asingh278@wisc.edu" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://discordapp.com/users/arundhatisingh" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDiscord} />
              </a> 
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }

export default Home;