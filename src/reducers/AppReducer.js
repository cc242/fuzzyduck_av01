import {
    DATA_FEATURED,DATA_NAMES, DATA_MEDALS,
} from "./types";

const processStories = (stories)=> {
    let returnArray = [];
    stories.forEach(story => {
        // console.log('', story, story.id);
        returnArray.push({id: story.id, ...story.acf});
    })
    return returnArray;
}
const processFeaturedNames = (data)=> {
    let returnArray = [];
    data.forEach((name, i) => {
        //console.log('', name.acf);
        if (name.acf.featured_story) {
            // console.log('featured', name.acf.featured_story.ID, 'is name: ', i);
            returnArray.push(name.acf)
        }
    })
    // console.log('', returnArray);
    return returnArray;
}
const processNames = (data)=> {
    console.log('', data);
    let returnArray = []
    data.forEach(name => {
     returnArray.push(name.acf)
    })
    return returnArray;
}
const processMedals = (data)=> {
    let returnArray = []
    data.forEach(medal => {
        returnArray.push({id: medal.id, images: medal.acf.medal_image})
    })
    return returnArray;
}
function appReducer(state, action) {
    switch (action.type) {
        case DATA_NAMES:
            //console.log('setting names', action.data);
            return {
                ...state,
                names: processNames(action.data),
                featuredNames: processFeaturedNames(action.data),
            };
        case DATA_MEDALS:
            // console.log('setting names', action.data);
            return {
                ...state,
                medals: processMedals(action.data)
            };
        case DATA_FEATURED:
            //console.log('setting featured', action.data);
            return {
                ...state,
                featured: processStories(action.data)
            };
        default:
            return state;
    }
}

export default appReducer;
