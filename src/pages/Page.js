import React, {useEffect} from "react";
import {gsap} from "gsap";

const Page = (props)=> {
    useEffect(()=> {
        gsap.killTweensOf('.page');
        gsap.to('.page', {duration: 0.5, alpha: 1});
    }, [])
    return (
        <div className="page">
            { props.children }
        </div>
    )
}
export default Page;
