import React from 'react';
import './Contact.css';
import ScrollAnimation from 'react-animate-on-scroll';

const customStyles = {
    content: {
        top: 'calc(50% + 27.5px)',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '35%',
        minWidth: '250px',
        height: '25%',
        minHeight: '250px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: "0",
        borderRadius: "3px",
        border: "none"
    }
};

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
            
            resData: '',
            
            modalIsOpen: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submit= this.submit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.state.name === '') {
            this.setState({
                nameError: 'Please provide your name'
            })
        } else {
            this.setState({
                nameError: ''
            })
        }

        if (this.state.email === '') {
            this.setState({
                emailError: 'Please provide an email address'
            })
        } else if (this.state.email === /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ || this.state.email.indexOf('.') === -1 ) {
            this.setState({
                emailError: 'Please provide a valid email address'
            })
        } else {
            this.setState({
                emailError: ''
            })
        }

        if (this.state.subject === '') {
            this.setState({
                subjectError: 'Please provide a subject message'
            });
        } else {
            this.setState({
                subjectError: ''
            });
        }

        if (this.state.message === '') {
            this.setState({
                messageError: 'Please leave a message'
            })
        } else {
            this.setState({
                messageError: ''
            })
        }
    }

    submit(){
        alert(this.state.name + this.state.subject + this.state.email + this.state.message);
    }

    render() {
        return (
            <section className="contact" id="contactSection">
                <ScrollAnimation className="delay1" animateIn="fadeUp" animateOnce="true">
                    <h3 className="title">Contact</h3>
                    <div className="line"></div>
                </ScrollAnimation>
                <ScrollAnimation className="delay2" animateIn="fadeUp" animateOnce="true">
                    <p>To contact me regarding any opportunities or if you have any other questions or requests don't hesitate to contact me via the form below.</p>
                </ScrollAnimation>
                <ScrollAnimation className="delay3" animateIn="fadeUp" animateOnce="true">
                    <form >
                        <input 
                            name="name"
                            id="form1" 
                            className="form" 
                            type="text" 
                            placeholder="Name" 
                            onChange={this.handleChange}
                            ></input>
                        <p className="form-error">{this.state.nameError}</p>
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
                        <p className="form-error">{this.state.emailError}</p>
                        <p className="form-error">{this.state.subjectError}</p>
                        <textarea 
                            name="message"
                            id="form4" 
                            className="form" 
                            placeholder="Message" 
                            onChange={this.handleChange}
                            ></textarea>
                        <p className="form-error">{this.state.messageError}</p>
                        <input id="form5" className="button" type="submit" value="Submit" onClick={this.onSubmit}></input>
                    </form>
                </ScrollAnimation>
            </section>
        )
    }
}