// CODE here for your Lambda Classes

//Person Declaration

class Person {
    constructor(props) {
        this.name = props.name;
        this.location = props.location;
        this.age = props.age;
    }

    speak() {
        console.log(
            `Hello my name is ${this.name}, I am from ${this.location}`
        );
    }
}

//Instructor Declaration

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.faveLanguage = props.faveLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student = {}, subject = '') {
        console.log(
            `${this.name} graded ${student.name} and receives a perfect score on ${subject}`
        );
    }

    assignGrade(student) {
        student.grade +=
            (Math.round(Math.random()) * 2 - 1) *
            Math.round(Math.random() * 10);
        console.log(
            `${this.name} just gave ${student.name} a new grade of ${student.grade}`
        );
    }
}

//Instructor Variables

let javaInstructor = new Instructor({
    name: 'Johnathan',
    location: 'Brazil',
    age: 30,
    specialty: 'Cooking',
    faveLanguage: 'Portuguese',
    catchPhrase: 'NANANANANANANANA BATMAN',
});

let rubyInstructor = new Instructor({
    name: 'Catahula',
    location: 'Taiwan',
    age: 13,
    specialty: 'ruby',
    faveLanguage: 'ruby',
    catchPhrase: 'Ruby is Off the Rails',
});

let underwaterBasketWeavingInstructor = new Instructor({
    name: 'Tabelita',
    location: 'Uruguay',
    age: 65,
    specialty: 'Underwater Basket Weaving',
    faveLanguage: 'Haskell',
    catchPhrase: 'I like Bananas',
});

//Student Declaration

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects; //array
        this.grade = props.grade;
    }

    listsSubjects() {
        this.favSubjects.forEach(e => console.log(e));
    }

    PRAssignment(subject = '') {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject = '') {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }

    canTheyGraduate() {
        if (this.grade > 70) {
            console.log(
                `${this.name} just graduated from Lambda School! Great Job!`
            );
        } else {
            console.log(
                `${this.name} needs to little more help before graduating!`
            );
        }
    }
}

//Student Variables

let henry = new Student({
    name: 'Henry',
    location: 'U.S.A',
    age: 27,
    grade: 90,
    previousBackground: 'firefighter',
    className: 'WEB22',
    favSubjects: [
        'Classical Music',
        'Partial Derivatives',
        'Advanced Material Science',
    ],
});

let daisy = new Student({
    name: 'Daisy',
    location: 'New York',
    age: 21,
    grade: 90,
    previousBackground: 'oil rig operator',
    className: 'WEB17',
    favSubjects: [
        'Arrow Functions',
        'Interior Design',
        'Advanced Propulsion Systems',
    ],
});

let virgil = new Student({
    name: 'Virgil',
    location: 'U.S.A',
    age: 29,
    grade: 90,
    previousBackground: 'mission control operator',
    className: 'WEB22',
    favSubjects: [
        'Die Casting',
        'Surgical Procedures',
        'Manfacturing Fundamentals',
    ],
});

let lucas = new Student({
    name: 'Lucas',
    location: 'Russia',
    age: 55,
    grade: 50,
    previousBackground: 'elevator attendant',
    className: 'WEB22',
    favSubjects: [
        'Partical Physics',
        'Gravirty Wave Manipulation',
        'Cow Milking',
    ],
});

//Project Manager Declaration

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(channel = '') {
        console.log(
            `${this.name} annouces to ${channel}, @channel standy times!`
        );
    }

    debugsCode(student = {}, subject = '') {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

//Project Manager Variables

const superDaisy = new ProjectManager({
    name: 'Super Daisy',
    location: 'Nova York',
    age: 21,
    gradClassName: 'CS1',
    favInstructor: 'Carl',
});

/*
/ Instructor Calls
*/

javaInstructor.demo('Watch Making');
rubyInstructor.speak();
underwaterBasketWeavingInstructor.grade(henry, 'How to chill at all times');

/*
/ Student Calls
*/

henry.speak();
henry.PRAssignment('iOS development');
daisy.sprintChallenge('advanced janitorial services');
daisy.listsSubjects();
virgil.listsSubjects();
virgil.sprintChallenge('Swim Stroke Perfection');

/*
/ PM calls
*/

superDaisy.standUp('web_daisy');
superDaisy.debugsCode(virgil, 'Unicode Unit Testing');

/*
/ Stretch calls
*/

superDaisy.assignGrade(lucas);
lucas.canTheyGraduate();

function graduateStudent(student, pm) {
    let turns = 0;
    while (student.grade < 70) {
        student.canTheyGraduate();
        pm.assignGrade(student);
        turns++;
    }
    console.log(turns);
}

graduateStudent(lucas, superDaisy);
