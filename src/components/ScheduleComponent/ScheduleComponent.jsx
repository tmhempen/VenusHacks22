import { React } from 'react';
import styles from './ScheduleComponent.module.css';
import CourseInfoComponent from '../CourseInfoComponent/CourseInfoComponent';

const ScheduleComponent = () => {
    return (
        <div className={styles['schedule-component-container']}>
            <CourseInfoComponent />
            <CourseInfoComponent />
            <CourseInfoComponent />
        </div>
    )
}

export default ScheduleComponent;