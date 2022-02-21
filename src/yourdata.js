// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import pollIcon from "./images/bar_chart_black_48dp.svg"
import geoIcon from "./images/travel_explore_black_24dp.svg"
import chartIcon from "./images/insights_black_48dp.svg"
import spreadsheetIcon from "./images/spreadsheetIcon.png"
// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"
const url = "https://inspiring-bhabha-0e80f6.netlify.app/"
export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Silverload Media",
  headerTagline: [
    //Line 1 For Header
    "Modern marketing",
    //Line 2 For Header
    "Real world analytics",
    //Line 3 For Header
    "Good Vibes",
  ],
  //   Header Paragraph
  headerParagraph:
    "Be a part of Denver's flourishing revival. We want to help you enrich our city.",

  //Contact Email
  contactEmail: "silversoftwerks@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "This Guy Campaign", //Project Title - Add Your Project Title Here
      para:
        "Have you seen this guy", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: url + "Gunned%20Down%20Blur%20Big%20Text%20Warp.jpeg",     //Project URL - Add Your Project Url Here
      url: url,
    },
   {
      title: "Project Two", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "Project Three", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "Project Four", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "Project Five", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "Project Six", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Started by 2 brothers, Silverlode media represtents a new form of grass roots marketing. Leveraging technology, creativity, and most importantly, fun, we aim to elevate artists, empower businesses, and enable patrons to connect.",
  aboutParaTwo:
    "QR code technology",
  aboutParaThree:
    "Multimedia capabilities including web, print, audio, graphic arts, photography, videography, audio/signal visualizers, VR, AR, and XR. With over 15 years of experience, our artists and software engineers help you develop campaigns that apeal to the next generation of consumers",
  aboutImage:
    "",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: pollIcon,
      para:
        "Consumer Polling",
    },
    {
      img: chartIcon,
      para:
        "Scan Analytics",
    },
    {
      img: geoIcon,
      para:
        "Geographic Analytics",
    },
    {
      img: spreadsheetIcon,
      para:
        "Spreasheet Reports",
    },  
    {
      img: jsIcon,
      para:
        "Web App Development",
    },
    {
      img: designIcon,
      para:
        "Media Design",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "I saw that guy",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's enrich our town",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/silversoftwerks" },
    {
      img: codepenIcon,
      url: "https://www.codepen.com/",
    },
    {
      img: dribbbleIcon,
      url: "https://dribbble.com/chetanverma",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/",
    },
  ],

  // End Contact Section ---------------
}

