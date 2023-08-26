function play_path(id, ip){
    ip_data = JSON.parse(localStorage.getItem(id))[Number(ip)];
    document.getElementById("path_name").innerText = "Name: "+id;
    document.getElementById("ip").innerText = "Instruction: "+ip_data["direction"]+", "+ip_data["steps"]+" steps ahead";
}

function play_next(){
    if (ip < JSON.parse(localStorage.getItem(id)).length-1){
        window.open("view_paths.html?path="+id+"&id="+(Number(ip)+1).toString(), "_self")
    }else{
        window.open("/","_self")
    }
}

let params = new URLSearchParams(document.location.search);
id = params.get("path");
ip = params.get("id");
play_path(id, ip);