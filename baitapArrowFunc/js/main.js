let colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];
let header = document.getElementById("colorContainer");
  let btns = header.getElementsByClassName("color-button");
let showButtonColor = () => {
  let content = "";
  colorList.map((item, index) => {
    let col = `
        <button onclick="changeHouseColor('${item}',${index})" class="color-button ${item}" id="${index}"></button>
        `;
    content += col;
  });
  document.getElementById("colorContainer").innerHTML = content;

  // Add active class to the current button (highlight it)
  
 
  // .classList.add("active");
  document.getElementById("0").classList.add("active");
  
  
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      let active = document.getElementsByClassName("active");
      active[0].className = active[0].className.replace(" active", "");
      this.className += " active";
    });
  }
};
showButtonColor();

let changeHouseColor = (item,vt) => {
  // document.getElementById("house").classList.add(`${item}`);  
  let house = document.getElementById("house");
  for(let i=0; i<colorList.length;i++){
    colorList.map((item,index)=>{
      if(index!=vt)
      house.classList.remove(`${item}`);
      else
      house.classList.add(`${item}`);  
    });
};
}
