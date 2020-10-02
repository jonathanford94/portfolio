import React from 'react';
import './App.css';
import { Experience } from '../Experience/Experience';
import { Portfolio } from '../Portfolio/Portfolio';
import { Contact } from '../Contact/Contact';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ScrollAnimation from 'react-animate-on-scroll';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      job: {
        title: "Technical Service Specialist",
        date: "Aug18 - Apr20",
        description: [
          "Agile project management of web application for IT infrastructure estate management tool.",
          "Business case development for capitalisable benefit against investment.",
          "Budget forecasting and management to support business wide financial targets.",
          "Understanding end user requirements via analysis of tools, processes, people and data required for key business needs.",
          "Roadmap planning for the delivery of interdependencies within the initiative."
        ],
        styling: "one",
      },
      portfolio: [
        {
          img: 'Jammming.png',
          title: "Jammming",
          skills: ["React", "Node.js", "Spotify API"],
          description: "Jammming is a web app that allows a user to login to their Spotify profile using the Spotify API in order to search for songs and build playlists that will then be saved to their profile to listen to later.",
          gitlink: "example.com",
          position: "left",
        }, {
          img: "Jammming.png",
          title: "Jammming 2",
          skills: ["React", "Node.js", "Spotify API"],
          description: "Jammming is a web app that allows a user to login to their Spotify profile using the Spotify API in order to search for songs and build playlists that will then be saved to their profile to listen to later.",
          gitlink: "example.com",
          position: "right",
        },{
          img: "Jammming.png",
          title: "Jammming 3",
          skills: ["React", "Node.js", "Spotify API"],
          description: "Jammming is a web app that allows a user to login to their Spotify profile using the Spotify API in order to search for songs and build playlists that will then be saved to their profile to listen to later.",
          gitlink: "example.com",
          position: "left",
        },
      ],
      nav: "hidden",
      menu: "show",
      animation: "rightIn",
      emailAlert: "hidden1",
    }
    this.changeJob = this.changeJob.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
    this.emailAlertToggle = this.emailAlertToggle.bind(this);
  }
  
  changeJob(newJob) {
    const updatedJob = JSON.parse(newJob);
    this.setState({job: updatedJob});
  }

  changeDisplay() {
    if(this.state.nav === "hidden"){
      this.setState({nav: "show"});
      this.setState({menu: "hidden"});
    } else if (this.state.nav === "show"){
      this.setState({nav: "hidden"});
      this.setState({menu: "show"});
    }
  }

  emailAlertToggle(){
    if(this.state.emailAlert === "hidden1"){
      this.setState({emailAlert: "show1"})
    } else if(this.state.emailAlert === "show1"){
      this.setState({emailAlert: "hidden1"});
      const form = document.getElementById("contactForm");
      form.reset();
    }
  }

  render() {
    return(
      <body className="container">
        <header>
          <a href={"http://192.168.1.126:3000/"}><img className="logo fadeDown delay1" src={require("../../Images/logo.ico")} /></a>
          <div className={`nav ${this.state.nav} rightIn`}>
            <ul>
              <li className="delay2 fadeDown"><AnchorLink href="#aboutSection">About</AnchorLink></li>
              <li className="delay3 fadeDown"><AnchorLink href="#experienceSection">Experience</AnchorLink></li>
              <li className="delay4 fadeDown"><AnchorLink href="#portfolioSection">Portfolio</AnchorLink></li>
              <li className="delay5 fadeDown"><AnchorLink href="#contactSection">Contact</AnchorLink></li>
            </ul>
            <a href={require("../../CV/Jonathan Ford CV.pdf")} target="_blank"><button className="delay6 button fadeDown">CV</button></a>
          </div>
          <img className={`delay3 menu fadeDown ${this.state.menu}`} onClick={this.changeDisplay} src={require('../../Images/Menu.svg')}></img>
          <img className={`delay3 cross fadeDown ${this.state.nav}`} onClick={this.changeDisplay} src={require('../../Images/Cross.svg')}></img>
        </header>
        <section className="home" id="homeSection">
          <h1 className="j fadeUp">JONATHAN</h1>
          <p className="fadeUp" >A web developer based in Manchester, UK, specialised in building websites and web applications.</p>
          <h1 className="f fadeUp">FORD.</h1>
          <AnchorLink id="homeButton" href={"#contactSection"}><button className="button fadeUp">Contact</button></AnchorLink>
        </section>
        
          <section className="about" id="aboutSection">
            <ScrollAnimation className="delay1" animateIn="fadeUp" animateOnce="true">
              <h3 id="aboutTitle" className="title">About </h3>
              <div className="line"></div>
            </ScrollAnimation>
            <ScrollAnimation className="delay2" animateIn="fadeUp" animateOnce="true">
              <p>My name is Jonathan Ford and I'm a web developer based in Manchester, UK, currently looking for my next opportunity. I enjoy working in a fast paced evironment, working on exciting projects and creating innovative websites and applications to suit client needs.<br /><br />
              After graduating from the University of Hull with an MChem Chemistry degree, I joing Vodafone UK on the Technology Graduate scheme, working on numerous projects and finding my passion for all things technology.<br /><br />
              I off-boarded the Graduate scheme into a Technical Service Specialist role, where I supported and managed projects that delivered internal tooling in the form of web-applications for the management of the IT Infrastructure estate.<br /><br />
              This role homed in my passion for technology into web-development and has been the driving force for equipping my skills with the following technologies:</p>
            </ScrollAnimation>
            <ScrollAnimation className="delay3" animateIn="fadeUp" animateOnce="true"><img src={require("../../Images/Profile.jpg")}/></ScrollAnimation>
            <ScrollAnimation className="delay4" animateIn="fadeUp" animateOnce="true">
              <ul>
                <li>Javascript (ES6+)</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Git</li>
                <li>Bash</li>
                <li>SQL & Node-SQLite</li>
                <li>TDD (Mocha & Chai)</li>
              </ul>
            </ScrollAnimation>
          </section>
        <section className="experience" id="experienceSection">
          <ScrollAnimation className="delay1 test" animateIn="fadeUp" animateOnce="true">
            <h3 className="title">Experience</h3>
            <div className="line"></div>
          </ScrollAnimation>
          <ScrollAnimation className="delay2 test" animateIn="fadeUp" animateOnce="true">
            <Experience job={this.state.job} changeJob={this.changeJob} buttons={this.state.buttons} />
          </ScrollAnimation>
        </section>
        <section className="portfolio" id="portfolioSection">
          <ScrollAnimation className="delay1 test" animateIn="fadeUp" animateOnce="true">
            <h3 className="title">Portfolio</h3>
            <div className="line"></div>
          </ScrollAnimation>
          <Portfolio projects={this.state.portfolio}/>
        </section>
        <section className="contactSection" id="contactSection">
          <Contact emailToggle={this.emailAlertToggle} />
          <div className={`emailAlert ${this.state.emailAlert}`}>
          <img onClick={this.emailAlertToggle} src={require('../../Images/Cross.svg')}></img>
            <p>Thank you for your email, I will be in touch shortly. <br/><br/> Many Thanks, <br/><br/>Jonathan</p>
          </div>
        </section>
        <footer>
          <div className="footerline"></div>
          <p>Designed and Built by Jonathan Ford</p>
          <div className="socials">
            <a href='https://github.com/jonathanford94' target='_blank'><img src={require("../../Images/Github.svg")}/></a>
            <a href='https:www.linkedin.com/in/jonathan-ford-807058123/' target='_blank'><img src={require("../../Images/LinkedIn.svg")}/></a>
          </div>
        </footer>
      </body>
    )
  }
}

export default App;