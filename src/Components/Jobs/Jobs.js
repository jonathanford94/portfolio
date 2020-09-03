import React from 'react';
import './Jobs.css';

export class Jobs extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="job">
                <h1>{this.props.job.title}</h1>
                <h2>{this.props.job.date}</h2>
                <ul>
                    {
                        this.props.job.description.map(desc => {
                            return <li>{desc}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}