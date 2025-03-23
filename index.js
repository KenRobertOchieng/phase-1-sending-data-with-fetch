
function submitData(name,email){
    const myDetails={
        name:name,
        email:email
    };
    return fetch('http://localhost:3000/users',{
        method:'POST',
        headers:{
            "Content-Type": "application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify(myDetails)
    })
        .then(res=>res.json())
        .then(data=>{
            const body = document.querySelector('body');
            const p = document.createElement('p');
            p.textContent = data.id; // append the returned ID (e.g., 592)
            body.appendChild(p);
        })
        .catch(error=>{
            const body = document.querySelector('body');
      const p = document.createElement('p');
      p.textContent = error.message; // e.g., "Unauthorized Access"
      body.appendChild(p);
    })
}
submitData("Ken","@ken123")
