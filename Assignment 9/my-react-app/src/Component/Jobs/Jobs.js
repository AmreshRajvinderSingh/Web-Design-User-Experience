import React from 'react';
import './Jobs.css';
import Card from '../Card';

const Jobs = () => {
    const jobsList = [
        { 
            id: 1, 
            title: 'Application Developer', 
            content: 'Seeking a full-stack developer with expertise in React, Node.js, and cloud services. Responsibilities include building scalable applications, collaborating in a team environment, and contributing to all phases of the development lifecycle. Benefits include remote work options, health insurance, and a 401(k) plan.'
        },
        { 
            id: 2, 
            title: 'Product Manager', 
            content: 'As a Product Manager, you will guide the development of our innovative products from conception to launch. Ideal candidates should have a background in product lifecycle management, excellent teamwork skills, and a passion for delivering user-centric solutions. We offer a competitive salary, flexible working hours, and an inclusive work environment.'
        },
        {
            id: 3,
            title: 'UX/UI Designer',
            content: 'Looking for a creative UX/UI Designer to enhance the user experience of our digital products. The role involves designing intuitive interfaces, conducting user research, and collaborating closely with developers and product managers. Applicants should be proficient in design tools like Sketch or Figma. Perks include a wellness program, continuing education credits, and regular team retreats.'
        },
        
    ];

    const renderJobs = (job) => (
        <Card key={job.id} title={job.title} content={job.content} />
    );

    return (
        <div className="jobs">
            <h2>Explore Our Career Opportunities</h2>
            <p>Join our team to work in an innovative and supportive environment. We value creativity, collaboration, and commitment to excellence. Check out our current openings:</p>
            {jobsList.map(renderJobs)}
            <p>Interested in joining us? Send your resume to <a href="mailto:careers@example.com">careers@example.com</a>. We look forward to hearing from you!</p>
        </div>
    );
}

export default Jobs;
