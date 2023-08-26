function create_new_fields(){

    for (i=0;i<localStorage.length;i++){
        console.log(i)
        initial_field = document.getElementById("path_list_copy").children[0].cloneNode(true);
        
        const path_data = localStorage.key(i);

        initial_field.querySelector("h2").innerText = "Name of path: "+path_data;
        initial_field.querySelector("p").innerText = "Instructions ("+JSON.parse(localStorage.getItem(localStorage.key(i))).length+"): left, right";

        initial_field.addEventListener("click", ()=>{window.open("view_paths.html?path="+path_data+"&id=0", "_self")});

        document.getElementById("path_list").appendChild(initial_field)
    }
}

create_new_fields();

function retrieve_paths(){

}

function display_paths(paths_info){
    
}

display_paths(retrieve_paths())