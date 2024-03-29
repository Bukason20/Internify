import IMG1 from "../images/avatar.jpg"
import IMG2 from "../images/img2.jpg"
import IMG3 from "../images/img3.jpg"
import IMG4 from "../images/img4.jpg"
import IMG5 from "../images/img5.jpg"
import IMG6 from "../images/img6.jpg"
import IMG7 from "../images/img7.jpg"
import IMG8 from "../images/img8.jpg"
import IMG9 from "../images/img9.jpg"
import IMG10 from "../images/img10.jpg"
import IMG11 from "../images/img11.jpg"
import IMG12 from "../images/img12.jpg"
import IMG13 from "../images/img13.jpg"
import IMG14 from "../images/img14.jpg"
import IMG15 from "../images/img15.jpg"
import IMG16 from "../images/img16.jpg"
import IMG17 from "../images/img17.jpg"
import IMG18 from "../images/img18.jpg"
import IMG19 from "../images/img19.jpg"
import IMG20 from "../images/img20.jpg"




const InternData = [
    {
        id: 1,
        name: "Edward Chukwuebuka",
        totalScore: 68,
        track: "Frontend",
        img: IMG1,
        group: 1,
        email: "edwardchukwuebuka@gmail.com",
        phone: "08032917204"
    },
    {
        id: 2,
        name: "Miracle Ihediwa",
        totalScore: 17,
        track: "Backend",
        img: IMG2,
        group: 2,
        email: "miracleihediwa@gmail.com",
        phone: "09078165432"
    },
    {
        id: 3,
        name: "Franklin John",
        totalScore: 54,
        track: "Frontend",
        img: IMG3,
        group: 3,
        email: "franklinjohn@gmail.com",
        phone: "08153689742"
    },
    {
        id: 4,
        name: "Ohiri Patrick",
        totalScore: 91,
        track: "Web3",
        img: IMG4,
        group: 4,
        email: "ohiripatrick@gmail.com",
        phone: "07042036581"
    },
    {
        id: 5,
        name: "Ezeuzor Chukwudi",
        totalScore: 33,
        track: "Backend",
        img: IMG5,
        group: 5,
        email: "ezeuzorchukwudi@gmail.com",
        phone: "08023090657"
    },
    {
        id: 6,
        name: "Anastasia Deborah",
        totalScore: 87,
        track: "Web3",
        img: IMG6,
        group: 1,
        email: "anastasiadeborah@gmail.com",
        phone: "08144875329"
    },
    {
        id: 7,
        name: "Edward GinikaChukwu",
        totalScore: 77,
        track: "Frontend",
        img: IMG7,
        group: 2,
        email: "edwardginikachukwu@gmail.com",
        phone: "07069812453"
    },
    {
        id: 8,
        name: "Precious Yakubu",
        totalScore: 44,
        track: "Backend",
        img: IMG8,
        group: 10,
        email: "preciousyakubu@gmail.com",
        phone: "09020586742"
    },
    {
        id: 9,
        name: "Oreh Princess",
        totalScore: 6,
        track: "Frontend",
        img: IMG9,
        group: 3,
        email: "orehprincess@gmail.com",
        phone: "08191476328"
    },
    {
        id: 10,
        name: "Okoye Collins",
        totalScore: 10,
        track: "Web3",
        img: IMG10,
        group: 4,
        email: "okoyecollins@gmail.com",
        phone: "08017654291"
    },
    {
        id: 11,
        name: "Paul David",
        totalScore: 92,
        track: "Backend",
        img: IMG11,
        group: 5,
        email: "pauldavid@gmail.com",
        phone: "09087654291"
    },
    {
        id: 12,
        name: "Wasiu John",
        totalScore: 28,
        track: "Web3",
        img: IMG12,
        group: 6,
        email: "wasiujohn@gmail.com",
        phone: "07060913475"
    },
    {
        id: 13,
        name: "Becky Ada",
        totalScore: 72,
        track: "Frontend",
        img: IMG13,
        group: 7,
        email: "beckyada@gmail.com",
        phone: "08051893627"
    },
    {
        id: 14,
        name: "Chidinma Sarah",
        totalScore: 49,
        track: "Backend",
        img: IMG14,
        group: 8,
        email: "chidinmasarah@gmail.com",
        phone: "09031945862"
    },
    {
        id: 15,
        name: "Joyce Ebube",
        totalScore: 52,
        track: "Frontend",
        img: IMG15,
        group: 9,
        email: "joyceebube@gmail.com",
        phone: "08125230796"
    },
    {
        id: 16,
        name: "Babatunde Michael",
        totalScore: 30,
        track: "Web3",
        img: IMG16,
        group: 10,
        email: "babatundemichael@gmail.com",
        phone: "07019063425"
    },
    {
        id: 17,
        name: "Desire Pearl",
        totalScore: 83,
        track: "Backend",
        img: IMG17,
        group: 6,
        email: "desirepearl@gmail.com",
        phone: "08046589371"
    },
    {
        id: 18,
        name: "Graham Potter",
        totalScore: 97,
        track: "Web3",
        img: IMG18,
        group: 7,
        email: "grahampotter@gmail.com",
        phone: "09064082735"
    },
    {
        id: 19,
        name: "Abiodun Mary",
        totalScore: 15,
        track: "Frontend",
        img: IMG19,
        group: 8,
        email: "abiodunmary@gmail.com",
        phone: "08167520938"
    },
    {
        id: 20,
        name: "Aisha Veronica",
        totalScore: 56,
        track: "Backend",
        img: IMG20,
        group: 9,
        email: "aishaveronica@gmail.com",
        phone: "07091253681"
    },
]

InternData.sort((a,b) => {
    return b.totalScore - a.totalScore
})

export default InternData