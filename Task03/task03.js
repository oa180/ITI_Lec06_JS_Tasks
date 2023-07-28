// Read Users Data

function getAllusers() {
  let tableBody = document.getElementById("tbody");
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        let response = xhr.response;
        let data = JSON.parse(response);
        // console.log(data);

        for (let i = 0; i < data.length; i++) {
          let tr = document.createElement("tr");
          let td1 = createTableBody();
          let td2 = createTableBody();
          let td3 = createTableBody();
          let td4 = createTableBody();

          td1.innerHTML = data[i].id;
          td2.innerHTML = data[i].name;
          td3.innerHTML = data[i].username;
          td4.innerHTML = data[i].email;
          console.log(td1, td2, td3, td4);

          tr.append(td1, td2, td3, td4);
          //   console.log(tr);
          tableBody.append(tr);
        }
      }
    }
  };

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send("");
}

function createTableBody() {
  let td = document.createElement("td");
  return td;
}

let btn = document.getElementById("btn");
btn.addEventListener("click", getAllusers);
