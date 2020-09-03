import React from 'react';
import { Companies } from '../Companies/Companies';
import { Jobs } from '../Jobs/Jobs';
import './Experience.css';

export class Experience extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="experienceContainer">
                <Companies changeJob={this.props.changeJob} buttons={this.props.buttons} />
                <Jobs job={this.props.job}/>
            </div>
        )
    }
}