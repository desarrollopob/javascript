document.getElementById("fetchData").addEventListener("click", () => {
    console.log('esto es una prueba');
    
  // URL de la API, por ejemplo, la API de usuarios aleatorios
  const apiUrl = "https://randomuser.me/api/";
  fetch(apiUrl)
    .then( (response) => {
        console.log(response);
        
        if (!response.ok) {
            throw new Error("Error en la solicitud");
          }
          return response.json(); // Convertir la respuesta a JSON
    })
    .then((data) => {
        const user = data.results[0];
        const userInfo = `
                  <p><strong>Nombre:</strong> ${user.name.first} ${user.name.last}</p>
                  <p><strong>Email:</strong> ${user.email}</p>
                  <p><strong>Ciudad:</strong> ${user.location.city},
                   ${user.location.country}</p>
                  <img src="${user.picture.large}" alt="Foto de usuario">
              `;
        document.getElementById("data").innerHTML = userInfo;
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("data").innerHTML =
          "<p>Ocurrió un error al obtener los datos.</p>";
      });
});
















