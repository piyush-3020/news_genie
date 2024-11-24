import axios from "axios"

export const hero = [
  {
    id: 1,
    cover: "../images/hero/hero1.jpg",
    catgeory: "featured",
    title: "Google To Boost Android Security In Few Days",
    authorName: "Salman",
    authorImg: "../images/author.jpg",
    time: "5 Jun - 2022",
    desc: [
      {
        para1: "You audience. Least, the recently his repeat the this avarice for the have and was on would before the concise bedding were hall politely name be regretting have of even five of it the his are there again. Word seven designer far lady problem will have work with you to fully understand your business to achieve.",
      },
      {
        para2: "We work with clients big and small across a range of sectors and we utilize all forms of media to get your name out there in a way that’s right for you. We believe that analysis of your company and your customers is key in responding effectively to your promotional needs and we will work with you.",
      },
      {
        para3: "We have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won’t receive a generic service and although we can’t boast years and years of service we can ensure you that is a good thing in this industry.",
      },
    ],
    details: [
      {
        title: "Starting a new company is easy",
      },
      { para1: "Our teams are up to date with the latest technologies, media trends and are keen to prove themselves in this industry and that’s what you want from an advertising agency, not someone who is relying on the same way of doing things that worked 10 years, 5 years or even a year ago." },
      {
        quote: "Scarfs, still not this no with explains it me and option on the any options roasted when I and state can that an don't subjective of has his take on and in from royal everything took raising our have behind success you the mechanic.",
      },
      {
        para2: "And, higher by agency; In from their in and we spirit, through merely and doctor's small him sounded a all now, with that put gift white highly geared that was left back as of or logged important. A over have the large try understanding the believe. Perfected been viewer. Shreds early willingly safely what passion the.",
      },
      {
        para3: "In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts. Needless to say it’s very important, content is king and people are beginning to understand that. However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design phase, this is sad but true.",
      },
    ],
  },
  {
    id: 2,
    cover: "../images/hero/hero2.jpg",
    catgeory: "sport",
    title: "More than billion football fans attend Brazil world cup",
    authorName: "alex",
    authorImg: "../images/author.jpg",
    time: "12 Aug - 2022",
    desc: [
      {
        para1: "You audience. Least, the recently his repeat the this avarice for the have and was on would before the concise bedding were hall politely name be regretting have of even five of it the his are there again. Word seven designer far lady problem will have work with you to fully understand your business to achieve.",
      },
      {
        para2: "We work with clients big and small across a range of sectors and we utilize all forms of media to get your name out there in a way that’s right for you. We believe that analysis of your company and your customers is key in responding effectively to your promotional needs and we will work with you.",
      },
      {
        para3: "We have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won’t receive a generic service and although we can’t boast years and years of service we can ensure you that is a good thing in this industry.",
      },
    ],
    details: [
      {
        title: "Starting a new company is easy",
      },
      { para1: "Our teams are up to date with the latest technologies, media trends and are keen to prove themselves in this industry and that’s what you want from an advertising agency, not someone who is relying on the same way of doing things that worked 10 years, 5 years or even a year ago." },
      {
        quote: "Scarfs, still not this no with explains it me and option on the any options roasted when I and state can that an don't subjective of has his take on and in from royal everything took raising our have behind success you the mechanic.",
      },
      {
        para2: "And, higher by agency; In from their in and we spirit, through merely and doctor's small him sounded a all now, with that put gift white highly geared that was left back as of or logged important. A over have the large try understanding the believe. Perfected been viewer. Shreds early willingly safely what passion the.",
      },
      {
        para3: "In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts. Needless to say it’s very important, content is king and people are beginning to understand that. However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design phase, this is sad but true.",
      },
    ],
  },
  {
    id: 3,
    cover: "../images/hero/hero3.jpg",
    catgeory: "fashion",
    title: "No escaping new high tech speed cameras",
    authorName: "rina",
    authorImg: "../images/author.jpg",
    time: "22 Mar - 2022",
    desc: [
      {
        para1: "You audience. Least, the recently his repeat the this avarice for the have and was on would before the concise bedding were hall politely name be regretting have of even five of it the his are there again. Word seven designer far lady problem will have work with you to fully understand your business to achieve.",
      },
      {
        para2: "We work with clients big and small across a range of sectors and we utilize all forms of media to get your name out there in a way that’s right for you. We believe that analysis of your company and your customers is key in responding effectively to your promotional needs and we will work with you.",
      },
      {
        para3: "We have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won’t receive a generic service and although we can’t boast years and years of service we can ensure you that is a good thing in this industry.",
      },
    ],
    details: [
      {
        title: "Starting a new company is easy",
      },
      { para1: "Our teams are up to date with the latest technologies, media trends and are keen to prove themselves in this industry and that’s what you want from an advertising agency, not someone who is relying on the same way of doing things that worked 10 years, 5 years or even a year ago." },
      {
        quote: "Scarfs, still not this no with explains it me and option on the any options roasted when I and state can that an don't subjective of has his take on and in from royal everything took raising our have behind success you the mechanic.",
      },
      {
        para2: "And, higher by agency; In from their in and we spirit, through merely and doctor's small him sounded a all now, with that put gift white highly geared that was left back as of or logged important. A over have the large try understanding the believe. Perfected been viewer. Shreds early willingly safely what passion the.",
      },
      {
        para3: "In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts. Needless to say it’s very important, content is king and people are beginning to understand that. However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design phase, this is sad but true.",
      },
    ],
  },
  {
    id: 4,
    cover: "../images/hero/hero4.jpg",
    catgeory: "technology",
    title: "Emma Watson stands up for Turkish women",
    authorName: "sunil",
    authorImg: "../images/author.jpg",
    time: "08 Dec - 2022",
    desc: [
      {
        para1: "You audience. Least, the recently his repeat the this avarice for the have and was on would before the concise bedding were hall politely name be regretting have of even five of it the his are there again. Word seven designer far lady problem will have work with you to fully understand your business to achieve.",
      },
      {
        para2: "We work with clients big and small across a range of sectors and we utilize all forms of media to get your name out there in a way that’s right for you. We believe that analysis of your company and your customers is key in responding effectively to your promotional needs and we will work with you.",
      },
      {
        para3: "We have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won’t receive a generic service and although we can’t boast years and years of service we can ensure you that is a good thing in this industry.",
      },
    ],
    details: [
      {
        title: "Starting a new company is easy",
      },
      { para1: "Our teams are up to date with the latest technologies, media trends and are keen to prove themselves in this industry and that’s what you want from an advertising agency, not someone who is relying on the same way of doing things that worked 10 years, 5 years or even a year ago." },
      {
        quote: "Scarfs, still not this no with explains it me and option on the any options roasted when I and state can that an don't subjective of has his take on and in from royal everything took raising our have behind success you the mechanic.",
      },
      {
        para2: "And, higher by agency; In from their in and we spirit, through merely and doctor's small him sounded a all now, with that put gift white highly geared that was left back as of or logged important. A over have the large try understanding the believe. Perfected been viewer. Shreds early willingly safely what passion the.",
      },
      {
        para3: "In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts. Needless to say it’s very important, content is king and people are beginning to understand that. However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design phase, this is sad but true.",
      },
    ],
  },
]
export const world = [
  {
    id: 1,
    cover: "../images/world/world1.jpg",
    catgeory: "",
    title: "Stepping back does make Sussex safer and at peace ",
    authorName: "Salman",
    time: "5 Jun - 2022",
  },
  {
    id: 2,
    cover: "../images/world/world2.jpg",
    catgeory: "",
    title: "Renewable energy dead as industry waits for Policy ",
    authorName: "Salman",
    time: "5 Jun - 2022",
    desct: "If rather, him the would treble-range wild any long of policy waved preparations disguised first initial that commitment had my in for spirits gradual solitary I for his absolutely with it and I to unable follow the to as every it the control and a of thinks the what's help days, with and paint, series at window and could we've offer, hard with king either written dry be are of princesses. We’re here to help, we’ve written examples of web copy for over 40 industries for you to use at concept phase of your projects to bring a little life and realism to your designs and help you think about who and what you are designing for. We want clients and designers alike to think about their design and how it will work with the web copy, we want you think about how numbers, symbols and bullet points will look. Sure, it's easier to just run down the forms and fill the fields with garbage in order to plow through them quickly. But that's not real. That's not what your customers are going to do. Is it really smart to take a shortcut when customers are forced to take the long road? When you just enter fake copy in rapid-fire fashion, you don't know what it really feels like to fill out that form. Do as your customers do and you'll understand them better. When you understand them better, and feel what they feel, you'll build a better interface.",
    descb: "We work with clients big and small across a range of sectors and we utilise all forms of media to get your name out there in a way that’s right for you. We believe that analysis of your company and your customers is key in responding effectively to your promotional needs and we will work with you to fully understand your business to achieve the greatest amount of publicity possible so that you can see a return from the advertising. We have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won’t receive a generic service and although we can’t boast years and years of service we can ensure you that is a good thing in this industry. Our teams are up to date with the latest technologies, media trends and are keen to prove themselves in this industry and that’s what you want from an advertising agency, not someone who is relying on the same way of doing things that worked 10 years, 5 years or even a year ago. Scarfs, still not this no with explains it me and option on the any options roasted when I and state can that an don't subjective of has his take on and in from royal everything took raising our have behind success you the mechanic. And, higher by agency; In from their in and we spirit, through merely and doctor's small him sounded a all now, with that put gift white highly geared that was left back as of or logged important. A over have the large try understanding the believe. Perfected been viewer. Shreds early willingly safely what passion the. We offer a range of training packages in a range of subject areas and can offer blended learning opportunities to best meet your needs. If sitting in a room with a trainer and having the opportunity for discussion with other learners sounds good to you then we can offer this. If you have enough people wanting to attend the same course then we can run one just for you. If you prefer to study in your own time and at your own speed then one of our e learning packages may be right up your street. There is a third option, which is you like the sound of both but perhaps can’t attend all training sessions, this is when blended learning comes into its own. We work with clients big and small across a range of sectors and we utilise all forms of media to get your name out there in a way that’s right for you. We believe that analysis of your company and your customers is key in responding effectively to your promotional needs and we will work with you to fully understand your business to achieve the greatest amount of publicity possible so that you can see a return from the advertising. We have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won’t receive a generic service and although we can’t boast years and years of service we can ensure you that is a good thing in this industry. Our teams are up to date with the latest technologies, media trends and are keen to prove themselves in this industry. We work with clients big and small across a range of sectors and we utilise all forms of media to get your name out there in a way that’s right for you. We believe that analysis of your company and your customers is key in responding effectively to your promotional needs and we will work with you to fully understand your business to achieve the greatest amount of publicity possible so that you can see a return from the advertising.",
  },
  {
    id: 3,
    cover: "../images/world/world3.jpg",
    catgeory: "",
    title: "Mount Etna erupts fashion in nice looking pictures ",
    authorName: "Salman",
    time: "5 Jun - 2022",
  },
  {
    id: 4,
    cover: "../images/world/world2.jpg",
    catgeory: "",
    title: "China asks Canada to add their full plan ",
    authorName: "Salman",
    time: "5 Jun - 2022",
  },
  {
    id: 5,
    cover: "../images/world/world2.jpg",
    catgeory: "",
    title: "Serena secures comeback win against Ivanovic",
    authorName: "Salman",
    time: "5 Jun - 2022",
  },
]

const keyy = import.meta.env.VITE_API_KEYY;
const keyy2 = import.meta.env.VITE_API_KEYY2;

export const popular = async (query: string)=>{
  const url=`https://newsapi.org/v2/everything?q=${query}&apiKey=${keyy}&pageSize=20`
  const populardata=await axios.get(url);

  return populardata;
}

export const lifestyle = async (query: string)=>{
  const url=`https://newsapi.org/v2/everything?q=${query}&apiKey=${keyy2}&pageSize=20`
  const lifestyledata=await axios.get(url);

  return lifestyledata;
}

export const ppost = [
  {
    id: 1,
    catgeory: "world",
    title: "We Went Deep Underground For This Amazing Cave Shot",
    date: "19. February 2022",
    cover: "../images/ppost/pop1.jpg",
  },
  {
    id: 2,
    catgeory: "health",
    title: "6 Reasons Why You Shouldn’t Skip Breakfast",
    date: "19. February 2022",
    cover: "../images/ppost/pop2.jpg",
  },
  {
    id: 3,
    catgeory: "food",
    title: "Our Top 5 Restaurants For A Complete Culinary Experience",
    date: "19. February 2022",
    cover: "../images/ppost/pop3.jpg",
  },
  {
    id: 4,
    catgeory: "fashion",
    title: "Hipster Chic Is In Again: Get Some Glasses",
    date: "19. February 2022",
    cover: "../images/ppost/pop4.jpg",
  },
]

 
export const tpost = [
  {
    id: 1,
    title: "Mercedes-AMG C 63 S E-Performance",
    cover: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcms%2Farticles%2F2024%2F11%2F3205535%2FNew_Launches_and_debuts_November_2024_e28e06e1d0.jpg&w=1080&q=75",
  },
  {
    id: 2,
    title: "China’s Xiaomi, Geely Unveil Self-Driving EV Models to Challenge Tesla",
    cover: "https://autotech.news/wp-content/uploads/2024/11/Xiaomi-SU7-cockpit-interieor-1920x1163.webp",
  },
  {
    id: 3,
    title: "Model Planning Review in 2025: SUVs and hybrid dominate the new lineup",
    cover: "https://autotech.news/wp-content/uploads/2024/11/Polestar_4-768x432.webp",
  },
]
export const gallery = [
  {
    cover: "../images/gallery/g1.jpg",
  },
  {
    cover: "https://images.unsplash.com/photo-1731902062633-1496d7bcf95c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  },
  {
    cover: "https://images.unsplash.com/photo-1732332411020-ce8d1d88f251?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    cover: "https://plus.unsplash.com/premium_photo-1732283132754-daee0ffcad4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    cover: "https://images.unsplash.com/photo-1674637675504-7d1035e0508d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
  },
]
export const discover = [
  {
    title: "games",
    cover: "../images/discover/d1.jpg",
  },
  {
    title: "sports",
    cover: "../images/discover/d2.jpg",
  },
  {
    title: "humour",
    cover: "../images/discover/d3.jpg",
  },
  {
    title: "gadgets",
    cover: "../images/discover/d4.jpg",
  },
  {
    title: "movies",
    cover: "../images/discover/d5.jpg",
  },
  {
    title: "nintendo",
    cover: "../images/discover/d6.jpg",
  },
]
{
  /*<p>Busan is an amazing magazine Blogger theme that is easy to customize for your needs</p>
  <p>Google To Boost Android Security In Few Days</p>
  <p>Cespedes play the winning Baseball Game</p>
  <p>US Promises to give Intel aid to locate the soldiers</p>

*/
}
