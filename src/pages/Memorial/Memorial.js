import React, {memo, useContext, useEffect, useRef, useState} from "react";
import {Link, Route, useHistory} from "react-router-dom";
import Page from "../Page";
import './styles/styles.scss';
import {AppContext} from "../../context/AppContext";
import RSC from "react-scrollbars-custom";
const Memorial = () => {
    const history = useHistory();
    const {state, dispatch} = useContext(AppContext);
    const [active, setActive] = useState(null)
    const fr = useRef(true);
    const [filteredNames, setFilteredNames] = useState([])

    useEffect(()=> {
        if (fr.current) { fr.current = false; return;}
        setFilteredNames(state.names);
    }, [state.names])

    const filter = (e,i)=> {
        console.log('', e);
        // changes css on button
        setActive(i);
        // filter names
        const startsWithLetter = (entry) => entry.name.substring(0,1) === e;
        let newNames = state.names.filter(startsWithLetter);
        setFilteredNames(newNames);
    }
    const Letter = memo(props => {
        return (
            <div
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
    const Results = ()=> {
        return (
            <RSC id="RSC-Example" style={{width: "700px", height: "800px", inverted: false}}>
                <div className="results">
                    {filteredNames && filteredNames.length ? (
                        filteredNames.map((e, i) => (
                            <div key={i}
                                 className={ `results__result ${ e.featured_story ? "results__result--featured" : ""}` }
                            >
                                {e.name}
                            </div>
                        ))
                    ) : (
                        <div>No results</div>
                    )}
                </div>
            </RSC>
        )
    }

    return (
        <Page class="memorial">
            <div className="memorial__left">
                <div className="memorial-letters">
                    <h1>Memorial board</h1>
                    <h2>Full list of names</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis ac nisl lacus. Sed a consequat velit, et scelerisque lacus.
                        Maecenas vitae porttitor leo.</p>
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
}
export default Memorial;
