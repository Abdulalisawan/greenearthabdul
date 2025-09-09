// categories


const spinner=(status)=>{
    if(status == true){
        let spinnermotion=document.querySelector(`#spinning`).classList.remove(`hidden`);
        let spinnermo=document.querySelector(`#spinn`).classList.remove(`hidden`);
        let alltreecontent=document.querySelector(`#alltreecontent`).classList.add(`hidden`);
    }else{
        let spinnermotion=document.querySelector(`#spinning`).classList.add(`hidden`);
        let spinnermo=document.querySelector(`#spinn`).classList.add(`hidden`);
        let alltreecontent=document.querySelector(`#alltreecontent`).classList.remove(`hidden`);

        
    }
}



const cetagories = ()=>{
    
    fetch(`https://openapi.programming-hero.com/api/categories`)
    .then(res=>res.json())
    .then(values=>displayCetagories(values.categories))
    .catch(error => console.error('Error:', error)) 
}

const displayCetagories=(categoryvalue)=>{
    const catagorycontent = document.querySelector(`#catagorycontent`);
    for(let eachvalue of categoryvalue ){
        const div1= document.createElement(`div`);
        div1.innerHTML=`<div id="coloranimate${eachvalue.id}" onclick="subcetagory(${eachvalue.id})" class="mt-3 primarybtncolor text-xl hover:bg-[#a6beaf] py-2 rounded-3xl pl-4"><h1>${eachvalue.category_name}</h1></div>`;
        catagorycontent.appendChild(div1)
    }
      
}
cetagories();


const alltree =()=>{
    spinner(true);
    fetch(`https://openapi.programming-hero.com/api/plants`)
    .then(res=>res.json())
    .then(treedata=>displaytreedata(treedata.plants))
    .catch(error => console.error('Error:', error)) 
}

const displaytreedata =(alltreedata)=>{
 const alltreecontent=document.querySelector(`#alltreecontent`);
 alltreecontent.innerHTML=``;
 
  for( let alldata of alltreedata){
    const div= document.createElement(`div`);
    div.classList.add(`bg-white`,`px-3`,`pt-4`,`shadow-xl`,`rounded-lg`,`pb-3`);
    div.innerHTML=`<div class="w-[100%] h-[186px]  bg-gray-400">
                     <img  class="w-[100%] h-[100%] object-cover" src="${alldata.image}" alt="">
                    </div>
                    <div>  <h2 onclick="showl(${alldata.id})"class="font-semibold mt-2 cursor-pointer text-xl">${alldata.name}</h2>
                        <p class="text-gray-500 my-3">${alldata.description}</p>
                        </div>
                       <div class="flex justify-between my-6">
                        <h4 class="  px-2.5 py-1 rounded-3xl bg-[#dcfce7] text-green-600 ">${alldata.category}</h4>
                       <p class="text-xl font-semibold">${alldata.price}</p>
                        </div>
                       <div class=""> <button onclick="pricefunc(${alldata.id})" class=" text-white text-xl py-4 rounded-full bg-[#15803d]  w-full">Add to Cart</button> </div>`
                       
                       
    alltreecontent.appendChild(div);
    
    
  }
  spinner(false);
    

}

alltree();

const subcetagory = (valueofid)=>{
    spinner(true);
    const url = `https://openapi.programming-hero.com/api/category/${valueofid}`
    fetch(url)
    .then(res=>res.json())
    .then(dataceta=>{ 
        let primarybtncolor= document.querySelectorAll(`.primarybtncolor`);
        primarybtncolor.forEach(primarycolor => {
            primarycolor.classList.remove(`bg-[#15803d]`);
            
        });
        let colorbtn= document.querySelector(`#coloranimate${valueofid}`);
        colorbtn.classList.add(`bg-[#15803d]`)
        
        displayeachcatvalue(dataceta.plants)})
        .catch(error => console.error('Error:', error)) 

}

const displayeachcatvalue =(mainvalue)=>{
    const alltreecontent= document.querySelector(`#alltreecontent`);
    alltreecontent.innerHTML=``;

    for(let eachvalue of mainvalue){
        const div= document.createElement(`div`);
        console.log(eachvalue);
    div.classList.add(`bg-white`,`px-3`,`pt-4`,`shadow-xl`,`rounded-lg`,`pb-3`,`h-[55vh]`);
    div.innerHTML=`<div class="w-[100%] h-[186px]  bg-gray-400">
                     <img class="w-[100%] h-[100%] object-cover" src="${eachvalue.image}" alt="">
                    </div>
                    <div>  <h2 onclick="showl(${eachvalue.id})" class="font-semibold mt-2 cursor-pointer text-xl">${eachvalue.name}</h2>
                        <p class="text-gray-500 my-3">${eachvalue.description}</p>
                        </div>
                       <div class="flex justify-between my-6">
                        <h4 class="  px-2.5 py-1 rounded-3xl bg-[#dcfce7] text-green-600 ">${eachvalue.category}</h4>
                       <p class="text-xl font-semibold">${eachvalue.price}</p>
                        </div>
                        <button onclick="pricefunc(${eachvalue.id})" class="  text-white  text-xl py-4 rounded-full bg-[#15803d] w-full">Add to Cart</button>`
    alltreecontent.appendChild(div);
    
    
    

    }
    spinner(false);

}
const pricefunc= (pricedataid)=>{
    fetch(`https://openapi.programming-hero.com/api/plant/${pricedataid}`)
    .then(res=>res.json())
    .then(alldetail=>pricemianfunc(alldetail.plants))
    .catch(error => console.error('Error:', error)) 
    

}

let totalprice=0;
const pricemianfunc=(maindetail1)=>{
    
 const pricedib= document.querySelector(`#pricedib`);
 

    let div3= document.createElement(`div`);
    div3.classList.add(`flex`,`clear`, `bg-[#dcfce7]`,`items-center`,`py-3`,`px-2`,`rounded-xl`,`justify-between`, `w-full`,`mt-3`)
    div3.innerHTML=`<div>
                    <h1 class="text-xl font-semibold">${maindetail1.name}</h1>
                      <p class="price" class="text-gray-500">${maindetail1.price}</p>
                    </div>
                    <div>
                        <h3><button onclick="removeItem(this, ${maindetail1.price})" class="text-2xl cursor-pointer text-red-500 ">x</button></h3>
                    </div>`
pricedib.appendChild(div3)
  alert(`${maindetail1.name} added succesfully`)

 

 let price=Number(maindetail1.price);
 totalprice +=price

  let totalfiv=document.querySelector(`#totalfiv`);
  totalfiv.textContent=totalprice;





}

function removeItem(element, price) {
    let cartItem = element.closest(".clear");
   cartItem.remove();
   totalprice= totalprice - Number(price);
   let totalfiv=document.querySelector(`#totalfiv`);
  totalfiv.textContent=totalprice;
}


const showl=(hello)=>{
    fetch(`https://openapi.programming-hero.com/api/plant/${hello}`)
    .then(res=>res.json())
    .then(modal=>modaldisplay(modal.plants))
    .catch(error => console.error('Error:', error)) 
    

}

const modaldisplay=(modalvalue)=>{
     const mymodal= document.querySelector(`.modal-box`)
    mymodal.innerHTML=`<div class="w-[100%] h-[286px]  ">
                     <img class="w-[100%] h-[100%] object-cover" src="${modalvalue.image}" alt="">
                    </div>
                     <div>  <h2 class="font-semibold mt-2 text-xl">${modalvalue.name}</h2>
                        <p class="text-gray-500 my-3">${modalvalue.description}</p>
                        </div>
                       <div class="flex justify-between my-6">
                        <h4 class="  px-2.5 py-1 rounded-3xl bg-[#dcfce7] text-green-600 ">${modalvalue.category}</h4>
                       <p class="text-xl font-semibold">${modalvalue.price}</p>
                        </div>
                       <div class=""> <button  class=" text-white text-xl py-4 rounded-full bg-[#15803d]  w-full">Add to Cart</button> </div>
                       <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
                       `

                       const mymodal5= document.querySelector(`#my_modal_5`)
                       mymodal5.showModal()
                    

}