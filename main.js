//Création d'un objet du nouvel utilisateur
const newUser = {
  name: "Olivier Robert-Duboille",
  website: "https://www.doyoubuzz.com/olivier-robert-duboille",
};

const promise01 = fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  body: JSON.stringify(newUser),
  headers: {
    "Content-Type": "application/json",
  },
});

promise01.then(async () => {
  try {
    console.log(response);
    const contenu = await response.json();
  } catch (e) {
    console.log(e);
  }
});

const promise02 = fetch("https://jsonplaceholder.typicode.com/users");
promise02.then(async (response) => {
  try {
    console.log(response);
    const utilisateurs = await response.json();
    console.log(utilisateurs);
  } catch (e) {
    console.log(e);
  }
});
