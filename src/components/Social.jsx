import React from "react";
import Icon from "./Icon";
import rating from "./Rating";
import Second from "./Second";




function Social(){
  return (
    <div className="bg">
    <img className="bg-image" src="/images/bg-pattern-top-desktop.svg" alt="bg-img"></img>
    <img className="mobile-bg-image" src="/images/bg-pattern-top-mobile.svg" alt="bg-img"></img>
     <div className="first-row">
     <div className="first-col">
      <h1 className="products-heading">10,000+ of our users love our products.</h1>
      <p className="about"> We only provide great products combined with excellent customer service.
    See what our satisfied customers are saying about our services.</p>
     </div>
     <div className="second-col">
     <div className="review-div review-1">
     <div>
     {rating.map(function ratingEmoji(emojiContent){
  return(
    <Icon
      key = {emojiContent.id}
      id={emojiContent.id}
      img ={emojiContent.img}
    />
  )
})}
</div>
      <p className="rating-p">Rated 5 Stars in Reviews</p>
     </div>
     <div className="review-div review-2">
     <div>
     {rating.map(function ratingEmoji(emojiContent){
  return(
    <Icon
      key = {emojiContent.id}
      id={emojiContent.id}
      img ={emojiContent.img}
    />
  )
})}
</div>
      <p className="rating-p"> Rated 5 Stars in Report Guru</p>
     </div>
     <div className="review-div review-3">
     <div>
     {rating.map(function ratingEmoji(emojiContent){
  return(
    <Icon
      key = {emojiContent.id}
      id={emojiContent.id}
      img ={emojiContent.img}
    />
  )
})}
</div>
      <p className="rating-p">Rated 5 Stars in BestTech</p>
     </div>
     </div>
     
     </div>
     
     <Second/>
     <img className="bg-image-bottom" src="/images/bg-pattern-bottom-desktop.svg" alt="bg-img"></img>
     <img className="mobile-bg-image-bottom" src="/images/bg-pattern-bottom-mobile.svg" alt="bg-img"></img>
     </div>
  )
}


export default Social;