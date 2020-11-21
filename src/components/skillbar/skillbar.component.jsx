import React from 'react';
import { Progress, Segment } from 'semantic-ui-react';
import './skillbar.styles.scss';

const SkillBars = () => (
    <Segment inverted className='skills'>
        <Progress percent={85} inverted error progress label='HTML/CSS' />
        <Progress percent={80} inverted error progress label='Javascript' />
        <Progress percent={70} inverted error progress label='React.js' />
        <Progress percent={85} inverted error progress label='SQL/MongoDB' />
        <Progress percent={45} inverted error progress label='Node.js' />
        <Progress percent={85} inverted error progress label='Python' />
        <Progress percent={75} inverted error progress label='Machine Learning / Deep Learning' />
        <Progress percent={90} inverted error progress label='Adobe Creative Suite' />
    </Segment>
)

export default SkillBars;