const data = {
    education:[
        {
            standard:"Information Technology (B.Tech)",
            year:"2020-2024",
            school:"Delhi Technological University",
            cgpa: "9.23"
        },
        {
            standard:"XIIth Class",
            year:"2019",
            school:"D.A.V Public School(CBSE)",
            cgpa: "93.4%"
        },
        {
            standard:"Xth Class",
            year:"2017",
            school:"D.A.V Public School(CBSE)",
            cgpa: "95%"
        }
    ],
    internship:[
        {
            company: "Deloitte",
            location: "AUSTRALIA",
            date: "MAY 31 - JUN 30",
            role: "Software Engineer",
            description:[
                "Developed an algorithm to unify different format of JSON data into the required target JSON file using python on the platform repel.it ",
                "Organised and analyzed the data using Tableau and proposed the reasons for the breakdown in the proposed problem.",
                "Introduced a proposal for the building of real-time private dashboard and estimated a development time of 22 months which were further divided into implementation time, integration and system tesing using COCOMO model",
                "Monitored the log files of the company to check for unauthorised access and document the corresponding user-id and methods used by the hacker to gain access to the system."

            ],
            certificate:"https://drive.google.com/file/d/1-V3caIN6rHAc4RJVdf1nqa-vZxlU1_z-/view?usp=sharing"
            
            
            

        },
        {
            company: "GeekHouse",
            location: "DELHI IN",
            date: "FEB 2022 - MAY 2022",
            role: "Tech Teaching Assistant",
            description:[
                "Mentored 50+ eager students on time complexity, data structure and algorithms by leading weekly workshops and conducting one-on-one coaching sessions to solve problems on popular platforms such as Leetcode , GFG, Hackerrank etc.",
                "Taught CS fundamentals (Object Oriented Programming, Operating Systems, Database Management Systems) to 50+ students by delivering lectures in 12 weeks.",
                "Solved doubts of 50+ students on various programming languages and CS fundamentals (C, C++, Python, OS etc.) through online channels (Discord, WhatsApp, Forums etc.)."
            ],
            certificate:"https://drive.google.com/file/d/1eez9BV9ATOa3-v-gVn7tGBjhFrF4Z1rU/view?usp=sharing"
            

        }
    ],
    projects:[
        {
            id: 0,
            topic:"CompanyX DataBase Manager",
            details:[
                "Innovated a 4.3/5(rated by multiple users) user-friendly Desktop App to create and manage databases of a firm.",
                "Developed Query-Runner(4.1/5 - highest rated feature) along with other salient features to retrieve, create and update data.",
                "Introduced features such as Login, Register employee , Query Runner, Assign Project, ER diagram, Online Food court.",
            ],
            tech_stack:["Python", "SQL", "MySQL", "MySQL Workbench", "Tkinter"] ,
            link: "https://github.com/PiyushChauhan16/tkinter/blob/main/project.py"
        },
        {
            id: 1,
            topic:"WorkLoad Crunch",
            details:[
                "Designed a 4.1/5(rated by multiple users) Object-oriented program to generate Pay-Slip and provide banking facilities.",
                "Provided features such as Employee Login, Manager Login, Payment Slip Generator, New Employee Registration, Banking Services, Canteen Services."

            ],
            tech_stack:["C++", "Object-Oriented Programming"],
            link: "https://github.com/PiyushChauhan16/My-Projects/blob/main/WorkLoadCrunch.cpp"

        },
        {
            id: 3,
            topic: "Gender Identifier",
            details: [
                "Created a classification classifier trained on 47009 images belonging to two classes to distinguish between male and female with an accuracy of 96.01."
            ],
            tech_stack:["Python", "Convolution Neural Network(Deep Learning)"]

        }
        
    ],

    skills:[
        {
            id: 0,
            topic: "Course Work",
            details: [
                "Data structure and Algorithms",
                "Object-Oriented Programming",
                "Operating System",
                "Database Management System",
                "Computer Networks"
            ]
        },
        {
            id: 1,
            topic: "Programming Languages",
            details: [
                "C/C++",
                "Python",
                "HTML",
                "JavaScript"
            ]
        },
        {
            id: 3,
            topic: "Cyber Security",
            details: [
                "Information and Network Security",
                "Ethical Hacking",
                "Cryptography",
                "Cyber Forensics"               
            ]
        },
        {
            id: 4,
            topic: "Front-End Development",
            details: [
                "HTML (HyperText Markup Language)",
                "CSS (Cascading Style Sheets)",
                "JavaScript",
                "React.js"               
            ]
        }

    ],
    achivements:[
        "Earned 9.86 cgpa in 5th semester to become 2nd topper in IT department",
        "Solved 800+ questions at leetcode",
        "Acquired 1000+ points on GeeksforGeeks",
        "Rated 5 Star coder at Hackerrank"
    ],
    extra_curricular:[
        "Received D.A.V Merit Certificate for securing top 0.1 percentile marks.",
        "Runner Up of the Inter-DAV competition of “Kabaad Se Karobaar” with participation of 10+ schools and 200+ students.",
        "Won Society achiever award for academics among 100+ candidates."
    ]
}



export default data;