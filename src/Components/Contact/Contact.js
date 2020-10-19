import React from 'react';
import './Contact.css';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios';

export class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            nameError: '',
            email: '',
            emailError: '',
            subject: '',
            subjectError: '',
            message: '',
            messageError: '',
            formError:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
        if(e.target.name === "email" && !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(e.target.value)){
            this.setState({[`${e.target.name}Error`]: "Please enter a valid email"});
        }else if(e.target.name === "message" && e.target.value.length < 10){
            this.setState({[`${e.target.name}Error`]: "Please enter a message longer than ten characters"});
        }else if((e.target.value.length < 4 && e.target.name === "name") || (e.target.value.length < 4 && e.target.name === "subject")) {
            this.setState({[`${e.target.name}Error`]: `Please enter a ${e.target.name} longer than three characters`});
        }

        if(e.target.name === "email" && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(e.target.value)){
            this.setState({[`${e.target.name}Error`]: ""});
        }else if(e.target.name === "message" && e.target.value.length > 10){
            this.setState({[`${e.target.name}Error`]: ""});
        }else if((e.target.value.length > 3 && e.target.name === "name") || (e.target.value.length > 3 && e.target.name === "subject")){
            this.setState({[`${e.target.name}Error`]: ""});
        }

        this.setState({formError:""});
    }

    sendEmail(e) {
        e.preventDefault();

        if((/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(this.state.email) && (this.state.name.length >= 4) && (this.state.subject.length > 3) && (this.state.message.length > 10))){
            this.setState({formError:""});
            axios.post('/emailsender', {
                name: this.state.name,
                email: this.state.email,
                subject: this.state.subject,
                message: this.state.message,
            });
            this.props.emailToggle();
        }else{
            this.setState({formError:"Please complete the form correctly"});
        }
    }

    render() {
        return (
            <section className="contact" id="contactSection">
                <ScrollAnimation className="delay1 test" animateIn="fadeUp" animateOnce="true">
                    <h3 className="title">Contact</h3>
                    <div className="line"></div>
                </ScrollAnimation>
                <ScrollAnimation className="delay2" animateIn="fadeUp" animateOnce="true">
                    <p>To contact me regarding any opportunities or if you have any other questions or requests don't hesitate to contact me via the form below.</p>
                </ScrollAnimation>
                <ScrollAnimation className="delay3" animateIn="fadeUp" animateOnce="true">
                    <form id="contactForm" onSubmit={this.sendEmail} >
                        <input 
                            name="name"
                            id="form1" 
                            className="form" 
                            type="text" 
                            placeholder="Name" 
                            onChange={this.handleChange}
                            ></input>
                        <p id="formError">{this.state.nameError}</p>
                        <input 
                            name="email"
                            id="form2" 
                            className="form" 
                            type="text" 
                            placeholder="Email" 
                            onChange={this.handleChange}
                            ></input>
                        <input 
                            name="subject"
                            id="form3" 
                            className="form" 
                            type="text" 
                            placeholder="Subject" 
                            onChange={this.handleChange}
                            ></input>
                        <p id="formError">{this.state.emailError}</p>
                        <p id="formError">{this.state.subjectError}</p>
                        <textarea 
                            name="message"
                            id="form4" 
                            className="form" 
                            placeholder="Message" 
                            onChange={this.handleChange}
                            ></textarea>
                        <p id="formError">{this.state.messageError}</p>
                        <p id="formError">{this.state.formError}</p>
                        <input id="form5" className="button" type="submit" value="Submit" onClick={this.sendEmail}></input>
                    </form>
                </ScrollAnimation>
            </section>
        )
    }
}