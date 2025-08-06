// Code for TODO app:-

    let btn = document.querySelector("button");
    let ol = document.querySelector("ol");
    let inp = document.querySelector("input");

    btn.addEventListener("click",function(){
        let item = document.createElement("li");
        item.innerText = inp.value;

        let dltBtn = document.createElement("button");
        dltBtn.innerText = "Delete";     // adding name to the button
        dltBtn.classList.add("Delete");  // adding class to our delete button

        item.appendChild(dltBtn);
        ol.appendChild(item);
        inp.value = "";
    });


    // Event delegation (Bubbling Event)   
    
    ol.addEventListener("click",function(event){
        if(event.target.nodeName =="BUTTON"){
            let listItem = event.target.parentElement;
            listItem.remove();
            console.log("delete");
        }
    });




// NO EVENT DELEGATION

    // let delbtns = document.querySelectorAll(".Delete");

    // for (dltbtn of delbtns ){
    //     dltbtn.addEventListener("click", function(){
    //         let par = this.parentElement;
    //         console.log("dlt");
    //         par.remove();
    //     });
    // }