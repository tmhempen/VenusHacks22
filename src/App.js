import { React } from 'react';
import logo from './logo.svg';

import styles from './App.module.css';

// import CourseInputComponent from './components/courseInputComponent/CourseInputComponent';
import CourseSelectionComponent from './components/CourseSelectionComponent/CourseSelectionComponent';
import ScheduleComponent from './components/ScheduleComponent/ScheduleComponent';

function Home() {
  // const classNum = 1;
  
  return (
    <div className={styles['Home']}>
      <div className={styles['title']}>
        petr planner
      </div>

      <div className={styles['description']}>
        welcome to petr planner, the perfect planning 
        tool for Peter the Commuter and his friends. 
        just enter your classes and we'll help you 
        find the best schedule for minimizing days 
        on campus and time between classes!
      </div>

      <div className={styles['boxes']}>
        <div className={styles['course-selection']}>
          <CourseSelectionComponent />
        </div>
        <div className={styles['schedule']}>
          <ScheduleComponent />
        </div>
      </div>

    </div>
  );
}

export default Home;
