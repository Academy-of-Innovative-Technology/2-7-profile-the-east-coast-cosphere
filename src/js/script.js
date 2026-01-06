/* Use the profile below */

var profile = {
  bio: {
    first: "Enrique Alberto",
    last: " Fonseca Porras",
    title: "Digital creator",
    portrait:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr46LSrseVkgSX9CO9XY2xyRX_DLNVrroVMw&s",
    email: "Unknown",
    phone: "Unknown",
    address: "Unknown",
    about: `<p>Enrique A. Fonseca Porras is a Spanish journalist, political and economic analyst, and digital media creator. He is best known as the co-founder and former presenter of VisualPolitik, a widely influential Spanish-language YouTube channel that explains global politics and economics to mass audiences.</p><p>After leaving VisualPolitik in 2023 due to internal differences, he launched his independent channel Solo Fonseca, where he continues producing political commentary and analysis with a more personal and direct style. He has also co-authored the book El método Podemos (2015), analyzing modern political marketing. Today, Fonseca is recognized as one of the most prominent Spanish-speaking political communicators on digital platforms.</p>`,
  },

  social: {
    facebook: "https://www.facebook.com/fonseca",
    X: "https://x.com/Sr_Fonseca",
    youtube: "https://www.youtube.com/channel/UCTqb7oZzCYpzOhPenq6AOyQ",
    LinkedIn: "Unknown",
  },
  edu: {
    name: "University of Valladolid",
    major: "Journalism",
  },
  career: {
    company: "VisualPolitik",
    title: "Co-Founder & Presenter",
    role: "Political and economic YouTube content",
  },
  skills_info: "Trained in journalism, Fonseca also worked earlier as a political marketing consultant, gaining firsthand experience in electoral communication and strategy.",
  skills: [
    { title: "Political & Economic Analysis", level: 92 },
    { title: "Public Communication & Storytelling", level: 95 },
    { title: "Digital Media Strategy & Content Creation", level: 90 },
  ],
};

let Profile_IMG_DOM = document.querySelector("#Profile_IMG");
let Profile_Name_DOM = document.querySelector("#Profile_Name");
let Profile_Title_DOM = document.querySelector("#Profile_Title");

let Profile_Email_DOM = document.querySelector("#Profile_Email");
let Profile_Phone_DOM = document.querySelector("#Profile_Phone");
let Profile_Address_DOM = document.querySelector("#Profile_Address");

let Profile_Facebook_DOM = document.querySelector("#Profile_Facebook");
let Profile_Twitter_DOM = document.querySelector("#Profile_Twitter");
let Profile_Youtube_DOM = document.querySelector("#Profile_Youtube");
let Profile_Linkedin_DOM = document.querySelector("#Profile_Linkedin");

let Profile_About_DOM = document.querySelector("#Profile_About");

let Profile_Education_DOM = document.querySelector("#Profile_Education");
let Profile_Career_DOM = document.querySelector("#Profile_Career");
let Profile_Experience_DOM = document.querySelector("#Profile_Experience");
let Profile_Experience_Container_DOM = document.querySelector(
  "#Profile_Experience_Container"
);

let Profile_Skill_Info_DOM = document.querySelector("#Profile_Skill_Info");

let Profile_Skill_1_Name_DOM = document.querySelector("#Profile_Skill_1_Name");
let Profile_Skill_1_Value_DOM = document.querySelector(
  "#Profile_Skill_1_Value"
);
let Profile_Skill_1_Bar_DOM = document.querySelector("#Profile_Skill_1_Bar");

let Profile_Skill_2_Name_DOM = document.querySelector("#Profile_Skill_2_Name");
let Profile_Skill_2_Value_DOM = document.querySelector(
  "#Profile_Skill_2_Value"
);
let Profile_Skill_2_Bar_DOM = document.querySelector("#Profile_Skill_2_Bar");

let Profile_Skill_3_Name_DOM = document.querySelector("#Profile_Skill_3_Name");
let Profile_Skill_3_Value_DOM = document.querySelector(
  "#Profile_Skill_3_Value"
);
let Profile_Skill_3_Bar_DOM = document.querySelector("#Profile_Skill_3_Bar");

function Update() {
  Profile_IMG_DOM.src = profile.bio.portrait;
  Profile_Name_DOM.innerHTML = `${profile.bio.first} ${profile.bio.last}`;
  Profile_Email_DOM.innerHTML = profile.bio.email;
  Profile_Phone_DOM.innerHTML = `<i class="fas fa-mobile-alt display-25 me-3 text-secondary"></i>${profile.bio.phone}`;
  Profile_Address_DOM.innerHTML = `<i class="fas fa-map-marker-alt display-25 me-3 text-secondary"></i>${profile.bio.address}`;

  Profile_Facebook_DOM.href = profile.social.facebook;
  Profile_Twitter_DOM.href = profile.social.X;
  Profile_Youtube_DOM.href = profile.social.youtube;
  Profile_Linkedin_DOM.href = profile.social.LinkedIn;

  Profile_About_DOM.innerHTML = `<div class="text-start mb-1-6 wow fadeIn">
							<h2 class="h1 mb-0 text-primary">#About Me</h2>
						</div> ${profile.bio.about}`;

  Profile_Education_DOM.innerHTML = `${profile.edu.name}, ${profile.edu.major}`;

  Profile_Experience_Container_DOM.innerHTML = "";

  Profile_Experience_DOM.innerHTML = `${profile.career.company}<br>${profile.career.title}<br>${profile.career.role}`;

  Profile_Skill_Info_DOM.innerHTML = profile.skills_info;

  Profile_Skill_1_Name_DOM.innerHTML = profile.skills[0].title;
  Profile_Skill_1_Value_DOM.innerHTML = profile.skills[0].level;
  Profile_Skill_1_Bar_DOM.style.width = `${profile.skills[0].level}%`;

  Profile_Skill_2_Name_DOM.innerHTML = profile.skills[1].title;
  Profile_Skill_2_Value_DOM.innerHTML = profile.skills[1].level;
  Profile_Skill_2_Bar_DOM.style.width = `${profile.skills[1].level}%`;

  Profile_Skill_3_Name_DOM.innerHTML = profile.skills[2].title;
  Profile_Skill_3_Value_DOM.innerHTML = profile.skills[2].level;
  Profile_Skill_3_Bar_DOM.style.width = `${profile.skills[2].level}%`;
}

Update();
