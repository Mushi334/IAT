define(['pipAPI','https://cdn.jsdelivr.net/gh/Mushi334/IAT@740679111b160a676bfb494102f91a2171a44b2f/Bangla/iat10.js'], function(APIConstructor, iatExtension){
    let API = new APIConstructor();
    let global = API.getGlobal();
    return iatExtension({
        category1 : {
            name : 'পুরুষ', //Will appear in the data.
            title : {
                media : {word : 'পুরুষ'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'2em', 'font-family':'"Noto Sans Bengali", sans-serif'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'রায়হান'},
                {word: 'অভিষেক'},
                {word: 'সামির'},
                {word: 'তুর্জো'},
                {word: 'তুষার'},                 
                {word: 'আসিফ'},
                {word: 'ইব্রাহিম'},
                {word: 'আব্দুল্লাহ'},
                {word: 'সেলিম'},
                {word: 'অর্ণব'}
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em', 'font-family':'"Noto Sans Bengali", sans-serif'}
        },    
        category2 : {
            name : 'মহিলা', //Will appear in the data.
            title : {
                media : {word : 'মহিলা'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'2em', 'font-family':'"Noto Sans Bengali", sans-serif'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'চন্দ্রিকা'},
                {word: 'ইসরাত'},
                {word: 'নাফিসা'},
                {word: 'শৈলী'},
                {word: 'সুমাইয়া'},
                {word: 'অঞ্জিলা'},
                {word: 'অহনা'},
                {word: 'মীম'},
                {word: 'ঐশী'},
                {word: 'রামিসা'}
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em', 'font-family':'"Noto Sans Bengali", sans-serif'}
        },
        attribute1 : {
            name : 'বিজ্ঞান বিভাগ',
            title : {
                media : {word : 'বিজ্ঞান বিভাগ'},
                css : {color:'#0000FF','font-size':'2em', 'font-family':'"Noto Sans Bengali", sans-serif'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'রসায়ন'},
                {word: 'পদার্থবিজ্ঞান'},
                {word: 'গণিত'},
                {word: 'ফার্মেসি'},
                {word: 'জীববিজ্ঞান'},
                {word: 'ভূবিজ্ঞান'},
                {word: 'প্রকৌশল'},
                {word: 'পরিসংখ্যান'},
                {word: 'মনোবিজ্ঞান'},
                {word: 'কম্পিউটার বিজ্ঞান'}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em', 'font-family':'"Noto Sans Bengali", sans-serif'}
        },
        attribute2 : {
            name : 'মানবিক বিভাগ',
            title : {
                media : {word : 'মানবিক বিভাগ'},
                css : {color:'#0000FF','font-size':'2em', 'font-family':'"Noto Sans Bengali", sans-serif'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'ইতিহাস'},
                {word: 'দর্শনশাস্ত্র'},
                {word: 'নৃবিজ্ঞান'},
                {word: 'চারুকলা'},
                {word: 'ইংরেজি'},
                {word: 'সাহিত্য'},
                {word: 'সমাজবিজ্ঞান'},
                {word: 'ধর্মতত্ত্ব'},
                {word: 'সাংবাদিকতা'},
                {word: 'নাট্যকলা'}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em', 'font-family':'"Noto Sans Bengali", sans-serif'}
        },
        base_url : {//Where are your images at?
            image : global.baseURL
        },
        isTouch : global.$isTouch
    });
});
