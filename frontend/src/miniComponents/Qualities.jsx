import React from "react";

const Qualities=()=>{
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:
        "Our commitment to community development lies at the core of everything we do. By empowering local communities, we work toward fostering sustainable growth, access to education, healthcare, and economic opportunities.We believe in creating environments where everyone has the chance to thrive, regardless of background or circumstance. Together, we can build stronger, more resilient communities.",
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:
        "Transparency is the foundation of trust in everything we do. We ensure that our actions, decisions, and financial allocations are clear, honest, and open to scrutiny.By providing detailed reports and updates, we hold ourselves accountable to our supporters, partners, and the communities we serve. Your contributions are used wisely and efficiently to make the greatest impact.",
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "IMPACT MEASUREMENT",
      description:
        "We believe that real change is measurable. Our commitment to impact measurement ensures that every initiative is evaluated for effectiveness, ensuring that we are consistently improving and delivering on our promises.Through data-driven insights, we track progress and assess the outcomes of our projects, allowing us to refine strategies and maximize the benefits for those in need.",
    },
  ];
  return <>
 <div className="qualities">
  <h2>OUR QUALITIES</h2>
  <div className="container">
    {
      qualities.map(element=>{
        return (
          <div className="card" key={element.id}>
            <div className="img-wrapper">
              <img src={element.image} alt={element.title} />
            </div>
            <div className="content">
              <p className="title">
                {element.title}
              </p>
              <p className="description">
                {element.description}
              </p>
            </div>
          </div>
        )
      })
    }
  </div>
 </div>
  </>
}
export default Qualities;