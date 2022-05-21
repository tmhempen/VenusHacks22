import { React } from 'react';
import styles from './CourseSelectionComponent.module.css';
import CourseInputComponent from '../courseInputComponent/CourseInputComponent';

const CourseSelectionComponent = () => {

    return (
        <div className={styles['course-selection-component-container']}>
            <CourseInputComponent classNum={1}/>
            <CourseInputComponent classNum={2}/>
            <CourseInputComponent classNum={3}/>
            <CourseInputComponent classNum={4}/>
            <button type="button" className={styles['get-schedule-button']}>get schedule</button>
        </div>
    );
}

export default CourseSelectionComponent;