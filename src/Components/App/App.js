import React from 'react';
import './App.css';
import { Experience } from '../Experience/Experience';
import { Portfolio } from '../Portfolio/Portfolio';
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
    }
    this.changeJob = this.changeJob.bind(this);
  }
  
  changeJob(newJob) {
    const test = JSON.parse(newJob);
    this.setState({job: test});
  }

  render() {
    return(
      <body className="container">
        <header>
          <a href={"http://localhost:3000/"}><img className="logo" src={require("../../Images/logo.ico")} /></a>
          <div className="nav">
            <ul>
              <li><AnchorLink href={"#aboutSection"}>About</AnchorLink></li>
              <li><AnchorLink href={"#experienceSection"}>Experience</AnchorLink></li>
              <li><AnchorLink href="#portfolioSection">Portfolio</AnchorLink></li>
              <li><AnchorLink href={"#contactSection"}>Contact</AnchorLink></li>
            </ul>
            <a href={require("../../CV/Jonathan Ford CV.pdf")} target="_blank"><button className="CV button">CV</button></a>
          </div>
        </header>
        <section className="home" id="homeSection">
          <h1 className="j">JONATHAN</h1>
          <h1 className="f">FORD.</h1>
          <p>A web developer based in Manchester, UK, specialised in building websites and web applications.</p>
          <AnchorLink href={"#contactSection"}><button className="button">Contact</button></AnchorLink>
        </section>
        <section className="about" id="aboutSection">
          <h3 className="title">About</h3>
          <div className="line"></div>
          <p>My name is Jonathan Ford and I'm a web developer based in Manchester, UK, currently looking for my next opportunity. I enjoy working in a fast paced evironment, working on exciting projects and creating innovative websites and applications to suit client needs.<br /><br />
          After graduating from the University of Hull with an MChem Chemistry degree, I joing Vodafone UK on the Technology Graduate scheme, working on numerous projects and finding my passion for all things technology.<br /><br />
          I off-boarded the Graduate scheme into a Technical Service Specialist role, where I supported and managed projects that delivered internal tooling in the form of web-applications for the management of the IT Infrastructure estate.<br /><br />
          This role homed in my passion for technology into web-development and has been the driving force for equipping my skills with the following technologies:</p>
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
          <img src={require("../../Images/Profile.jpg")}/>
        </section>
        <section className="experience" id="experienceSection">
          <h3 className="title">Experience</h3>
          <div className="line"></div>
          <Experience job={this.state.job} changeJob={this.changeJob} buttons={this.state.buttons} />
        </section>
        <section className="portfolio" id="portfolioSection">
          <h3 className="title">Portfolio</h3>
          <div className="line"></div>
          <Portfolio projects={this.state.portfolio}/>
        </section>
        <section className="contact" id="contactSection">
          <h3 className="title">Contact</h3>
          <div className="line"></div>
          <p>To contact me regarding any opportunities or if you have any other questions or requests don't hesitate to contact me via the form below.</p>
          <form action="MAILTO:jnf1994@yahoo.co.uk" method="post" encType="text/plain" >
            <input id="form1" className="form" type="text" placeholder="Name"></input>
            <input id="form2" className="form" type="text" placeholder="Email"></input>
            <input id="form3" className="form" type="text" placeholder="Subject"></input>
            <textarea id="form4" className="form" placeholder="Message"></textarea>
            <input id="form5" className="button" type="submit" value="Submit"></input>
          </form>
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