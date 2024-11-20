import React from "react";

const Members=()=>{
  const members=[
    {
      id:1,
      image: "/m1.jpg",
      title:"Alexa",
    },
    {
      id:2,
      image: "/m2.jpg",
      title:"Max",
    },
    {
      id:3,
      image: "/m3.jpg",
      title:"John",
    },
    {
      id:4,
      image: "/m4.jpg",
      title:"Robert",
    },
    {
      id:5,
      image: "/m5.jpg",
      title:"Siri",
    },
    {
      id:6,
      image: "/m6.jpg",
      title:"Alex",
    },
    {
      id:7,
      image: "/m7.jpg",
      title:"Blade",
    }

  ]
  return <>
  <section className="members">
    <div className="container">
      <div className="heading_section">
        <h2 className="heading">Members</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptates fugit tenetur nihil nisi sed ut totam repellendus numquam nesciunt?</p>
      </div>
      <div className="members_container">
        {
          members.map(element=>(
            <div className="card" key={element.id}>
              <img src={element.image} alt={element.title} />
              <h3>{element.title}</h3>
            </div>
          ))
        }
      </div>
    </div>
  </section>
  </>
}
export default Members;