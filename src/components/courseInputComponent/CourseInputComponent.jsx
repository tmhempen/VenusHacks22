import { React } from 'react';
import { PropTypes } from 'prop-types';
import styles from './CourseInputComponent.module.css';

const CourseInputComponent = ( {classNum} ) => {
    // var classNum = 1
    return (
        <div className={styles['course-input-component-container']}>
            <div className={'class-number-desc'}><i>Class #{classNum}</i></div>
            {/* <div>{classNumber}</div> */}
            <label for="department-name-input" className={styles['input-label']}>Department:</label>
            <input form="text" name="department-name-input" className={styles['input-text-field']}></input>
            <br></br>
            <label for="course-number-input" className={styles['input-label']}>Course Number:</label>
            <input form="text" name="course-number-input" className={styles['input-text-field']}></input>
        </div>
    );
}

CourseInputComponent.propTypes = {
    classNum: PropTypes.number.isRequired,
}

export default CourseInputComponent;