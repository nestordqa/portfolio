import { Project } from './types';
import advices from '../public/advices.png';
import calculator from '../public/calculator.png';
import pawsitive from '../public/pawsitive.png';
import todoapp from '../public/todoapp.png';

export const projects : Project[] = [
    {
        name: 'Pawsitive App',
        content: ['Design and develop an App with a team of six developers that included: searches, filtering, ordering and creation.', 'Develop the app using for the Frontend: NextJS, Typescript, Tailwind CSS. Backend: developed in Node.js with Express. Database in PostgreSQL and Prisma as ORM.', 'App made under the idea of finding a home for pets for adoption, it also has a Pet Shop.'],
        deploy:'https://pf-pawsitive-app.vercel.app/',
        repository:'https://github.com/arbelais/PF-Pawsitive-app',
        img: {pawsitive}
    },
    {
        name: 'Calculator App',
        content: ['Design and develop an app that allows you to create a list of tasks to do, as well as the CRUD. In turn, it has themes to be selected by the user, either Dark or Light.', 'Develop the app so that it adapts correctly to the screen size.', 'Develop the app using NextJS, Typescript, Tailwind CSS and Local Storage for data storage.'],
        deploy:'https://calculatorapp-hazel.vercel.app/',
        repository:'https://github.com/nestordqa/calculator',
        img: {calculator}
    },
    {
        name: 'Sotark Games.',
        content : ['Design and develop an app using an external API related to video games, having to comply with: searches, filtering, ordering and creation.', 'Develop the app using for the Frontend: React, Javascript, Pure CSS. Backend: developed in Node.js with Express. Database in PostgreSQL and Sequelize.js as ORM.'],
        deploy:'https://github.com/nestordqa/sotarkgames_frontend',
        repository:'https://github.com/nestordqa/sotarkgames_backend',
        img: {}
    },
    {
        name: 'TO DO App',
        content: ['Design and develop an app that allows you to create a list of tasks to do, as well as the CRUD. In turn, it has themes to be selected by the user, either Dark or Light.', 'Develop the app so that it adapts correctly to the screen size.', 'Develop the app using NextJS, Typescript, Tailwind CSS and Local Storage for data storage.'],
        deploy: 'https://todoapp-rho-peach.vercel.app/',
        repository: 'https://github.com/nestordqa/todoapp',
        img: {todoapp}
    },
    {
        name: 'Advices App',
        content: ['Design and develop an app that allows obtaining random advice, extracted from an external API.', 'Develop the app so that it adapts correctly to the screen size.', 'Develop the app using NextJS, Typescript, Tailwind CSS.'],
        deploy: 'https://advicegeneratorapp-two.vercel.app/',
        repository: 'https://github.com/nestordqa/advicegeneratorapp',
        img: {advices}
    }

];

