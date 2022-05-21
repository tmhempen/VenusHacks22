import { React } from 'react';
import styles from './CourseInfoComponent.module.css'

const CourseInfoComponent = () => {
    return (
        <div className={styles['course-info-component-container']}>
            <div className={styles['course-logistics']}>
                <div>course title</div> 
                <div>instructor</div>
                <div>when</div>
                <div>where</div>
            </div>
            <div className={styles['course-code']}>
                course code: ######
            </div>
        </div>
    )
}

export default CourseInfoComponent;