import React from "react";
import Card from "./Card";
import content from "./Content";


function Second(){
    return (
        <div className="second-row">
           {content.map(function cardAbout(cardAboutContent){
  return (
     <Card
      id ={cardAboutContent.id}
      key = {cardAboutContent.id}
      name = {cardAboutContent.name}
      avatar = {cardAboutContent.avatar}
      verify = {cardAboutContent.verify}
      about = {cardAboutContent.about}
     />
  )
})}

        </div>
    )
}


export default Second;