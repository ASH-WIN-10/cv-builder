const initialMockResume = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    phoneNum: "+91 123 456 7890",
    education: [
        {
            id: 1,
            schoolName: "University of Nowhere",
            degree: "B.S. in Computer Science",
            startDate: "01/2020",
            endDate: "01/2024",
        },
    ],
    practicalExp: [
        {
            id: 1,
            companyName: "Tech Co.",
            jobTitle: "Software Engineer",
            startDate: "02/2024",
            endDate: "Present",
            jobDesc: "Worked on various projects",
        },
    ],
}

const initialEmptyResume = {
    name: "",
    email: "",
    phoneNum: "",
    education: [],
    practicalExp: [],
}

const emptyEducation = {
    id: 0,
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
}

const emptyPracticalExp = {
    id: 0,
    companyName: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    jobDesc: "",
}

export {
    initialMockResume,
    initialEmptyResume,
    emptyEducation,
    emptyPracticalExp,
}
