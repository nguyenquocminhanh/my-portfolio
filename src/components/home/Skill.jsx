import React, { Component } from 'react';
import axios from 'axios';
import AppURL from '../../api/AppURL';

class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [],
            educations: [],
            awards: [],
            experiences: [],
        }
    }

    componentDidMount = () => {
        axios.get(AppURL.AllSkill).then(response => {
            if(response.status == 200) {
                this.setState({
                    skills: response.data['skills'],
                    educations: response.data['educations'],
                    awards: response.data['awards'],
                    experiences: response.data['experiences']
                });
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        let skills = this.state.skills.map(skill => {
            return <div className='col-md-6' key={skill['id']}>
                    <p className="h6 mb-2">{skill['name']}</p>
                    <div className="progress mb-5 rounded-0 bg-white" style={{height: "9px", border: 'solid 2px #050CDD', maxWidth: '80%'}}>
                        <div className="progress-bar" role="progressbar" style={{width: skill['percentage']}} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>});
        let educations = this.state.educations.map(edu => {
            return <div className='col-md-12 text-center text-lg-left p-0 mb-6' key={edu['id']}>
                    <p className="h6 mb-0">{edu['school']}</p>
                    <p className="text-muted">{edu['description']}</p>
                </div>});
        let awards = this.state.awards.map(award => {
            return <div className='col-md-12 text-center text-lg-left p-0 mb-6' key={award['id']}>
                        <p className="h6 mb-0">{award['name']}</p>
                        <p className="text-muted">{award['description']}</p>
                </div>});
        let experiences = this.state.experiences.map(ex => {
            return <div className="col-lg-4 mb-5 mb-lg-0 text-center text-lg-left" key={ex['id']}>
                    <p className="h5 mb-0">{ex['duration']}</p>
                    <p className="h6 mb-0">{ex['position']}</p>
                    <br></br>
                    <p>{ex['description']}</p>
                </div>});

        return (
            // skill
            <section className="py-9 bg-light">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-lg-9 text-center text-lg-left">
                            <h2 className="mb-4">Skills</h2>
                        </div>
                    </div>

                    <div className="row mb-6 mb-xl-9">
                        {skills}
                    </div>


                    <div className="row mb-6 mb-xl-9">
                        <div className="col-md-6 mb-7 mb-md-0">
                            <h5 className="h3 text-center text-lg-left mb-6">Education</h5>
                            {educations}
                        </div>

                        <div className="col-md-6">
                            <h5 className="h3 text-center text-lg-left mb-6">Certification</h5>
                            {awards}
                        </div>
                    </div>

                    <h2 className="text-center text-lg-left mb-6">Experience</h2>

                    <div className="row mb-4">
                        {experiences}
                    </div>

                </div>
            </section>
        );
    }
}

export default Skill;