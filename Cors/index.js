fetch("http://localhost:3000/data", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
