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
