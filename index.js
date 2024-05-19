const year = document.getElementById('year')
const month = document.getElementById('month')
const day = document.getElementById('day')

function updateDate() {
    let y = new Date().getFullYear();
    let m = new Date().getMonth() + 1;
    let d = new Date().getDay();


    
    m = m < 10 ? "0" + m : m;
    d = d < 10 ? "0" + d : d;


    year.innerText = y;
    month.innerText = m;
    day.innerText = d;
    // setTimeout(()=>{
    //     updateDate();
    // }, 1000);
}

updateDate()