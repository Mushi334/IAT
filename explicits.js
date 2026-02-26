define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    API.addPagesSet('basicPage',{
        noSubmit:false,
        header: 'Questionnaire',
        decline: true,
        declineText: isTouch ? 'Decline' : 'Decline to Answer', 
        autoFocus:true, 
        progressBar:  'Page <%= pagesMeta.number %> out of 2'
    });
	
    API.addQuestionsSet('basicQ',{
        decline: 'true',
        required : true, 		
        errorMsg: {
            required: isTouch 
                ? 'Please select an answer, or click \'Decline\'' 
                : 'Please select an answer, or click \'Decline to Answer\''
        },
        autoSubmit:'true',
        numericValues:'true',
        help: '<%= pagesMeta.number < 2 %>',
        helpText: 'Tip: For quick response, click to select your answer, and then click again to submit.'
    });

    API.addQuestionsSet('basicSelect',{
        inherit :'basicQ',
        type: 'selectOne'
    });
	
    API.addQuestionsSet('basicDropdown',{
        inherit :'basicQ',
        type : 'dropdown',
        autoSubmit:false
    });


    API.addQuestionsSet('roleQuestion', {
        inherit: 'basicDropdown',
        name: 'role',
        autoSubmit: false,
        stem: 'Are you a faculty member or an enrolled student?',
        answers: [
            { text: 'Faculty Member', value: 1 },
            { text: '1st Year Student', value: 2 },
            { text: '2nd Year Student', value: 3 },
            { text: '3rd Year Student', value: 4 },
            { text: '4th Year Student', value: 5 },
            { text: "Master\'s Student", value: 6 }
        ]
    });

    API.addQuestionsSet('departmentQuestion', {
        inherit: 'basicDropdown',
        name: 'department',
        autoSubmit: false,
        stem: 'Which department are you in?',
        answers: [
            { text: 'Bangla', value: 1 },
            { text: 'English', value: 2 },
            { text: 'Arabic', value: 3 },
            { text: 'Persian Language and Literature', value: 4 },
            { text: 'Urdu', value: 5 },
            { text: 'Sanskrit', value: 6 },
            { text: 'Pali and Buddhist Studies', value: 7 },
            { text: 'Linguistics', value: 8 },
            { text: 'Philosophy', value: 9 },
            { text: 'History', value: 10 },
            { text: 'Islamic Studies', value: 11 },
            { text: 'Islamic History and Culture', value: 12 },
            { text: 'Information Science and Library Management', value: 13 },
            { text: 'World Religions and Culture', value: 14 },
            { text: 'Theatre and Performance Studies', value: 15 },
            { text: 'Music', value: 16 },
            { text: 'Dance', value: 17 },
            { text: 'Economics', value: 18 },
            { text: 'Political Science', value: 19 },
            { text: 'International Relations', value: 20 },
            { text: 'Anthropology', value: 21 },
            { text: 'Public Administration', value: 22 },
            { text: 'Mass Communication and Journalism', value: 23 },
            { text: 'Communication Disorders', value: 24 },
            { text: 'Printing and Publication Studies', value: 25 },
            { text: 'Television, Film, and Photography', value: 26 },
            { text: 'Sociology', value: 27 },
            { text: 'Development Studies', value: 28 },
            { text: 'Criminology', value: 29 },
            { text: 'Japanese Studies', value: 30 },
            { text: 'Women and Gender Studies', value: 31 },
            { text: 'Population Sciences', value: 32 },
            { text: 'Peace and Conflict Studies', value: 33 },
            { text: 'Law', value: 34 },
            { text: 'Drawing and Painting', value: 35 },
            { text: 'Graphic Design', value: 36 },
            { text: 'Printmaking', value: 37 },
            { text: 'Oriental Art', value: 38 },
            { text: 'Ceramics', value: 39 },
            { text: 'Craft', value: 40 },
            { text: 'Sculpture', value: 41 },
            { text: 'History of Art', value: 42 },
            { text: 'Accounting and Information Systems', value: 43 },
            { text: 'Management', value: 44 },
            { text: 'Marketing', value: 45 },
            { text: 'Finance', value: 46 },
            { text: 'Banking and Insurance', value: 47 },
            { text: 'Management Information Systems', value: 48 },
            { text: 'Tourism and Hospitality Management', value: 49 },
            { text: 'International Business', value: 50 },
            { text: 'Organization Strategy and Leadership', value: 51 },
            { text: 'Physics', value: 52 },
            { text: 'Chemistry', value: 53 },
            { text: 'Mathematics', value: 54 },
            { text: 'Applied Mathematics', value: 55 },
            { text: 'Statistics', value: 56 },
            { text: 'Theoretical Physics', value: 57 },
            { text: 'Biomedical Physics and Technology', value: 58 },
            { text: 'Botany', value: 59 },
            { text: 'Zoology', value: 60 },
            { text: 'Biochemistry and Molecular Biology', value: 61 },
            { text: 'Microbiology', value: 62 },
            { text: 'Psychology', value: 63 },
            { text: 'Clinical Psychology', value: 64 },
            { text: 'Educational and Counselling Psychology', value: 65 },
            { text: 'Genetic Engineering and Biotechnology', value: 66 },
            { text: 'Soil, Water, and Environment', value: 67 },
            { text: 'Fisheries', value: 68 },
            { text: 'Public Health', value: 69 },
            { text: 'Geography and Environment', value: 70 },
            { text: 'Geology', value: 71 },
            { text: 'Oceanography', value: 72 },
            { text: 'Disaster Science and Climate Resilience', value: 73 },
            { text: 'Meteorology', value: 74 },
            { text: 'Electrical and Electronic Engineering', value: 75 },
            { text: 'Applied Chemistry and Chemical Engineering', value: 76 },
            { text: 'Computer Science and Engineering', value: 77 },
            { text: 'Nuclear Engineering', value: 78 },
            { text: 'Robotics and Mechatronics Engineering', value: 79 },
            { text: 'Pharmacy', value: 80 },
            { text: 'Clinical Pharmacy and Pharmacology', value: 81 },
            { text: 'Pharmaceutical Chemistry', value: 82 },
            { text: 'Pharmaceutical Technology', value: 83 },
            { text: 'Institute of Education and Research (IER)', value: 84 },
            { text: 'Dhaka Medical College and Allied Units', value: 85 },
            { text: 'Centre for Advanced Research and Postgraduate Training Units', value: 86 }
        ]
    });


    API.addQuestionsSet('genderQuestion', {
        inherit: 'basicDropdown',
        name: 'gender',
        autoSubmit: false,
        stem: 'What is your gender?',
        answers: [
            { text: 'Male', value: 1 },
            { text: 'Female', value: 2 },
            { text: 'Non-binary', value: 3 }
        ]
    });

    API.addQuestionsSet('registrationQuestion', {
        inherit: 'basicQ',
        type: 'text',
        name: 'registration',
        autoSubmit: false,
        stem: 'What is your university registration number?'
    });

    API.addQuestionsSet('attributes7', {
        inherit : 'basicSelect',
        name: 'attributes7',
        stem: 'Which statement best describes your views on gender roles?',
        answers: [
            {text:'I strongly associate males with leadership and females with nurturing roles.', value:7},
            {text:'I moderately associate males with leadership and females with nurturing roles.', value:6},
            {text:'I slightly associate males with leadership and females with nurturing roles.', value:5},
            {text:'I do not associate males or females with specific roles.', value:4},
            {text:'I slightly associate females with leadership and males with nurturing roles.', value:3},
            {text:'I moderately associate females with leadership and males with nurturing roles.', value:2},
            {text:'I strongly associate females with leadership and males with nurturing roles.', value:1}
        ]
    });

    API.addQuestionsSet('attributes8', {
        inherit : 'basicSelect',
        name: 'attributes8',
        stem: 'Which statement best describes your views on gender and academic subjects?',
        answers: [
            {text:'I strongly associate males with Science and females with Humanities.', value:7},
            {text:'I moderately associate males with Science and females with Humanities.', value:6},
            {text:'I slightly associate males with Science and females with Humanities.', value:5},
            {text:'I do not associate males or females with specific academic subjects.', value:4},
            {text:'I slightly associate females with Science and males with Humanities.', value:3},
            {text:'I moderately associate females with Science and males with Humanities.', value:2},
            {text:'I strongly associate females with Science and males with Humanities.', value:1}
        ]
    });

	API.addQuestionsSet('attributes9', {
    inherit : 'basicSelect',
    name: 'attributes9',
    stem: 'Which statement best reflects your general views about gender and academic subjects?',
    answers: [
        {text:'I believe males are better suited for Science, and females are better suited for Humanities.', value:6},
        {text:'I believe males are better suited for Science, but females can do Science as well.', value:5},
        {text:'I believe males and females are equally suited for both Science and Humanities.', value:4},
        {text:'I believe females are better suited for Humanities, but males can do Humanities as well.', value:3},
        {text:'I believe females are better suited for Humanities, and males are better suited for Science.', value:2},
        {text:'I believe both males and females can excel in any subject equally, regardless of the field.', value:1},
    ]
});
	
    API.addSequence([
        {
            inherit: 'basicPage',
            questions: [
                { inherit: 'roleQuestion' },
                { inherit: 'departmentQuestion' },
                { inherit: 'genderQuestion' },
                { inherit: 'registrationQuestion' }
            ]
        },
        {
            mixer : 'random', 
            data : [
                {
                    mixer : 'random', 
                    wrapper:true, 
                    data : [
                        {
                            inherit:'basicPage', 
                            questions: {inherit:'attributes7'}
                        },
                        {
                            inherit:'basicPage', 
                            questions: {inherit:'attributes8'}							
                        }
                    ]
                },
                {
                    inherit:'basicPage', 
                    questions: {inherit:'attributes9'}
                }
            ]
        }
    ]);

    return API.script;
});
