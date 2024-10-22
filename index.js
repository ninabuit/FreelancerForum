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
  
  const freelancerList = document.getElementById("freelancerList");
  const averagePrice = document.getElementById("averagePrice");

  function getAveragePrice() {
    const totalPrice = freelancers.reduce(
      (sum, freelancer) => sum + freelancer.price,0
    )
    const freelancerAverage = totalPrice / freelancers.length
    averagePrice.textContent=`The new average price is:${freelancerAverage}`
  }
  
const renderAllFreelancers =() =>{
  const everyFreelancer = freelancers.map((eachFreelancer)=>{
    return `<li> ${eachFreelancer.name} : ${eachFreelancer.occupation} price: ${eachFreelancer.price} </li>`
  });
  freelancerList.innerHTML = everyFreelancer
}

  const addFreelancer = () => {
    
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const occupation =
      OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
    const price = 1 + Math.floor(Math.random() * 100);
    freelancers.push( {name, occupation, price} );
  }

setInterval(()=>{
  addFreelancer ();
  renderAllFreelancers();
  getAveragePrice();
},3000)
  