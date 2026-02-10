const services = [
    { title: "Back Pain Therapy", desc: "Relieve chronic and acute back pain." },
    { title: "Sports Injury Rehab", desc: "Recover safely from sports injuries." },
    { title: "Neck & Shoulder Pain", desc: "Reduce stiffness and discomfort." },
    { title: "Post-Surgery Rehab", desc: "Faster recovery after surgery." },
];

const serviceGrid = document.getElementById("serviceGrid")

if (serviceGrid) {
    services.forEach(service => {
        const card = document.createElement("div");
        card.className = "service-card";
        card.innerHTML = `
       <h3>${service.title}</h3>;
       <p>${service.desc}</p>
        `;


        serviceGrid.appendChild(card);
    });
}

const testimonials = [
  {
    name: "Rahul Sharma",
    review: "My back pain improved within weeks. Highly recommended!",
  },
  {
    name: "Anita Verma",
    review: "Very professional and caring treatment.",
  },
  {
    name: "Suresh Kumar",
    review: "Best physiotherapy clinic experience I've had.",
  }
];

const testimonialGrid = document.getElementById("testimonialGrid");

if(testimonialGrid){
    testimonials.forEach(item => {
        const div = document.createElement("div");
        div.className = "testimonial-card";
        div.innerHTML = `
         <p>"${item.review}"</p>
      <h4>- ${item.name}</h4>
      `;

      testimonialGrid.appendChild(div);
    });
}