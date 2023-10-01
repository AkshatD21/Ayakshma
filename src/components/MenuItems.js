import star from '../assets/Star.svg';
import shield from '../assets/Shield.svg'

export const MenuItems = [
    {
        title : "Home",
        url : "/",
        cName : "nav-links", 
        icon: "fa-solid fa-house",
    },
    {
        title : "About",
        url : "/about",
        cName : "nav-links", 
        icon: "fa-solid fa-circle-info",
    },
    {
        title: "Service",
        url: "/service",
        cName: "nav-links",
        icon: "fa-solid fa-briefcase",
    },
    {
        title: "Contact",
        url: "/contact",
        cName: "nav-links",
        icon: "fa-solid fa-address-book",
    },
    {
        title: "Sign Up",
        url: "/signup",
        cName: "nav-links-mobile",
    }
]

export const features1 = [
    {
        id: "feature-1",
        icon: star,
        content:
            "Predict diseases based on symptoms, reducing hospital visits.",
    },
    {
        id: "feature-2",
        icon: star,
        content:
            "Empower individuals to proactively manage their health.",
    },
    {
        id: "feature-3",
        icon: star,
        content:
            "Deliver accessible, actionable healthcare solutions.",
    },
];

export const features2 = [
    {
        id: "feature-1",
        icon: shield,
        content:
            "Lead the digital health revolution.",
    },
    {
        id: "feature-2",
        icon: shield,
        content:
            "Enable remote healthcare, especially during crises.",
    },
    {
        id: "feature-3",
        icon: shield,
        content:
            "Foster healthier communities through prevention and convenience.",
    },
];