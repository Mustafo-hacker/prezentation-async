  const root = document.querySelector(".root");

   
  let api = "https://673742adaafa2ef2223333bc.mockapi.io/tableStatus"

    async function getTodos() {
        try {
            const response = await fetch(api); 
            const data = await response.json();
            get(data);
        } catch (error) {
            console.error('Error fetching to-do items:', error);
        }
    }
    
    function get(data) {
        root.innerHTML = ""
        data.forEach((el) => {
            let tr = document.createElement('tr')

            let id = document.createElement('td')
            id.innerHTML = el.id
 
            let name = document.createElement('td')
            name.innerHTML = el.name
 
            let actions = document.createElement("td")

            let phone = document.createElement("td")
            phone.innerHTML = el.phone

            let status = document.createElement("td")
            status.innerHTML = el.status === "active"? "Active" : "Inactive"    

            let btnEdit = document.createElement("button")
            btnEdit.innerHTML = "Edit"

            let btnDel = document.createElement("button")
            btnDel.innerHTML = "Delete"
 
            actions.append(btnEdit, btnDel)
            tr.append(id,name,phone,status,actions)
            root.append(tr)
        });
    }
    getTodos();