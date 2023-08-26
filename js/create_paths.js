const initial_field = document.getElementById("item_list").innerHTML;

function create_new_field(){
    document.getElementById("item_list").innerHTML += initial_field;
}

path_data_example = [{
    direction: "",
    steps: ""
}]

function gather_data_from_form(){
    path_data = {
        name: document.getElementById("path_name_data").value,
        instructions: []
    }
    form = document.getElementById("item_list").children;
    for (i=0;i<form.length;i++){
        direction = form[i].querySelector("#direction_data").value;
        steps = form[i].querySelector("#steps_data").value;
        path_data.instructions.push({
                direction: direction,
                steps: steps
        })
    }
    return path_data;
}

function store_path(path){
    if (localStorage.paths){
        current = localStorage.getItem("paths");
        localStorage.setItem("paths", current.append(path));
    }else{
        localStorage.setItem("paths", [path]);
    }
}

function submit_new_path(){
    console.log(gather_data_from_form());
//    store_path(gather_data_from_form());
    window.open("list_paths.html", "_self")
}