import caseHawk from './assets/case-hawk.png';
import lazyChef from './assets/lazy-chef.png';
import legoProject from './assets/lego-project.png';
import starchaser from './assets/starchaser.png';
import heart from'./assets/heart.png';

export default {
    name: 'Hanna Alemu',
    headerTagLine: [
        'Hi, I am Hanna. ',
        'I am a Software Developer.',
    ],
    contactEmail:'hanna9alemu@gmail.com.com',
    abouttext:'I\'m a Software Developer. I\'m passionate about creating software that solve problems, improve the user\'s quality of life, and is accessable to anyone. I\'m also enthusiastic about community service, mentorship, and improving diversity in the tech industry.',
    aboutImage: heart,
    projects: [
        {
            id: 1,
            title:'Case Hawk',
            details:'A web App built to handle the daily business aspects of small to mid-size Law firms. Uses the Google Oauth service for authentication.',
            imageSrc: caseHawk,
            gitHubUrl: 'https://github.com/hannaalemu/case-hawk-back-end',
            deployedUrl: 'https://github.com/hannaalemu/case-hawk-front-end',
            builtWith: 'Javascript, React, Prisma, CSS'
        },
        {
            id: 2,
            title:'Project Lego',
            details:"Back-end consists of a RESTful API that provides CRUD functionality on information about Lego parts. Front-end uses machine learning libraries to identify part numbers of legos using the user's webcam.",
            imageSrc: legoProject,
            gitHubUrl: 'https://github.com/hannaalemu/project-lego',
            deployedUrl: 'https://project-lego.herokuapp.com/',
            builtWith: 'Javascript, MongoDB, ML5 and P5 libraries'

        },
        {
            id: 3,
            title:'StarChaser',
            details:'A mobile-first and responsive dark park, weather, and moonphase based stargazing outlook app for those who love the stars.',
            imageSrc: starchaser,
            gitHubUrl: 'https://github.com/hannaalemu/starchaser',
            deployedUrl: 'https://starchaserdarkparks.herokuapp.com/',
            builtWith: "Javascript, MongoDB, Express, NodeJs, Google's Geocode API, DarkSky's weather API"

        },
        {
            id: 4,
            title:'Lazy Chef',
            details:'Web-app designed to help users decide what to cook based on ingredients they have on hand and minimize food waste. ',
            imageSrc: lazyChef,
            gitHubUrl: 'https://github.com/hannaalemu/Project-Fridge-Cleaner',
            deployedUrl: 'https://hannaalemu.github.io/Project-Fridge-Cleaner/',
            builtWith: 'Javascript, HTML, CSS'

        },
    ],
    social: [
        {
            name:'Github',
            url: 'https://github.com/hannaalemu',
        },
        {
            name:'LinkedIn',
            url: 'https://www.linkedin.com/in/hannaalemu/',
        },
        {
            name:'Email',
            url: "parent.location='mailto:hanna9alemu@gmail.com",
        }

    ]
}