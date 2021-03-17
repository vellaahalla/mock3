let arrEvent = [
    {
        no: 1,
        kegiatan: "lari",
        hari: "Senin",
        poster: "https://d1bpj0tv6vfxyp.cloudfront.net/Hari_Gizi_Nasional,_Inilah_Pola_Makan_Bergizi_untuk_Si_Kecil_Halodoc.jpg"
    },
    {
        no: 2,
        kegiatan: "estafet",
        hari: "Selasa",
        poster: "https://d1bpj0tv6vfxyp.cloudfront.net/Hari_Gizi_Nasional,_Inilah_Pola_Makan_Bergizi_untuk_Si_Kecil_Halodoc.jpg"
    }
]

let arrUsers = [
    {
        username: "Vella",
        password: "admin123",
        role: "admin"
    },
    {
        username: "Ahalla",
        password: "user123",
        role: "user"
    }
]

function login() {
    let userName = document.getElementById("inputUserName").value
    let password = document.getElementById("inputPassword").value
    let userIndex = arrUsers.findIndex(el => el.username == userName)

    if (password == arrUsers[userIndex].password) {
        if (arrUsers[userIndex].role == "admin") {
            document.getElementById("details").innerHTML = "Admin"
            showTask("admin")
        } else {
            document.getElementById("details").innerHTML = arrUsers[userIndex].username
            showTask("user")
        }
        document.getElementById("logout").innerHTML = `
            <input type="button" value="logout" onclick="logout()">
        `
    } else {
        document.getElementById("details").innerHTML = "Password Salah!"
    }
    document.getElementById("inputUserName").value = ""
    document.getElementById("inputPassword").value = ""
}

function showTask(role, number) {
    if (role == "user") {
        let listEvent = arrEvent.map((el) => {
            return `
            <tr>
                <td>${el.no}</td>
                <td>${el.kegiatan}</td>
                <td>${el.hari}</td>
                <td><img src="${el.poster}" alt = "${el.poster}" width="50px"></td>
                <td></td>
                </tr>
            `
        })
        document.getElementById("renderResult").innerHTML= listEvent.join("")
    } else {
        let listEdit = arrEvent.map((el)=>{
            if(el.no == number){
                return `
                <tr>
                    <td></td>
                    <td><input type="text" id="editKegiatan" value="${el.kegiatan}"></td>
                    <td><input type="text" id="editHari" value="${el.hari}"></td>
                    <td><input type="text" id="editPoster" value="${el.poster}"></td>
                    <td>
                    <input type="button" value="save" onclick="save(${el.no})">
                    <input type="button" value="cancel" onclick="cancel()">
                    </td>
                </tr>                  
                `
            } else{
                return `
                <tr>
                    <td>${el.no}</td>
                    <td>${el.kegiatan}</td>
                    <td>${el.hari}</td>
                    <td><img src="${el.poster}" alt = "${el.poster}" width="50px"></td>
                    <td>
                    <input type="button" value="delete" onclick="deleteTask(${el.no})">
                    <input type="button" value="edit" onclick="editTask(${el.no})">
                    </td>
                </tr>    
                `
            }
        })
        listEdit.push(`
                <tr>
                    <td></td>
                    <td><input type="text" id="inputKegiatan"></td>
                    <td><input type="text" id="inputHari"></td>
                    <td><input type="text" id="inputPoster"></td>
                    <td>
                        <input type="button" value="Add Todo" onclick="addKegiatan()">
                    </td>
                </tr>
        `)
        document.getElementById("renderResult").innerHTML=listEdit.join("")
    }
}




// function showTask(index){
//     if(index){
//         let listEdit = arrEvent.map((el)=>{
//             if(el.no==index){
//                 return `
//                 <tr>
//                     <td>${el.no}</td>
//                     <td><input type="text" id="editKegiatan" value="${el.kegiatan}"</td>
//                     <td><input type="text" id="editHari" value="${el.hari}"</td>
//                     <td><input type="text" id="editPoster" value="${el.poster}"</td>
//                     <td>
//                         <input type="button" value="save" onclick="save(${el.no})">
//                         <input type="button" value="cancel" onclick="cancel()">
//                     </td>
//                 </tr>
//                 `
//             } else {
//                 return `
//                 <tr>
//                     <td>${el.no}</td>
//                     <td>${el.kegiatan}</td>
//                     <td>${el.hari}</td>
//                     <td><img src="${el.poster}" width="50px"></td>
//                     <td>
//                         <input type="button" value="Delete" onclick="deleteTask(${el.no})">
//                         <input type="button" value="Edit" onclick="EditTask(${el.no})">
//                     </td>
//                 </tr>
//                 `
//             }
//         })

//         document.getElementById("renderResult").innerHTML=listEdit.join("")
//     } else{
//         let listEvent= arrEvent.map((val)=>{
//             return `
//             <tr>
//                 <td>${val.no}</td>
//                 <td>${val.kegiatan}</td>
//                 <td>${val.hari}</td>
//                 <td><img src="${val.poster}" width="50px"></td>
//                 <td>
//                 <input type="button" value="Delete" onclick="deleteTask(${val.no})">
//                 <input type="button" value="Edit" onclick="EditTask(${val.no})">
//                 </td>

//             </tr>
//             `
//         })
//         document.getElementById("renderResult").innerHTML=listEvent.join("")
//         document.getElementById("details").innerHTML=`<h3>${inputUserName}</h3>`
//     }
// }

// function login(){
//     let inputUserName = document.getElementById("inputUserName").value
//     let inputPassword = document.getElementById("inputPassword").value
//     let listUsers = arrUsers.map((el)=>{
//         if (inputUserName==el.username && inputPassword==el.password){
//             if(el.role=="user"){
//             let listEvent= arrEvent.map((val)=>{
//                 return `
//                 <tr>
//                     <td>${val.no}</td>
//                     <td>${val.kegiatan}</td>
//                     <td>${val.hari}</td>
//                     <td><img src="${val.poster}" width="50px"></td>
//                     <td></td>
//                 </td>
//                 `
//             })
//             document.getElementById("renderResult").innerHTML=listEvent.join("")
//             document.getElementById("details").innerHTML=`<h3>${inputUserName}</h3>`
//         } else{
//             let listEvent= arrEvent.map((val)=>{
//                 return `
//                 <tr>
//                     <td>${val.no}</td>
//                     <td>${val.kegiatan}</td>
//                     <td>${val.hari}</td>
//                     <td><img src="${val.poster}" width="50px"></td>
//                     <td>
//                     <input type="button" value="Delete" onclick="deleteTask(${val.no})">
//                     <input type="button" value="Edit" onclick="EditTask(${val.no})">
//                     </td>

//                 </tr>
//                 `
//             })
//             document.getElementById("renderResult").innerHTML=listEvent.join("")
//             document.getElementById("details").innerHTML=`<h3>Admin</h3>`
//         }
//     } 
//     // else{
//     //     document.getElementById("details").innerHTML= "<h3>Password Salah</h3>"
//     // }
//     })
// }


function editTask(number){
    showTask("admin",number)
}

function deleteTask(number){
    arrEvent = arrEvent.filter((el)=>{
        return el.no != number
    })
    showTask("admin")
}
function cancel(){
    showTask("admin")
}
function save(number){
    let index = arrEvent.findIndex(el => el.no == number)
    let kegiatan = document.getElementById("editKegiatan").value
    let hari = document.getElementById("editHari").value
    let poster = document.getElementById("editPoster").value

    arrEvent[index]={
        ...arrEvent[index],
        kegiatan,
        hari,
        poster
    }

    showTask("admin")
}

function logout(){
    document.getElementById("renderResult").innerHTML=""
    document.getElementById("details").innerHTML=""
    document.getElementById("logout").innerHTML=""
}

function addKegiatan(){
    let kegiatan = document.getElementById('inputKegiatan').value
    let hari = document.getElementById('inputHari').value
    let poster = document.getElementById('inputPoster').value
  
    arrEvent.push({
      no: arrEvent.length+1,
      kegiatan,
      hari,
      poster
    })
  
    showTask("admin")
  }