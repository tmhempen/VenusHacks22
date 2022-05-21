import { React, useState } from 'react';
import { PropTypes } from 'prop-types';
// import Dropdown from 'react-bootstrap/Dropdown';
import styles from './CourseInputComponent.module.css';

const CourseInputComponent = ( {classNum} ) => {
    const [selectedDept, setSelectedDept] = useState('Select Department');
    const [showDropdown, setShowDropdown] = useState(false);
    
    const departments = {
        "AC ENG": "Academic English and ESL",
        "AFAM": "African American Studies",
        "ANATOMY": "Anatomy and Neurobiology",
        "ANESTH": "Anesthesiology",
        "ANTHRO": "Anthropology",
        "ARABIC": "Arabic",
        "ARMN": "Armenian",
        "ART": "Art",
        "ART HIS": "Art History",
        "ARTSHUM": "Arts and Humanities",
        "ASIANAM": "Asian American Studies",
        "BANA": "Business Analytics",
        "BATS": "Biomedical and Translational Science",
        "BIO SCI": "Biological Sciences",
        "BIOCHEM": "Biological Chemistry",
        "BME": "Biomedical Engineering",
        "CAMPREC": "Campus Recreation",
        "CBE": "Chemical and Biomolecular Engineering",
        "CEM": "Community and Environmental Medecine",
        "CHC/LAT": "Chicano Latino",
        "CHEM": "Chemistry",
        "CHINESE": "Chinese",
        "CLASSIC": "Classics",
        "CLT&THY": "Culture & Theory",
        "COGS": "Cognitive Sciences",
        "COM LIT": "Comparative Literature",
        "COMPSCI": "Computer Science",
        "CRITISM": "Criticism",
        "CRM/LAW": "Criminology, Law and Society",
        "CSE": "Computer Science and Engineering",
        "DANCE": "Dance",
        "DERM": "Dermatology",
        "DEV BIO": "Developmental and Cell Biology",
        "DRAMA": "Drama",
        "EARTHSS": "Earth System Science",
        "EAS": "East Asian Studies",
        "ECO EVO": "Ecology and Evolutionary Biology",
        "ECON": "Economics",
        "ECPS": "Embedded and Cyber-Physical Systems",
        "ED AFF": "Educational Affairs (Sch of Med)",
        "EDUC": "Education",
        "EECS": "Electrical Engineering & Computer Science",
        "EHS": "Environmental Health Sciences",
        "ENGLISH": "English",
        "ENGR": "Engineering",
        "ENGRCEE": "Engineering, Civil and Environmental",
        "ENGRMAE": "Engineering, Mechanical and Aerospace",
        "EPIDEM": "Epidemiology",
        "ER MED": "Emergency Medecine",
        "EURO ST": "European Studies",
        "FAM MED": "Family Medecine",
        "FIN": "Finance",
        "FLM&MDA": "Film and Media Studies",
        "FRENCH": "French",
        "GDIM": "Game Design and Interactive Media",
        "GEN&SEX": "Gender and Sexuality Studies",
        "GERMAN": "German",
        "GLBL ME": "Global Middle East Studies",
        "GLBLCLT": "Global Cultures",
        "GREEK": "Greek",
        "HEBREW": "Hebrew",
        "HINDI": "Hindi",
        "HISTORY": "History",
        "HUMAN": "Humanities",
        "HUMARTS": "Humanities and Arts",
        "I&C SCI": "Information and Computer Science",
        "IN4MATX": "Informatics",
        "INNO": "Masters of Innovation and Entrepreneurship",
        "INT MED": "Internal Medicine",
        "INTL ST": "International Studies",
        "IRAN": "Iranian",
        "ITALIAN": "Italian",
        "JAPANSE": "Japanese",
        "KOREAN": "Korean",
        "LATIN": "Latin",
        "LAW": "Law",
        "LIT JRN": "Literary Journalism",
        "LPS": "Logic and Philosophy of Science",
        "LSCI": "Language Science",
        "M&MG": "Microbiology and Molecular Genetics",
        "MATH": "Mathematics",
        "MED": "Medicine",
        "MED ED": "Medical Education",
        "MED HUM": "Medical Humanities",
        "MGMT": "Management",
        "MGMT EP": "Executive MBA",
        "MGMT FE": "Fully Employed MBA",
        "MGMT HC": "Health Care MBA",
        "MGMTMBA": "Management MBA",
        "MGMTPHD": "Management PhD",
        "MIC BIO": "Microbiology",
        "MOL BIO": "Molecular Biology and Biochemistry",
        "MPAC": "Accounting",
        "MSE": "Materials Science and Engineering",
        "MUSIC": "Music",
        "NET SYS": "Networked Systems",
        "NEURBIO": "Neurobiology and Behavior",
        "NEUROL": "Neurology",
        "NUR SCI": "Nursing Science",
        "OB/GYN": "Obstetrics and Gynecology",
        "OPHTHAL": "Ophthalmology",
        "PATH": "Pathology and Laboratory Medicine",
        "PED GEN": "Pediatrics Genetics",
        "PEDS": "Pediatrics",
        "PERSIAN": "Persian",
        "PHARM": "Medical Pharmacology",
        "PHILOS": "Philosophy",
        "PHRMSCI": "Pharmaceutical Sciences",
        "PHY SCI": "Physical Sciences",
        "PHYSICS": "Physics",
        "PHYSIO": "Physiology and Biophysics",
        "PLASTICS": "Plastic Surgery",
        "PM&R": "Physical Medicine and Rehabilitation",
        "POL SCI": "Political Science",
        "PORTUG": "Portuguese",
        "PSCI": "Psychological Science",
        "PSYCH": "Psychology",
        "PUB POL": "Public Policy",
        "PUBHLTH": "Public Health",
        "RADIO": "Radiology",
        "REL STD": "Religious Studies",
        "ROTC": "Reserve Officers' Training Corps",
        "RUSSIAN": "Russian",
        "SOC SCI": "Social Science",
        "SOCECOL": "Social Ecology",
        "SOCIOL": "Sociology",
        "SPANISH": "Spanish",
        "SPPS": "Social Policy & Public Service",
        "STATS": "Statistics",
        "SURGERY": "Surgery",
        "SWE": "Software Engineering",
        "TAGALOG": "Tagalog",
        "TOX": "Toxicology",
        "UCDC": "UC Washington DC",
        "UNI AFF": "University Affairs",
        "UNI STU": "University Studies",
        "UPPP": "Urban Planning and Public Policy",
        "VIETMSE": "Vietnamese",
        "VIS STD": "Visual Studies",
        "WRITING": "Writing",
    };

    // const DropdownOptions = () => (
    //     <div>
    //        {
    //            Object.keys(departments).map(department => {
    //             // console.log(department, typeof department);
    //             return (
    //                 <Dropdown.Item
    //                     // as="button"
    //                     // id={department}
    //                     as="button"
    //                     eventKey={department}
    //                     key={department}
    //                     // onClick={() => {
    //                     //     console.log(department);
    //                     //     setSelectedDpt({department});
    //                     //     console.log('selected');
    //                     // }}
    //                 >
    //                     {department}: {departments.department}
    //                 </Dropdown.Item>
    //             )
    //             })
    //        } 
    //     </div>
    // );

    // console.log('keys', Array.isArray(Object.keys(departments)), Object.keys(departments));
    // console.log('dropdown options', Array.isArray(dropdownOptions));
    // console.log('array from', typeof Array.from(Object.keys(departments)));
    // console.log(typeof Object.keys(departments)[0],Object.keys(departments)[0], 'object keys');

    return (
        <div className={styles['course-input-component-container']}>
            <div className={'class-number-desc'}><i>Class #{classNum}</i></div>
            {/* <div>{classNumber}</div> */}
            <label for="department-name-input" className={styles['input-label']}>Department:</label>
            <input form="text" name="department-name-input" className={styles['input-text-field']}></input>
            {/* <Dropdown
            onSelect={(eventKey) => {
                console.log(eventKey);
                setSelectedDept(eventKey);
                console.log(selectedDept);
                setShowDropdown(false);
            }}
            autoClose={true}
            show={showDropdown}>
                <Dropdown.Toggle
                    as="button"
                    onClick={() => setShowDropdown(true)}
                >
                    {selectedDept}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <DropdownOptions />
                </Dropdown.Menu>
            </Dropdown> */}
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