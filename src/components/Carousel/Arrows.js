import React from "react";

function Arrows({ prevSlide, nextSlide }) {
    return (
        <div className="arrows" >
            <button className="prev" onClick={prevSlide}><i className="fas fa-chevron-left"></i></button>
            <button className="next" onClick={nextSlide}><i className="fas fa-chevron-right"></i></button>
        </div>
    );
}

export default Arrows;