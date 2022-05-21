import { React } from 'react';
import { PropTypes } from 'prop-types';
import styles from './ScheduleComponent.module.css';
import CourseInfoComponent from '../CourseInfoComponent/CourseInfoComponent';

const ScheduleComponent = ({scheduleNum}) => {
    return (
        <div className={styles['schedule-component-container']}>
            <div>
                schedule #{scheduleNum}
            </div>
            <CourseInfoComponent />
            <CourseInfoComponent />
            <CourseInfoComponent />
        </div>
    )
}

ScheduleComponent.propTypes = {
    scheduleNum: PropTypes.number.isRequired,
}

export default ScheduleComponent;