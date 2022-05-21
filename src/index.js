import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

const getCourseInfo = async (course) => {
  const url = 'https://api.peterportal.org/rest/v0/schedule/soc?';

  const response = await fetch(url + course);
  const data = await response.json();
  console.log('data', data);

  // Process data into dictionary of different sections
  

};

console.log('hi');
getCourseInfo('term=2018%20Fall&department=COMPSCI&courseNumber=161');


// function Course(props) {
  
//   const [courseInfo, setCourseInfo] = useState({});

//   const url = 'https://api.peterportal.org/rest/v0/courses/';
  
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(url + props.name);
//       const data = await response.json();
//       console.log(data);
//       setCourseInfo(data);
//     }
//     fetchData();
//   }, [props.name]);

//   const courseStartTime = courseInfo.startTime;
//   const courseEndTime = courseInfo.endTime;

// }

const getMilitaryTime= (course_time) => { //course_time is a string in 12 hour format
  let time = 0;
  let format_time = course_time;
  if (course_time.length < 7) {
    format_time = "0" + course_time; //add a leading 0 if need be
  }
  if (format_time.substring(5, 7) === 'PM'){
    time += 1200;
  }
  time += (Number.parseInt(course_time.substring(0, 2), 10) * 100); //adding hours
  time += (Number.parseInt(course_time.substring(3, 5), 10)); //adding minutes
  return time;
}

const getDays = (course) => { //given a string of days, return an array of all the days
  //(M)?(Tu)?(W)?(Th)?(F)? my regex expression....
}

const timeOverlap = (courseA, courseB) => { //courseA and courseB are ummm things from PeterPortal API where you can access these descriptions??
  const start_A = getMilitaryTime(courseA.startTime)
  const start_B = getMilitaryTime(courseB.startTime)
  const end_A = getMilitaryTime(courseA.endTime)
  const end_B = getMilitaryTime(courseB.endTime)
  if (start_B < start_A){ //If course B starts before A,
    return end_B > start_A //Then check if B ends after A starts (if they do, it overlaps)
  }
  else {
    return end_A > start_B //If course A starts before B, then check if A ends after B starts
  }
}

const calculateGap = (courseA, courseB) => { //these courses do not overlap, also returns in minutes
  const start_A = getMilitaryTime(courseA.startTime)
  const start_B = getMilitaryTime(courseB.startTime)
  const end_A = getMilitaryTime(courseA.endTime)
  const end_B = getMilitaryTime(courseB.endTime)
  if (start_A < start_B){
    return end_B - end_A
  }
  return end_A - end_B
}

const getTime = (class_name) => {

}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
