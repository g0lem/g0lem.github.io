
const parseSkills = skills => skills.join(' • ') 


const PersonalData = (props) => {
    return `
    <div class="PersonalData">
        <img src="photo.jpg" alt="me"/>
        <div>
            <h1><b>Ștefan-Alexandru Șerb</b></h1>
            <h3><b><i>Team Lead and Senior Fullstack Developer</b></i></h3>
            <p>I have 7 years of development on the job and over 10 years of programming experience overall</p>
        </div>
    </div>
    `
}

const Item = (item) => `<li>${item}</li>` ;

const Experience = (props) => {
    return `
        <div class="experience">
            <h4>${props.title}</h4>
            <ul>
                ${props.items.map(item=>Item(item)).reduce((acc, elm)=>acc+=elm,'')}
            </ul>
        </div>
    `
}

const JobExperience = (props) => {
    return `
    <div class="jobExperience">
        <img src="${props.image}"/>
        <div>

            <h1>🐱‍💻 ${props.name}</h1>
            <h2>⏰ ${props.time}</h2>
            <h3>🏢 ${props.company}</h3>
            <p>
                <b>
                    Skills: ${parseSkills(props.skills)}
                </b>
            </p>
            <p>${props.description}</p>
        </div>
    </div>
    `
}



const indexComponents = [
    PersonalData(),
    Experience({
        title: 'Experience with Programming Languages: ',
        items: [
            'JavaScript - 8 years',
            'TypeScripte - 3 years',
            'C/C++ - 3 years (prefer C, since C++ standars change a lot)',
            'Java - 1 year',
        ]
    }),
    Experience({
        title: 'Experience with DataBases: ',
        items: [
            'MondoDB - 5 years',
            'SQL (mySQL) - 2 years',
        ]
    }),

    Experience({
        title: 'Experience with Frameworks: ',
        items: [
            'NodeJS - 7 years',
            'React - 7 years',
            'Angular - 2 years',
        ]
    }),
    JobExperience({
        name: 'Frontend Team Lead',
        company: 'Whitestone Software',
        time: 'September 2022 - Present',
        image: 'whitestone.png',
        skills: [
            'Software Architecture', 
            'Leadership', 
            'Communication', 
            'Game Engine Architecture',
            'WASM',
            'C/C++'
        ],
        description: `
            I've been in charge of a team of 12 developers which delivered multiple projects, the biggest one being the total refactoring of our main app, 
            we migrated everything towards a more modern stack. This app also was split in multiple components based on responsabilities,
            we had a component library, a client app and a WebGL based game engine. This was built using PIXI, React and Redux, the main
            challenge of the project was coordination and the modularity of everything, keeping it simple, yet make it do a lot.
        `,
    }),
    JobExperience({
        name: 'Freelancer & Physics Student',
        company: 'University of Bucharest',
        time: 'October 2021 - September 2022',
        image: 'physics.png',
        skills: [
            'Independent Development',
            'Vectorial Mathematics',
            'Advanced Calculus',
            'Numerical Methods',
            'JavaScript & TypeScript',
            'NodeJS',
            'WASM',
            'C/C++',
            'OpenGL/WebGL/GLES (with WASM)'
        ],
        description: `
            I've developed websites for some clients, I also developed some basic simulation software using C/C++. 
            I also exported those simulations to the web using WASM and I created a TypeScript game engine from scratch (without any external dependencies except the build proceedure ones).
        `
    }),
    JobExperience({
        name: 'Fullstack Developer',
        company: 'OcProd - IBM contractor',
        time: 'August 2020 - October 2021',
        image: 'ibm.png',
        skills: [
            'Test Driven Development',
            'JavaScript & TypeScript',
            'Microservices',
            'NodeJS',
            'React',
            'Redux',
            'MongoDB',
        ],
        description: 'I worked on refactoring a pre-existing payment system for one of our clients. This included the upgrade to a totally different API, payment logs, reports, discount systems and the design and functionality of the shopping cart itself.',
    }),
    JobExperience({
        name: 'Fullstack Developer',
        company: 'DPD Group',
        time: 'October 2019 - August 2020',
        description: `
            I helped develop applications that handeled contracts, transactions and payments for the delivery drivers working on a freelance business model. 
            This had to handle all sorts of aspects, such as the type of the vehicle 
            (is it electric, is it leased or owned by the freelancer), the different types of quotas, the different types of contracts each driver had, etc.
            This was an internal tool to handle all of the payments.
            `,
        image: 'dpd.png',
        skills: [
            'Microservices',
            'NodeJS',
            'Angular',
            'JavaScript & TypeScript',
            'SQL',
        ],
    }),
    JobExperience({
        name: 'Fullstack Developer',
        company: 'UpTrek',
        time: 'May 2018 - August 2019',
        description: `
            I had to build a single page modern web application and a Content Management System from scratch using NodeJS, React and MongoDB. 
            I also did SEO and loading speed optimizations on it. I worked alone on this project for about a year.
            I learned a lot about Architecture, how to properly structure both a NodeJS server, using database schemas and creating a modern frontend app.
            I also started learning about Clean Code and reading Uncle Bob's (Robert C. Martin) books on the topic.
        `,
        image: 'uptrek.svg',
        skills: [
            'Architecture',
            'Clean Coding',
            'Monolith vs Microservices',
            'NodeJS',
            'React',
            'Redux',
            'MongoDB',
        ],
    }),
    JobExperience({
        name: 'Junior Fullstack Developer',
        company: 'Simplity BI Solutions',
        time: 'October 2017 - May 2018',
        description: 'I helped build a data management system intended for businesses.',
        image: 'simplity.png',
        skills: [
            'Java (Spring Boot)',
            'React',
            'Redux',
            'Groovy',
        ],
    }),
    JobExperience({
        name: 'Student & Freelancer',
        company: 'University Politehnica of Bucharest',
        time: 'October 2016 - October 2017',
        description: 'I developed different web apps using the old MEAN stack: MongoDB AngularJS (the first version), Express and NodeJS. I also developed a game engine and a game itself using C++ and OpenGL',
        image: 'poli.png',
        skills: [
            'C/C++',
            'Mongo',
            'AngularJS',
            'NodeJS',
            'OpenGL'
        ],
    }),
];

const render = () => indexComponents.reduce((acc, elm)=>acc+elm, '')

document.body.innerHTML = render();