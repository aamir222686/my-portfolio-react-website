import React from 'react';
import './project-card.styles.scss';
import 'tachyons';
import { Icon } from 'semantic-ui-react';

const ProjectCard = (props) => (
    <>
        <section class="card-container grow">
            <div class="content-wrapper">
                <img src={props.imageUrl} class="image" alt="svg-element" />
                <div class="text-wrap">
                    <p class="title">{props.title}</p>
                    <p class="description">{props.description}</p>
                    <a class="button " href={`${props.link}`} target='_blank'>View On Github
                    <Icon className='icon' color='red' size='small' name='arrow right' />
                    </a>
                </div>
            </div>
        </section>

    </>
)

export default ProjectCard; 