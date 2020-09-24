c_info = {
    "Mhtn_Full_Div": {
        "tag_type" :"DIV",
           "size_loc_i": {
               "values_type": "fixed",
               "l": 250,
               "t": 50,
               "h": 900,
               "w": 1100
           },
           "style_i": {
               "position": "absolute",
               "border": "2px solid gray"
           },
           "id_i": {
            "parent_id": "body",
            "id": "mhtn-display-main-div"
           }
    }
}

// We need to create a div which holds the visualization
function CreateTestDiv() {
    console.log(c_info);
    let mhtn_display = document.createElement("DIV");
    LUaddBasicLayout(mhtn_display, c_info["Mhtn_Full_Div"]["size_loc_i"]);
    LUAddStyleToDOMObj(mhtn_display, c_info["Mhtn_Full_Div"]["style_i"]);
    mhtn_display.id = c_info["Mhtn_Full_Div"]["id_i"]["id"];
    document.body.appendChild(mhtn_display);
}


