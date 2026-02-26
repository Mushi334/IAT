define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        header: 'Questionnaire',
        decline: true,
        declineText: isTouch ? 'Decline' : 'Decline to Answer', 
        autoFocus:true, 
        progressBar:  'Page <%= pagesMeta.number %> out of 3'
    });
	
    /**
	* Question prototypes
	*/
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
        help: '<%= pagesMeta.number < 3 %>',
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

		API.addQuestionsSet('facultyQuestion', {
    inherit: 'basicDropdown',
    name: 'faculty',
    stem: 'Which faculty are you associated with?',
    answers: [
        { text: 'Faculty of Arts', value: 1 },
        { text: 'Faculty of Social Sciences', value: 2 },
        { text: 'Faculty of Law', value: 3 },
        { text: 'Faculty of Fine Arts', value: 4 },
        { text: 'Faculty of Business Studies', value: 5 },
        { text: 'Faculty of Science', value: 6 },
        { text: 'Faculty of Biological Sciences', value: 7 },
        { text: 'Faculty of Earth and Environmental Sciences', value: 8 },
        { text: 'Faculty of Engineering and Technology', value: 9 },
        { text: 'Faculty of Pharmacy', value: 10 },
        { text: 'Faculty of Education', value: 11 },
        { text: 'Faculty of Medicine', value: 12 },
        { text: 'Faculty of Postgraduate Medical Sciences and Research', value: 13 }
    ]
});
	API.addQuestionsSet('artsDepartments', {
    inherit: 'basicDropdown',
    name: 'artsDept',
    stem: 'Which department are you in?',
    showIf: { faculty: 1 },
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
        { text: 'Dance', value: 17 }
    ]
});
	API.addQuestionsSet('socialDepartments', {
    inherit: 'basicDropdown',
    name: 'socialDept',
    stem: 'Which department are you in?',
    showIf: { faculty: 2 },
    answers: [
        { text: 'Economics', value: 1 },
        { text: 'Political Science', value: 2 },
        { text: 'International Relations', value: 3 },
        { text: 'Anthropology', value: 4 },
        { text: 'Public Administration', value: 5 },
        { text: 'Mass Communication and Journalism', value: 6 },
        { text: 'Communication Disorders', value: 7 },
        { text: 'Printing and Publication Studies', value: 8 },
        { text: 'Television, Film, and Photography', value: 9 },
        { text: 'Sociology', value: 10 },
        { text: 'Development Studies', value: 11 },
        { text: 'Criminology', value: 12 },
        { text: 'Japanese Studies', value: 13 },
        { text: 'Women and Gender Studies', value: 14 },
        { text: 'Population Sciences', value: 15 },
        { text: 'Peace and Conflict Studies', value: 16 }
    ]
});
	API.addQuestionsSet('lawDepartments', {
    inherit: 'basicDropdown',
    name: 'lawDept',
    stem: 'Which department are you in?',
    showIf: { faculty: 3 },
    answers: [
        { text: 'Law', value: 1 }
    ]
});
	API.addQuestionsSet('fineArtsDepartments', {
    inherit: 'basicDropdown',
    name: 'fineArtsDept',
    stem: 'Which department are you in?',
    showIf: { faculty: 4 },
    answers: [
        { text: 'Drawing and Painting', value: 1 },
        { text: 'Graphic Design', value: 2 },
        { text: 'Printmaking', value: 3 },
        { text: 'Oriental Art', value: 4 },
        { text: 'Ceramics', value: 5 },
        { text: 'Craft', value: 6 },
        { text: 'Sculpture', value: 7 },
        { text: 'History of Art', value: 8 }
    ]
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
	API.addQuestionsSet('businessDepartments', {
    inherit: 'basicDropdown',
    name: 'businessDept',
    showIf: { faculty: 5 },
    stem: 'Which department are you in?',
    answers: [
        { text: 'Accounting and Information Systems', value: 1 },
        { text: 'Management', value: 2 },
        { text: 'Marketing', value: 3 },
        { text: 'Finance', value: 4 },
        { text: 'Banking and Insurance', value: 5 },
        { text: 'Management Information Systems', value: 6 },
        { text: 'Tourism and Hospitality Management', value: 7 },
        { text: 'International Business', value: 8 },
        { text: 'Organization Strategy and Leadership', value: 9 }
    ]
});
	API.addQuestionsSet('scienceDepartments', {
    inherit: 'basicDropdown',
    name: 'scienceDept',
    showIf: { faculty: 6 },
    stem: 'Which department are you in?',
    answers: [
        { text: 'Physics', value: 1 },
        { text: 'Chemistry', value: 2 },
        { text: 'Mathematics', value: 3 },
        { text: 'Applied Mathematics', value: 4 },
        { text: 'Statistics', value: 5 },
        { text: 'Theoretical Physics', value: 6 },
        { text: 'Biomedical Physics and Technology', value: 7 }
    ]
});
	API.addQuestionsSet('biologicalDepartments', {
    inherit: 'basicDropdown',
    name: 'bioDept',
    showIf: { faculty: 7 },
    stem: 'Which department are you in?',
    answers: [
        { text: 'Botany', value: 1 },
        { text: 'Zoology', value: 2 },
        { text: 'Biochemistry and Molecular Biology', value: 3 },
        { text: 'Microbiology', value: 4 },
        { text: 'Psychology', value: 5 },
        { text: 'Clinical Psychology', value: 6 },
        { text: 'Educational and Counselling Psychology', value: 7 },
        { text: 'Genetic Engineering and Biotechnology', value: 8 },
        { text: 'Soil, Water, and Environment', value: 9 },
        { text: 'Fisheries', value: 10 },
        { text: 'Public Health', value: 11 }
    ]
});
	API.addQuestionsSet('earthDepartments', {
    inherit: 'basicDropdown',
    name: 'earthDept',
    showIf: { faculty: 8 },
    stem: 'Which department are you in?',
    answers: [
        { text: 'Geography and Environment', value: 1 },
        { text: 'Geology', value: 2 },
        { text: 'Oceanography', value: 3 },
        { text: 'Disaster Science and Climate Resilience', value: 4 },
        { text: 'Meteorology', value: 5 }
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
	API.addQuestionsSet('engineeringDepartments', {
    inherit: 'basicDropdown',
    name: 'engDept',
    showIf: { faculty: 9 },
    stem: 'Which department are you in?',
    answers: [
        { text: 'Electrical and Electronic Engineering', value: 1 },
        { text: 'Applied Chemistry and Chemical Engineering', value: 2 },
        { text: 'Computer Science and Engineering', value: 3 },
        { text: 'Nuclear Engineering', value: 4 },
        { text: 'Robotics and Mechatronics Engineering', value: 5 }
    ]
});
	API.addQuestionsSet('pharmacyDepartments', {
    inherit: 'basicDropdown',
    name: 'pharmacyDept',
    showIf: { faculty: 10 },
    stem: 'Which department are you in?',
    answers: [
        { text: 'Pharmacy', value: 1 },
        { text: 'Clinical Pharmacy and Pharmacology', value: 2 },
        { text: 'Pharmaceutical Chemistry', value: 3 },
        { text: 'Pharmaceutical Technology', value: 4 }
    ]
});
	API.addQuestionsSet('educationDepartments', {
    inherit: 'basicDropdown',
    name: 'educationDept',
    showIf: { faculty: 11 },
    stem: 'Which department are you in?',
    answers: [
        { text: 'Institute of Education and Research (IER)', value: 1 }
    ]
});
	API.addQuestionsSet('medicineDepartments', {
    inherit: 'basicDropdown',
    name: 'medicineDept',
    showIf: { faculty: 12 },
    stem: 'Which department are you in?',
    answers: [
        { text: 'Dhaka Medical College and Allied Units', value: 1 }
    ]
});
	API.addQuestionsSet('pgMedicalDepartments', {
    inherit: 'basicDropdown',
    name: 'pgMedicalDept',
    showIf: { faculty: 13 },
    stem: 'Which department are you in?',
    answers: [
        { text: 'Centre for Advanced Research and Postgraduate Training Units', value: 1 }
    ]
});

    API.addSequence([
        {
            mixer : 'random', 
            data : [
                {
                    mixer : 'random', 
                    wrapper:true, 
                    data : [
{
    inherit:'basicPage',
    questions: [
        { inherit:'facultyQuestion' },
        { inherit:'artsDepartments' },
        { inherit:'socialDepartments' },
        { inherit:'lawDepartments' },
        { inherit:'fineArtsDepartments' },
        { inherit:'businessDepartments' },
        { inherit:'scienceDepartments' },
        { inherit:'biologicalDepartments' },
        { inherit:'earthDepartments' },
        { inherit:'engineeringDepartments' },
        { inherit:'pharmacyDepartments' },
        { inherit:'educationDepartments' },
        { inherit:'medicineDepartments' },
        { inherit:'pgMedicalDepartments' }
    ]
},
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
