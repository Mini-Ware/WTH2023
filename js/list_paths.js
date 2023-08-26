function create_new_fields(){

    if (localStorage.length != 0){
        for (i=0;i<localStorage.length;i++){
            console.log(i)
            initial_field = document.getElementById("path_list_copy").children[0].cloneNode(true);
            
            const path_data = localStorage.key(i);
    
            initial_field.querySelector("h2").innerText = "Name of path: "+path_data;
            initial_field.querySelector("p").innerText = "Instructions ("+JSON.parse(localStorage.getItem(localStorage.key(i))).length+"): left, right";
    
            initial_field.addEventListener("click", ()=>{window.open("view_paths.html?path="+path_data+"&id=0", "_self")});
    
            document.getElementById("path_list").appendChild(initial_field)
        }
    }else{
        no_path_err = document.createElement("h1");
        no_path_err.innerText = "No paths available! Go back and create a new path!";
        document.getElementById("path_list").appendChild(no_path_err);
    }
}

create_new_fields();