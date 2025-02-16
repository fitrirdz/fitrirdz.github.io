const cardWidth = 500,
  degIncrement = 5,
  card = document.getElementById("card");

const getRotateDeg = (input) => {
  if (input < cardWidth * 0.33) {
    return `-${degIncrement * 3}deg`;
  } else if (input >= cardWidth * 0.33 && input < cardWidth * 0.66) {
    return `-${degIncrement}deg`;
  } else if (input >= cardWidth * 0.66 && input < cardWidth * 0.5) {
    return `0deg`;
  } else if (input >= cardWidth * 0.5 && input < cardWidth * 0.33) {
    return `${degIncrement}deg`;
  } else {
    return `${degIncrement * 3}deg`;
  }
};

const onMouseMove = (event) => {
  const { target } = event;
  const rect = target.getBoundingClientRect();

  const rotateX = getRotateDeg(event.clientY - rect.top);
  const rotateY = getRotateDeg(event.clientX - rect.left);

  card.style.transform = `rotateX(${rotateX}) rotateY(${rotateY})`;
};

const onMouseLeave = () => {
  card.style.transform = `none`;
};

const getRandomId = () => {
  fetch("../json/messages.json")
    .then((response) => response.json())
    .then((json) => {
      const id = Math.floor(Math.random() * json?.length);
      const name = sessionStorage.getItem("nama");
      document.getElementById("destination").innerHTML = `To: ${name}`;
      document.getElementById("nama").innerHTML = `Hi ${name},`;
      document.getElementById("message").innerHTML = json[id].message;
      document.getElementById("note").innerHTML = json[id].note;
    });
};

const openMessage = () => {
  const name = document.getElementById("name");
  sessionStorage.setItem("nama", name?.value);
  window.location.href = "/playground/message.html";
};
