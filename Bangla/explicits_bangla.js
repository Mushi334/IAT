define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    API.addPagesSet('basicPage',{
        noSubmit:false,
        header: 'প্রশ্নাবলী',
        decline: false,
        declineText: isTouch ? 'প্রত্যাখ্যান করুন' : 'উত্তর দিতে অস্বীকার করুন', 
        autoFocus:true, 
        progressBar: 'পৃষ্ঠা <%= pagesMeta.number %> এর মধ্যে ১'
    });
	
    API.addQuestionsSet('basicQ',{
        decline: 'false',
        required: true, 		
        errorMsg: {
            required: isTouch 
                ? 'অনুগ্রহ করে আপনার ফোন নম্বর দিন।' 
                : 'অনুগ্রহ করে আপনার ফোন নম্বর দিন।'
        },
        autoSubmit: false,
        numericValues: 'true'
    });

    API.addQuestionsSet('phoneQuestion', {
        inherit: 'basicQ',
        type: 'text',
        name: 'phone',
        autoSubmit: false,
        stem: 'অনুগ্রহ করে আপনার ফোন নম্বর লিখুন।'
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
