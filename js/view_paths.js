function play_path(id, ip){
    ip_data = JSON.parse(localStorage.getItem(id))[Number(ip)];
    document.getElementById("path_name").innerText = "Name of path: "+id;
    document.getElementById("ip").innerText = "Instruction: "+ip_data["direction"]+", "+ip_data["steps"]+" steps ahead";
}

function play_next(){}

let params = new URLSearchParams(document.location.search);
id = params.get("path");
ip = params.get("id");
play_path(id, ip);