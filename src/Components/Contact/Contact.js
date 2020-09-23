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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
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
                    <form >
                        <input 
                            name="name"
                            id="form1" 
                            className="form" 
                            type="text" 
                            placeholder="Name" 
                            onChange={this.handleChange}
                            ></input>
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