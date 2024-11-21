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
        <p>Our members are the heart of our organization. From dedicated volunteers to passionate supporters, we are united by a shared vision of kindness and service.

By becoming a member, you join a network of individuals committed to making the world a better place—one step, one smile, one life at a time.</p>
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