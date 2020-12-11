import React, {memo, useContext, useEffect, useRef, useState} from "react";
import {Link, Route, useHistory} from "react-router-dom";
import Page from "../Page";
import './styles/styles.scss';
import {AppContext} from "../../context/AppContext";
import RSC from "react-scrollbars-custom";
import {Expo, Quad, gsap} from "gsap";
import SVG from 'react-inlinesvg';
import close from "./assets/bt_close.svg";
const Memorial = memo(props => {
    const history = useHistory();
    const {state, dispatch} = useContext(AppContext);
    const [active, setActive] = useState(null)
    const fr = useRef(true);
    const fr2 = useRef(true);
    const aresults = useRef();
    const overlay = useRef();
    const overlayInner = useRef();
    const [filteredNames, setFilteredNames] = useState([])
    const [selected, setSelected] = useState();

    useEffect(()=> {
        if (fr.current) { fr.current = false; return;}
        setFilteredNames(state.names);
    }, [state.names])
    useEffect(()=> {
        if (fr.current) { fr.current = false; return;}
        setFilteredNames(state.names);
        showNames();
    }, [])
    useEffect(()=> {
        if (fr2.current) { fr2.current = false; return;}
        showNames();
    }, [state.featured])
    const showNames = ()=> {
        setTimeout(()=> {
            gsap.to('.results', {duration: 0.3, alpha: 1});
        }, 60)
    }
    const filter = (e,i)=> {
        // changes css on button
        if (active === i) {
            setActive(null);
            setFilteredNames(state.names);
            showNames()
            return;
        } else {
            setActive(i);
        }
        // filter names
        const startsWithLetter = (entry) => entry.surname.substring(0,1) === e;
        let newNames = state.names.filter(startsWithLetter);

        console.log('newnames', newNames);


        setFilteredNames(newNames);
        setTimeout(()=> {
            gsap.to('.results', {duration: 0.3, alpha: 1});
        }, 60)
    }
    const Letter = memo(props => {
        return (
            <div
                data-id={props.i}
                className= { `memorial-letters__letter ${active === props.i ? "memorial-letters__letter--active" : ""}` }
                onClick={()=> filter(props.e, props.i)}
            >{props.e}</div>
        )
    });
    const Letters = memo(props => {
        let arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        return (
            arr.map((e, i) => (
                <Letter e={e} i={i} key={i}/>
            ))
        )
    });
    const showDetail = (personData)=> {
        console.log('', personData);
        if (personData.featured_story) {
            console.log('showing featured',personData.featured_story.ID);
            history.push(`story/${personData.featured_story.ID}`)
        } else {
            showPopup(personData)
        }
    }
    const showPopup = (personData)=> {
        setSelected(personData)
    }
    useEffect(()=> {
        if (selected) {
            openOverlay();
        }
    }, [selected]);

    const Results = ()=> {
        return (
            <RSC id="RSC-Example" style={{width: "830px", height: "800px", inverted: false}}>
                <div className="results" ref={aresults}>
                    {filteredNames && filteredNames.length ? (
                        filteredNames.map((e, i) => (
                            <div key={i}
                                 className={ `results__result ${ e.featured_story ? "results__result--featured" : ""}` }
                                onClick={()=> {showDetail(e)}}
                            >
                                <span>{e.surname}</span>, {e.initials}
                            </div>
                        ))
                    ) : (
                        <div>No results</div>
                    )}
                </div>
            </RSC>
        )
    }

    const ImageOverlay =  memo(props => {
        return (
            <div className="imageoverlay" ref={overlay}>
                <div className="imageoverlay__container" ref={overlayInner}>
                    <div className="imageoverlay__close"  onClick={closeOverlay}>
                        <SVG src={close} onClick={closeOverlay}/>
                    </div>
                    <div className="imageoverlay__image">
                        <div className="popup">
                        <div className="popup__left">
                        <h1>{selected && selected.first_name} {selected && selected.surname}</h1>
                            <p className="sub">
                                {selected ? (
                                    selected.service_number ? <span className="bold">{selected.service_number}</span> : ''
                                ) : (<></>)}

                                {selected ? (
                                    selected.battalion ? ` / ${selected.battalion}` : ''
                                ) : (<></>)}

                                {selected ? (
                                    selected.previously ? ` / previously ${selected.previously}` : ''
                                ) : (<></>)}

                                {selected ? (
                                    selected.company ? ` / previously ${selected.company}` : ''
                                ) : (<></>)}
                            </p>
                        {selected && selected.rank ? (
                            <p><span className="bold">Rank: </span>{selected.rank}</p>
                        ) : (<></>)}
                        {selected && selected.date_of_death ? (
                            <p><span className="bold">Date of death: </span>{selected.date_of_death}
                                {selected.kia ? ` / ${selected.kia}` : ''}
                            </p>
                        ) : (<></>)}
                        {selected && selected.born ? (
                            <p><span className="bold">Born: </span>{selected.born}</p>
                        ) : (<></>)}
                        {selected && selected.buried ? (
                            <p><span className="bold">Buried/memorialised: </span>{selected.buried}
                                {selected.grave_reference ? ` / ${selected.grave_reference}` : ''}
                            </p>
                        ) : (<></>)}
                        {selected && selected.next_of_kin ? (
                            <p><span className="bold">Next of kin: </span>{selected.next_of_kin}</p>
                        ) : (<></>)}
                        </div>
                        <div className="popup__right">
                            {selected && selected.photo ? (
                                <img src={selected.photo.sizes.medium} />
                            ) : (<></>)}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    const openOverlay = () => {
        gsap.set(overlay.current, {alpha: 0});
        gsap.to(overlay.current, {duration: 0.2, alpha: 1});
        gsap.set(overlayInner.current, {alpha: 0, scale: 0.95});
        gsap.to(overlayInner.current, {duration: 1, scale: 1, alpha: 1, delay: 0.1, force3D:false, rotationZ:0.01, ease: Expo.easeOut});
        overlay.current.style.display = 'flex';
    }
    const closeOverlay = () => {
        setSelected(null)
        overlay.current.style.display = 'none';
        showNames();
    }

    return (
        <Page class="memorial">
            <ImageOverlay/>
            <div className="memorial__left">
                <div className="memorial-letters">
                    <h1>Memorial board</h1>
                    <h2>Full list of names</h2>
                    <div className="memorial-letters__letters">
                        <Letters/>
                    </div>
                </div>
            </div>
            <div className="memorial__right">
                <Results/>
            </div>
        </Page>
    )
})
export default Memorial;
