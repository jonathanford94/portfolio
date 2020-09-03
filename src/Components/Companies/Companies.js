import React from 'react';
import './Companies.css';
import { styling } from './styling.js';

const placement1 = {
    title: "Technical Service Specialist",
    date: "Aug18 - Apr20",
    description: [
        "Agile project management of web application for IT infrastructure estate management tool.",
        "Business case development for capitalisable benefit against investment.",
        "Budget forecasting and management to support business wide financial targets.",
        "Understanding end user requirements via analysis of tools, processes, people and data required for key business needs.",
        "Roadmap planning for the delivery of interdependencies within the initiative.",
    ],
    styling: styling.one,
};
const placement2 = {
    title: "IT Demand Specialist (Graduate Scheme)",
    date: "Sept17 - Aug18",
    description: [
        "IT project portfolio ownership for the Customer Operations business unit, consisting of waterfall and agile IT projects.",
        "Maintaining and constructing the delivery plans and coordinating with stakeholders, to align with key business go to market dates, technical releases and continuous prioritisation within the portfolio.",
        "Governance of the business demand and resource allocation from the delivering teams for the successful implementation of business initiatives.",
        "Budget management of the project portfolio (£8M) including forecasting, creating business cases and demand prioritisation.",
        "Relationship management with key senior stakeholders both in the Customer Operations business unit and IT department for the reporting of projects within the Customer Operations portfolio."
        
    ],
    styling: styling.two,
};
const placement3 = {
    title: "Roaming Networks Engineer (Graduate Scheme)",
    date: "Mar17 - Sep17",
    description: [
        "Monitoring of the International roaming network, to ensure the high performance for Vodafone’s customers, by identifying issues with Telco networks, raising tickets and working with the Telco to resolve the issue.",
        "Development of a monitoring solution to automatically identify issues with Telco’s networks, resulting in less manual time spent monitoring (2 hours daily).",
    ],
    styling: styling.three,
};
const placement4 = {
    title: "L2 Application Support (Graduate Scheme)",
    date: "Sept16 - Mar17",
    description: [
        "Billing relationship management system monitoring on the progress of daily payment jobs.",
        "Resolving issues reported within a Mobile Virtual Network Enabler IT stack.",
        "Process development and documentation of common issues and resolution within the IT stack.",
        "Managing demand for application development, implementing changes and liaising with stakeholders to understand requirements. ",
    ],
    styling: styling.four,
};

export class Companies extends React.Component {
    constructor(props){
        super(props);
        this.changeJob = this.changeJob.bind(this);
        this.state = {
            styling: styling.one,
        }
    }

    changeJob(event) {
        this.props.changeJob(event.target.value);
        const placementObject = event.target.value;
        const accessiblePlacementObject = JSON.parse(placementObject);
        this.setState({styling: accessiblePlacementObject.styling});
    }
 
    render() {
        return (
            <div className="companies">
                <div style={{ backgroundColor: this.state.styling.one}}></div>
                <button value={JSON.stringify(placement1)} onClick={this.changeJob} style={{ color: this.state.styling.one}} >Vodafone - TSS</button>
                <div style={{ backgroundColor: this.state.styling.two}}></div>
                <button value={JSON.stringify(placement2)} onClick={this.changeJob} style={{ color: this.state.styling.two}} >Vodafone - DS</button>
                <div style={{ backgroundColor: this.state.styling.three}} ></div>
                <button value={JSON.stringify(placement3)} onClick={this.changeJob} style={{ color: this.state.styling.three}} >Vodafone - RNE</button>
                <div style={{ backgroundColor: this.state.styling.four}}></div>
                <button value={JSON.stringify(placement4)} onClick={this.changeJob} style={{ color: this.state.styling.four}} >Vodafone - L2S</button>
            </div>
        )
    }
}
