/*$.ajax({
    url: "https://valorant-api.com/v1/maps"
}).done((result) => {
    console.log(result.data);
    let text = "";
    $.each(result.data, function (key, val) {
        text += `<tr>
                    <td style="color:white">${key + 1}</td>
                    <td style="color:white">${val.displayName}</td>
                    <td><button class="btn btn-light" onclick="infoDetail('${val.url}')" data-bs-toggle="modal" data-bs-target="#modalInfo">Detail</button></td>
                    <td><button class="btn btn-light" onclick="displayDetail('${val.url}')" data-bs-toggle="modal" data-bs-target="#modalDisplay">Show</button></td>
                </tr>`;
        //console.log(key);
    })
    $("#tbodyMap").html(text)
});

function infoDetail() {
    $.ajax({
        url: "https://valorant-api.com/v1/maps"
    }).done((result) => {
        console.log(result.data);
        let x = "";
        $.each(result.data, function (key, val) {
            x += `${key}<p>${val.coordinates}</p>`;
        })
        $(".modal-body#info").html(x);
    });
}
function displayDetail() {
    $.ajax({
        url: "https://valorant-api.com/v1/maps"
    }).done((result) => {
        console.log(result.data);
        let y = "";
        $.each(result.data, function (key, val) {
            y +=  `${key}<img src="${val.displayIcon}" style="width:400px;height:400px">`;
        })
        $(".modal-body#display").html(y);
    });
}*/
$.ajax({
    url: "https://valorant-api.com/v1/maps"
}).done((result) => {
    console.log(result.data);
    let text = "";
    $.each(result.data, function (key, val) {
        text += `<tr>
                    <td style="color:white">${key + 1}</td>
                    <td style="color:white">${val.displayName}</td>
                    <td><button class="btn btn-primary" onclick="detail('${val.displayIcon}', '${val.displayName}', '${val.uuid}')" 
                        data-bs-toggle="modal" data-bs-target="#modalInfo">Detail</button></td>
                </tr>`;
    })
    $("#tbodyMap").html(text)
});

//buat loop untuk isi detail 
function detail(a, b, c) {
    document.getElementById('update_img').setAttribute('src', a)
    document.getElementById('update_name').innerHTML = b
    document.getElementById('update_uuid').innerHTML = c
}

$.ajax({
    url: "https://valorant-api.com/v1/agents"
}).done((results) => {
    console.log(results.data);
    let txt = "";
    $.each(results.data, function (key2, value) {
        txt += `<tr>
                    <td style="color:white">${key2 + 1}</td>
                    <td style="color:white">${value.displayName}</td>
                    <td><button class="btn btn-primary" onclick="detail2('${value.displayIcon}', '${value.displayName}', '${value.description}')" 
                        data-bs-toggle="modal" data-bs-target="#modalInfo2">Detail</button></td>
                </tr>`;
    })
    $("#tbodyAgent").html(txt)
});

function detail2(x, y, z) {
    document.getElementById('update_image').setAttribute('src', x);
    document.getElementById('update_agentName').innerHTML = y;
    document.getElementById('update_desc').innerHTML = z;
}