const NAMES = [
    "John",
    "Lenny",
    "Andrew",
    "Peter",
    "Anna",
    "Albert",
    "Adam",
    "Robert",
  ];
  const OCCUPATIONS = [
    "Psychologist",
    "programmer",
    "teacher",
    "driver",
    "Therapist",
    "painter",
    "writer",
    "actor",
  ];
  const maxFreelancers = 25;
  const freelancers = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 50 },
    { name: "Patricia", occupation: "Teacher", price: 65 },
    { name: "Patricia", occupation: "Gardner", price: 65 },
    { name: "Derek", occupation: "Programmer", price: 80 },
    { name: "Beatrice", occupation: "Therapist", price: 120 },
    { name: "Libby", occupation: "Psychologist", price: 110 },
    { name: "Brandon", occupation: "Handyman", price: 45 },
  ];
  // Setting up the containers
  const freelancerList = document.getElementById("freelancerList");
  const averagePrice = document.getElementById("averagePrice");
  // Calculate the average price
  function getAveragePrice() {
    const totalPrice = freelancers.reduce(
      (sum, freelancer) => sum + freelancer.price,
  let ,averagePrice = 0;)
    }
  /** Adds a random freelancer to state */
  const addFreelancer = () => {
    // Pick random name, occupation and price
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const occupation =
      OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
    const price = 1 + Math.floor(Math.random() * 100);
    freelancers.push({ name, occupation, price });
  }
  /** Updates average price according to freelancers in state */
  updateAveragePrice = (state) => {
    const total = freelancers.reduce(
      (acc, freelancer) => acc + freelancer.price,
      0
    );
    return totalPrice / freelancers.length;
    averagePrice = total / freelancers.length;
  }
  // Making it render
  const render = () => {
    const $freelancers = freelancers.map((freelancer) => {
      const NameElement = document.createElement("li");
      const nameText = document.createTextNode(freelancer.name);
      NameElement.appendChild(nameText);}
    )}
  
      const OccupationElement = document.createElement("li");
      const occText = document.createTextNode(freelancer.occupation);
      OccupationElement.appendChild(occText);
  // === Render ===
  /** Renders freelancers onto the page */
  const renderFreelancers= () => {
    const $freelancers = freelancers.map((freelancer) => {
      const $tr = document.createElement("tr");
  
      const PriceElement = document.createElement("li");
      const priceText = document.createTextNode(freelancer.price);
      PriceElement.appendChild(priceText);
      $tr.innerHTML = `
      <td>${freelancer.name}</td>
      <td>${freelancer.occupation}</td>
      <td>$${freelancer.price}</td>
      `;
  
      return NameElement;
      return $tr;
    });
  
    freelancerList.replaceChildren(...$freelancers);
    const $tbody = document.querySelector(".freelancers tbody");
    $tbody.replaceChildren(...$freelancers);
  }
  /** Renders the average price */
  function renderAveragePrice() {
    const $price = document.querySelector(".average_price");
    $price.textContent = `$${averagePrice.toFixed(2)}`;
  }
  /** Renders everything in state */
  function render() {
    renderFreelancers();
    renderAveragePrice();
  }
  // === Script ===
  // Initial render
  updateAveragePrice();
  render();
  // Doing the interval
  // Add a freelancer every second until max is reached
  const freelancerInterval = setInterval(function () {
    addFreelancer();
    updateAveragePrice();
    render();
    if (freelancers.length >= MAX_FREELANCERS) {
      clearInterval(freelancerInterval);
    }
  }, 1000);  