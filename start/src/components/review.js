import React from "react";
import richard  from "../media/richard.png";
import gavin  from "../media/gavin.png";
import jared  from "../media/jared.png";
import dinesh  from "../media/dinesh.png";
import gilfoyle  from "../media/gilfoyle.png";
import bigHead  from "../media/big-head.png";
import monica  from "../media/monica.png";

const reviewImg = [richard,gavin,jared,dinesh,gilfoyle,bigHead,monica];

function ReviewItem( {reviewNames, i} ){
    return <div className="one-testimonial">
    <div className="testimonial-content">
        <p> {reviewNames.comment} </p>
        <br />
    </div>
    <div className="testimonial-person">
        <figure>
          <img src={reviewImg[i]} alt={reviewNames.name} />
        </figure>
        <div className="testimonial-inf">
            <h4>{reviewNames.name}</h4>
            <p>{reviewNames.company}</p>
        </div>
    </div>
</div>
}

export function Review( props ){
    return (
        <section id="reviews" className="section one-page-section second-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Reviews</h2>
                </div>
                
                <div className="row">
                    <div className="col-xs-12">
                        <div className="owl-carousel testimonial-slider">
                            {
                                props.reviewNames.map((item, i)=> {
                                    return <ReviewItem reviewNames = {item} i ={i} key ={i} />
                                })
                            }
                        </div> 
                    </div>
                </div>
            </div> 
        </section>
        )
}