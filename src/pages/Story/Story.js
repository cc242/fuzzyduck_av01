import React, {useContext, useEffect, useRef, useState} from "react";
import Page from "../Page";
import {useHistory, useParams} from "react-router-dom";
import './styles/styles.scss';
import {AppContext} from "../../context/AppContext";
import {gsap} from "gsap";
import {getIndexByKeyValue} from "../../utils/utilities";
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import RSC from "react-scrollbars-custom";
import Interweave from "interweave";
import blankImage from "./assets/blank_profile@2x.png";

const Story = () => {
    const {state} = useContext(AppContext);
    const history = useHistory();
    const {id} = useParams();
    const [story, setStory] = useState()
    const [person, setPerson] = useState()
    const [displaymedals, setDisplaymedals] = useState()
    const select_medals = useRef();
    const select_objects = useRef();

    useEffect(() => {
        if (state.featured) {
           let idx = getIndexByKeyValue(state.featured, 'id', parseInt(id));
           setStory(state.featured[idx]);
           let storyID = state.featured[idx].id;
           console.log('story', state.featured[idx]);

            state.names.forEach(name => {
             if (name.featured_story && name.featured_story.ID === storyID) {
                 console.log('', name);
                 setPerson(name);
             }
           })

            let medals = state.featured[idx].medals;
            //console.log('medals', medals);

            //let idx = getIndexByKeyValue(state.featured, 'id', parseInt(id));
           let tempMedals = [];
           if (medals) {
               medals.forEach(medal => {
                   let idx = getIndexByKeyValue(state.medals, 'id', parseInt(medal.ID));
                   if (state.medals[idx].images) {
                       tempMedals.push({url: state.medals[idx].images, credit: state.medals[idx].image_credit})
                   }
               })
               setDisplaymedals(tempMedals)
           } else {
               console.log('', story);
               if (story && story.other_objects) {
                   showObjects();
               }
           }
        }
    }, [state.featured, id]);

    useEffect(()=> {
        console.log('', story);
        if (displaymedals) {

        } else {
            console.log('', story);
            if (story && story.other_objects) {
                showObjects();
            }
        }
    }, [story])

    const showMedals = ()=> {
        gsap.set('.images__objects', {autoAlpha: 0})
        gsap.set('.images__medal', {autoAlpha: 1});
        select_medals.current.classList.add('image_select--active')
        if (select_objects.current) {
            select_objects.current.classList.remove('image_select--active')
        }
    }
    const showObjects = ()=> {
        gsap.set('.images__objects', {autoAlpha: 1})
        gsap.set('.images__medal', {autoAlpha: 0});
        select_objects.current.classList.add('image_select--active')
        select_medals.current && select_medals.current.classList.remove('image_select--active')
    }
    const onBack = ()=> {
        history.goBack()
    }

    return (
        <Page class="story">
            {story ? (
                <>
                    <div className="story__left">
                        <div className="bt_back" onClick={onBack}>Back</div>
                        <h1>Featured stories</h1>
                        <div className="featured_result__image">
                            <img src={blankImage} />
                        </div>
                    </div>
                    <div className="story__mid">
                        {person && person.first_name ? (
                            <h2>{person && person.first_name} {person && person.surname}</h2>
                        ) : (<></>)}
                        <RSC id="RSC-Example" style={{width: "700px", height: "80%", inverted: false}}>
                            <div className="story__copy">
                            <div className="relatedperson">
                                {person && person.rank ? (
                                    <p><span className="bold">Rank: </span>{person.rank}</p>
                                ) : (<></>)}
                                {person && person.date_of_death ? (
                                    <p><span className="bold">Date of death: </span>{person.date_of_death}&nbsp;

                                     ({person.kia ? (
                                            person.kia
                                        ) : (<></>)})

                                    </p>
                                ) : (<></>)}
                                {person && person.buried ? (
                                    <p><span className="bold">Grave/Memorial: </span>{person.buried}</p>
                                ) : (<></>)}
                                {person && person.next_of_kin ? (
                                    <p><span className="bold">Next of kin: </span>{person.next_of_kin}</p>
                                ) : (<></>)}
                            </div>

                            {story && story.personal_info ? (
                                <>
                                <Interweave content={story.personal_info}></Interweave>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                </>

                            ) : (<></>)}
                            </div>
                        </RSC>

                    </div>
                    <div className="story__right">
                        <div className={`image_select ${!story.other_objects.length ? 'image_select__medals' : ''}`}>
                            {
                                displaymedals ?
                                    <div ref={select_medals} className="image_select__item image_select__left image_select--active" onClick={showMedals}>medals</div>
                                    : null
                            }
                            {
                                story.other_objects.length ?
                                    <div ref={select_objects} className="image_select__item image_select__right" onClick={showObjects}>objects</div>
                                    : null
                            }
                        </div>
                        <div className="images">
                            <div className="images__medal">
                                {displaymedals && displaymedals.length ?
                                    displaymedals.map((e, i) => (
                                        <img key={i} src={e.url} />
                                    ))
                                : null
                                }
                            </div>
                            <div className="images__objects">
                                <Swiper
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{clickable: true}}
                                >
                                    {story.other_objects && story.other_objects.map((object, index) => (
                                        <SwiperSlide key={index} >
                                            <img src={object.sizes.medium} alt=""/>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="images__credit">
                                {displaymedals && displaymedals.length ?
                                    displaymedals.map((e, i) => (
                                        <p key={i}>{e.credit}</p>
                                    ))
                                    : null
                                }
                                {story.other_objects && story.other_objects.map((e, i) => (
                                    <p key={i}>{e.description}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                </>

                ) :
                <></>
            }

        </Page>
    )
}
export default Story;
