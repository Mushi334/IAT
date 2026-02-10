define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js'], function(APIConstructor, iatExtension){
    let API = new APIConstructor();
    let global = API.getGlobal();

    return iatExtension({
        category1 : {
            name : 'Male', //Will appear in the data.
            title : {
                media : {word : 'Male'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'Raihan'},
                {word: 'Ovishek'},
                {word: 'Samir'},
                {word: 'Turjo'},
                {word: 'Tushar'},                 
                {word: 'Asif'}     
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 : {
            name : 'Female', //Will appear in the data.
            title : {
                media : {word : 'Female'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'Chandrika'},
                {word: 'Israt'},
                {word: 'Nafisa'},
                {word: 'Shoily'},
                {word: 'Sumaiya'},
                {word: 'Anjila'}
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
        attribute1 : {
            name : 'Science',
            title : {
                media : {word : 'Science'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'Chemistry'},
                {word: 'Physics'},
                {word: 'Mathematics'},
                {word: 'Pharmacy'},
                {word: 'Biology'},
                {word: 'Geology'},
                {word: 'Engineering'},
                {word: 'Medical'}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        attribute2 : {
            name : 'Humanities',
            title : {
                media : {word : 'Humanities'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'History'},
                {word: 'Philosophy'},
                {word: 'Anthropology'},
                {word: 'Art History'},
                {word: 'Linguistics'},
                {word: 'Literature'},
                {word: 'Sociology'},
                {word: 'Theology'}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        base_url : {//Where are your images at?
            image : global.baseURL
        },
        isTouch : global.$isTouch
    });
});

