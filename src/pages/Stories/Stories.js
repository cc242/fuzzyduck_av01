import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Page from "../Page";
import './styles/styles.scss';
import {AppContext} from "../../context/AppContext";

const Stories = () => {
    const {state} = useContext(AppContext);
    const [stories, setStories] = useState(false);

    useEffect(()=> {
       if (state.stories && state.stories.length) {
           console.log('loaded', state.stories);
           /*let stories = [];
           state.stories.forEach(story => {
                stories.push(story.acf);
           })*/
       }
    }, [state.stories])

    const openStory = ()=> {

    }

    return (
        <Page>
            <div className="stories">
                <div className="stories__panel stories__panel--sidebar">
                    <h1>Stories</h1>
                </div>
                <div className="stories__panel stories__panel--main">
                    <div className="stories-grid">
                        { state.stories && state.stories.map((item, index)=> (
                            <div key={index} onClick={openStory}>
                                <h1>{item.person_name}</h1>
                                <p>{item.object_name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*{ state && state.stories.map((item, index)=> (
                <div key={index}>
                    <h1>{item.name}</h1>
                    {item.question_short}: {item.answer !== '' ? item.answers[item.answer].answer_copy : ''}
                </div>
            ))}*/}
        </Page>
    )
}
export default Stories;
