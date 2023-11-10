let headers = new Headers({
  "Content-Type": "application/json",
  "X-Custom-Header": "custom value",
});

fetch(
  "http://localhost:3000/MyTenant/api/products?" +
    new URLSearchParams({
      skip: 0,
      take: 3,
    }),
  {
    headers: headers,
    method: "GET",
  }
)
  .then((response) => {
    if (!response.ok) {
      console.log("La peticion fallo por favor revise el llamado al servicio");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);

    let container = document.getElementById("container");
    let toRenderHtml = "";
    data.forEach((objeto) => {
      toRenderHtml += `<h3>${objeto.name}</h3>`;
      toRenderHtml += `<p>${objeto.description}</p>`;
      toRenderHtml += `<span>${objeto.price}</span>`;
      toRenderHtml += `<br/>`;
    });
    container.innerHTML = toRenderHtml;
  })
  .catch((err) => {
    alert("Ocurrio un error");
  });

// fetch(
//   "http://localhost:3000/MyTenant/api/products?" +
//     new URLSearchParams({
//       skip: 0,
//       take: 3,
//     }),
//   {
//     headers: headers,
//     //  method: "PUT",
//     method: "POST",
//     body: `{"nombre":"Alexis", "apellido":"Matamoros"}`,
//   }
// )
//   .then((response) => {
//     if (!response.ok) {
//       console.log("La peticion fallo por favor revise el llamado al servicio");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);

//     let container = document.getElementById("container");
//     let toRenderHtml = "";
//     data.forEach((objeto) => {
//       toRenderHtml += `<h3>${objeto.name}</h3>`;
//       toRenderHtml += `<p>${objeto.description}</p>`;
//       toRenderHtml += `<span>${objeto.price}</span>`;
//       toRenderHtml += `<br/>`;
//     });
//     container.innerHTML = toRenderHtml;
//   })
//   .catch((err) => {
//     alert("Ocurrio un error");
//   });
