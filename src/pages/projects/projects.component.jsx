import React from 'react';
import './projects.styles.scss';
import ProjectCard from '../../components/project-card/project-card.component';
import webdev from '../../assets/webdev-img.svg';
import ml from '../../assets/ml-img.svg';
import dl from '../../assets/dl-img.svg';
import Zoom from 'react-reveal/Zoom';


class ProjectsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    title: 'Web Development',
                    id: 1,
                    description: 'Projects created using React.js, Express.js and Node.js',
                    imageUrl: webdev,
                    link: 'https://github.com/aamir222686/Web-Development-Projects-and-Experiments'
                },
                {
                    title: 'Machine Learning',
                    id: 2,
                    description: 'Machine Learning notebooks showcasing work on different types of datasets.',
                    imageUrl: ml,
                    link: 'https://github.com/aamir222686/my_datascience_notebooks'
                },
                {
                    title: 'Deep Learning',
                    id: 3,
                    description: 'Notebooks showcasing work on different kinds of Neural Networks.',
                    imageUrl: dl,
                    link: 'https://github.com/aamir222686/ANN_CNN_RNN_Projects'
                }
            ]
        }
    }
    render() {
        return (
            <div className='projects-container'>
                <Zoom>
                    {
                        this.state.projects.map(item =>
                            <ProjectCard key={item.id} title={item.title}
                                description={item.description} imageUrl={item.imageUrl}
                                link={item.link} />)
                    }
                </Zoom>
            </div>
        )
    }
}

export default ProjectsPage;