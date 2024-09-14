document.getElementById("fetchData").addEventListener("click", async () => {
  console.log("esto es una prueba");
  const apiUrl = "https://randomuser.me/api/";

  try {
    const response = await fetch(apiUrl); // Espera la respuesta de la API
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }

    const data = await response.json(); //Convertimos la data en un formato json
    const user = data.results[0];
    if (user.dob.age < 50) {
      const userInfo = `
      <p><strong>Nombre:</strong> ${user.name.first} ${user.name.last}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Ciudad:</strong> ${user.location.city}, ${user.location.country}</p>
      <p><strong>Edad:</strong> ${user.dob.age} </p>
      <p><strong>Nombre de usuario:</strong> ${user.login.username} </p>
      <p><strong>Telefono:</strong> ${user.phone} </p>
      <img src="${user.picture.large}" alt="Foto de usuario">
   `;
     document.getElementById("data").innerHTML = userInfo;
    } else{
      document.getElementById("data").innerHTML = 
      "<p>Los usuarios mayores de 50 no los podemos mostrar.</p>"; 
    }

 
   } catch (error) {
    console.error("Error:", error); 
    document.getElementById("data").innerHTML = 
      "<p>Ocurrió un error al obtener los datos.</p>"; 
  }
});

