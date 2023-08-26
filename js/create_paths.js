function create_new_field(){
    initial_field = document.getElementById("item_list").children[0].cloneNode(true);

    initial_field.querySelector(".direction_data").value = "";
    initial_field.querySelector(".steps_data").value = "";
    
    document.getElementById("item_list").appendChild(initial_field)
}

path_data_example = [{
    direction: "",
    steps: ""
}]

function gather_data_from_form(){
    path_data = []
    form = document.getElementById("item_list").children;
    for (i=0;i<form.length;i++){
        direction = form[i].querySelector(".direction_data").value;
        steps = form[i].querySelector(".steps_data").value;
        path_data.push({
            direction: direction,
            steps: steps
        })
    }
    return path_data;
}

function store_path(path){
    localStorage.setItem(document.getElementById("path_name_data").value, JSON.stringify(path));
}

function submit_new_path(){
    console.log(gather_data_from_form());
    store_path(gather_data_from_form());
    window.open("list_paths.html", "_self")
}