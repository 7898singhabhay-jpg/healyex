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

const counters = document.querySelectorAll(".counter");

counters.forEach(counter =>{
    const updateCounter = () =>{
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 100;

        if(current < target){
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 30);
        }else {
            counter.innerText = target;
        }
    };


    updateCounter();
});


const treatments = [
  {
    title: "Back Pain Therapy",
    short: "Effective relief for chronic and acute back pain.",
    details: "Includes manual therapy, strengthening exercises, posture correction, and mobility training."
  },
  {
    title: "Sports Injury Rehabilitation",
    short: "Recover safely and return to sports faster.",
    details: "Focuses on muscle balance, joint stability, and progressive strengthening techniques."
  },
  {
    title: "Neck & Shoulder Therapy",
    short: "Reduce stiffness and restore mobility.",
    details: "Combines stretching, manual therapy, and ergonomic correction methods."
  },
  {
    title: "Post-Surgery Rehabilitation",
    short: "Accelerate healing and regain strength.",
    details: "Customized rehab plans based on surgical procedures and recovery stages."
  }
];


const treatmentContainer = document.getElementById("treatmentContainer");

if(treatmentContainer){
    treatments.forEach((treatment, index) => {

        const card = document.createElement("div");
        card.className = "treatment-card";

        card.innerHTML = `
         <h3>${treatment.title}</h3>
      <p>${treatment.short}</p>

      <div class="treatment-details" id="details-${index}">
        <p>${treatment.details}</p>
        <a href="appointment.html" class="btn primary">Book Now</a>
      </div>

      <button class="toggle-btn" data-index="${index}">
        View Details
      </button>
      `;

      treatmentContainer.appendChild(card);
    });
}


document.addEventListener(
    "click", (e) =>{

        if(e.target.classList.contains("toggle-btn")){

            const index = e.target.getAttribute("data-index");
            const details = document.getElementById(`details-${index}`);

            details.classList.toggle("active");

            if (details.classList.contains("active")){
                e.target.innerText = "Hide Details";
            }else {
                e.target.innerText = "View Details";
            }
        }
    }
);