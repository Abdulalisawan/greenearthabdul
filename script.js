// categories

const cetagories = ()=>{
    fetch(`https://openapi.programming-hero.com/api/categories`)
    .then(res=>res.json())
    .then(values=>displayCetagories(values.categories))
}

const displayCetagories=(categoryvalue)=>{
    const catagorycontent = document.querySelector(`#catagorycontent`);
    for(let eachvalue of categoryvalue ){
        const div1= document.createElement(`div`);
        div1.innerHTML=`<div onclick="subcetagory(${eachvalue.id})" class="mt-3 text-xl hover:bg-[#a6beaf] py-2 rounded-3xl pl-4"><h1>${eachvalue.category_name}</h1></div>`;
        catagorycontent.appendChild(div1)
    }

}
cetagories();
const spinner=(status)=>{
    if(status == true){
        let spinnermotion=document.querySelector(`#spinning`).classList.remove(`hidden`);
        let alltreecontent=document.querySelector(`#alltreecontent`).classList.add(`hidden`);
    }else{
        let spinnermotion=document.querySelector(`#spinning`).classList.add(`hidden`);
        let alltreecontent=document.querySelector(`#alltreecontent`).classList.remove(`hidden`);

        
    }
}

const alltree =()=>{
    spinner(true);
    fetch(`https://openapi.programming-hero.com/api/plants`)
    .then(res=>res.json())
    .then(treedata=>displaytreedata(treedata.plants))
}

const displaytreedata =(alltreedata)=>{
 const alltreecontent=document.querySelector(`#alltreecontent`);
 
  for( let alldata of alltreedata){
    const div= document.createElement(`div`);
    div.classList.add(`bg-white`,`px-3`,`pt-4`,`shadow-xl`,`rounded-lg`,`pb-3`);
    div.innerHTML=`<div class="w-[100%] h-[186px]  bg-gray-400">
                     <img class="w-[100%] h-[100%] object-cover" src="${alldata.image}" alt="">
                    </div>
                    <div>  <h2 class="font-semibold mt-2 text-xl">${alldata.name}</h2>
                        <p class="text-gray-500 my-3">${alldata.description}</p>
                        </div>
                       <div class="flex justify-between my-6">
                        <h4 class="  px-2.5 py-1 rounded-3xl bg-[#dcfce7] text-green-600 ">${alldata.category}</h4>
                       <p class="text-xl font-semibold">${alldata.price}</p>
                        </div>
                        <button class=" text-white text-xl py-4 rounded-full bg-[#15803d] w-full">Add to Cart</button>`
    alltreecontent.appendChild(div);
    spinner(false);
    
  }
  
    

}

alltree();

const subcetagory = (valueofid)=>{
    spinner(true);
    const url = `https://openapi.programming-hero.com/api/category/${valueofid}`
    fetch(url)
    .then(res=>res.json())
    .then(dataceta=>displayeachcatvalue(dataceta.plants))

}

const displayeachcatvalue =(mainvalue)=>{
    const alltreecontent= document.querySelector(`#alltreecontent`);
    alltreecontent.innerHTML=``;

    for(let eachvalue of mainvalue){
        const div= document.createElement(`div`);
    div.classList.add(`bg-white`,`px-3`,`pt-4`,`shadow-xl`,`rounded-lg`,`pb-3`,`h-[55vh]`);
    div.innerHTML=`<div class="w-[100%] h-[186px]  bg-gray-400">
                     <img class="w-[100%] h-[100%] object-cover" src="${eachvalue.image}" alt="">
                    </div>
                    <div>  <h2 class="font-semibold mt-2 text-xl">${eachvalue.name}</h2>
                        <p class="text-gray-500 my-3">${eachvalue.description}</p>
                        </div>
                       <div class="flex justify-between my-6">
                        <h4 class="  px-2.5 py-1 rounded-3xl bg-[#dcfce7] text-green-600 ">${eachvalue.category}</h4>
                       <p class="text-xl font-semibold">${eachvalue.price}</p>
                        </div>
                        <button class=" text-white text-xl py-4 rounded-full bg-[#15803d] w-full">Add to Cart</button>`
    alltreecontent.appendChild(div);
    spinner(false);
    

    }

}