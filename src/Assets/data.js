import countriesapp from "../IMG/countriesapp.png"
import caneapp from "../IMG/caneapp.png"
import bacofusion from "../IMG/BacoFusion.png"
import HTML from "../IMG/technologies/01-html.png"
import CSS from "../IMG/technologies/02-css.png"
import JS from "../IMG/technologies/03-javascript.png"
import React from "../IMG/technologies/04-react.png"
import Redux from "../IMG/technologies/05-redux.png"
import Next from "../IMG/technologies/06-next.png"
import Node from "../IMG/technologies/07-node.png"
import Express from "../IMG/technologies/08-express.png"
import PostgreSQL from "../IMG/technologies/09-postgresql.png"
import MySQL from "../IMG/technologies/10-mysql.png"


export const technologies = [
    {
        name: "HTML",
        url: HTML
    },
    {
        name: "CSS",
        url: CSS
    },
    {
        name: "JavaScript",
        url: JS
    },
    {
        name: "React.Js",
        url: React
    },
    {
        name: "Redux",
        url: Redux
    },
    {
        name: "Next.Js",
        url: Next
    },
    {
        name: "Node.Js",
        url: Node
    },
    {
        name: "Express.Js",
        url: Express
    },
    {
        name: "PostgreSQL",
        url: PostgreSQL
    },
    {
        name: "MySQL",
        url: MySQL
    },

]

export const dataEducation = {
    eng:[
        {
    institution: "Henry",
    titulo: "Full Stack Web Developer",
    time: "March 2022 / October 2022",
    where: "Rosario, Santa Fe"
},
{
    institution: "ISTM",
    titulo: "Radiologist",
    time: "March 2011 / December 2016",
    where: "Rosario, Santa Fe"
},
{
    institution: "EET 6",
    titulo: "Electromechanical technician",
    time: "March 2001 / December 2006",
    where: "San Nicolas, Buenos Aires"
}
    ],
    esp:[
        {
    institution: "Henry",
    titulo: "Desarrollador Web Full Stack",
    time: "Marzo 2022 / Octubre 2022",
    where: "Rosario, Santa Fe"
},
{
    institution: "ISTM",
    titulo: "Radiologo",
    time: "Marzo 2011 / Diciembre 2016",
    where: "Rosario, Santa Fe"
},
{
    institution: "EET 6",
    titulo: "Técnico Electromecánico",
    time: "Marzo 2001 / Diciembre 2006",
    where: "San Nicolas, Buenos Aires"
}
    ]
}

export const dataProyects = [
    {
        name: "Cane-App",
        img: caneapp,
        link: "https://cane-food.vercel.app/"
    },
    {
        name: "Countries-App",
        img: countriesapp,
        link: "https://countries-app-one-kohl.vercel.app/"
    },
    {
        name: "Baco Fusión",
        img: bacofusion,
        link: "https://bacofusion.vercel.app/"
    }

]

export const dataProyects1 = {
    CaneApp:{
        name: "Cane-App",
        dev: "Full-Stack",
        img: caneapp,
        demo: "https://cane-food.vercel.app/",
        github:"https://github.com/federicofucci21/CaneFront",
        description: "E-Commerce developed for Cané Medallones Vegetarianos. SingUp. Login. Roles. Administer DashBoard. Payments. Cart.",
        tecnologies: "ReactJS / Redux / Ant Desing / Boostrap / NodeJS / ExpressJS / Sequelize / PostgreSQL / JavaScript / SCRUM"
    },
    CountriesApp:{
        name: "Countries-App",
        dev: "Full-Stack",
        img: countriesapp,
        demo: "https://countries-app-one-kohl.vercel.app/",
        github:"https://github.com/federicofucci21/PI-Countries-Henry",
        description: "Individual Proyect from Henry. This app takes data from an external API and shows in form of cards  info for each country. Beside you can create activitias and vinculate with countries. Filters and orders for cards.",
        tecnologies: "ReactJS / Redux / Css / NodeJS / ExpressJS / Sequelize / PostgreSQL / JavaScript"
    },
    BacoFusion:{
        name: "Baco Fusión",
        dev: "Front-End",
        img: bacofusion,
        demo: "https://bacofusion.vercel.app/",
        github:"https://github.com/federicofucci21/Baco-Fusion-App",
        description: "Web page developed for BACO restaurant palced on Entre Rios. Includes landing page with an advertisements carousel, photo-galery, a complete menu-page with auto-scroll, booking page with integrated whatsapp and googlemaps",
        tecnologies:"ReactJS / Redux Toolkit / Ant Desing / Boostrap / TypeScript / JavaScript / SCRUM"
    },
    any:{
        name: "Comming soon...",
        dev: "Full-Stack",
        img: "Comming soon...",
        demo: "https://federicofucci.vercel.app/",
        github:"https://github.com/federicofucci21",
        description: "Comming soon...",
        tecnologies: "Comming soon..."
    }

}




export const dataParrafo = {
    eng:"I am currently carrying out a clear objective: insert myself into IT world. That's why I took my first steps as a Full Stack Web Developer with Henry. My life experiences have given me great decision-making and leadership skills, as well as the need to test myself in changing situations and acquire essential knowledge on my own. I found in web development and the IT universe my true passion.",
    esp:"Actualmente estoy llevando adelante un objetivo claro: insertarme en el mundo It. Es por eso que dí mis primeros pasos como desarrollador web con Henry. Mis experiencias pasadas me han dado una gran capacidad de liderazgo y toma de decisiones, asi como tambien tuve que probarme a mi mismo en situaciones cambiantes donde tuve que adquirir conocimentos nuevos por mi cuenta. Encontré en el desarrollo web y el universo IT mi verdadera pasión.",
}

