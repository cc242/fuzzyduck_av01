import {
    DATA_FEATURED,
    DATA_STORIES, DATA_NAMES,
} from "./types";
const processStories = (stories)=> {
    let returnArray = [];
    stories.forEach(story => {
        returnArray.push(story.acf);
    })
    return returnArray;
}
function appReducer(state, action) {
    switch (action.type) {
        case DATA_STORIES:
            //console.log('setting stories', action.data);
            return {
                ...state,
                stories: processStories(action.data)
            };
        case DATA_NAMES:
            //console.log('setting names', action.data);
            return {
                ...state,
                names: action.data
            };
        case DATA_FEATURED:
            //console.log('setting featured', action.data);
            return {
                ...state,
                featured: action.data
            };
        default:
            return state;
    }
}

export default appReducer;
