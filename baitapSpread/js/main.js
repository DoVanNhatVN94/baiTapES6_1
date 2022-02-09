let string = document.getElementsByClassName("heading")[0];
let chart = [...string.innerHTML];
console.log(chart);
let jumpText =()=>{
    let content="";
    chart.map((item)=>{
        let span =`
            <span>${item}</span>
        `;
        content += span;
    });
    string.innerHTML = content;
}
jumpText();