define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    API.addPagesSet('basicPage',{
        noSubmit:false,
        header: 'Questionnaire',
        decline: false,
        declineText: isTouch ? 'Decline' : 'Decline to Answer', 
        autoFocus:true, 
        progressBar: 'Page <%= pagesMeta.number %> out of 1'
    });
	
    API.addQuestionsSet('basicQ',{
        decline: 'false',
        required: true, 		
        errorMsg: {
            required: isTouch 
                ? 'Please enter your phone number.' 
                : 'Please enter your phone number.'
        },
        autoSubmit: false,
        numericValues: 'true'
    });

    API.addQuestionsSet('phoneQuestion', {
        inherit: 'basicQ',
        type: 'text',
        name: 'phone',
        autoSubmit: false,
        stem: 'Please enter your phone number.'
    });

    API.addSequence([
        {
            inherit: 'basicPage',
            questions: [
                { inherit: 'phoneQuestion' }
            ]
        }
    ]);

    return API.script;
});
