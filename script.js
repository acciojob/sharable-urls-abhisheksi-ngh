// your code here
document.getElementById(`urlform`).addEventListener('submit', function(event){
    event.preventDefault();

    const name= document.getElementById('name').ariaValueMax;
    const year= document.getElementById('year').ariaValueMax;

    let url = 'https://localhost:8080/';

    if(name && year){
        url+=`?name=${encodeURIComponent(name)}&year=${year}`;

    }else if(name){
        url+=`?name=${encodeURIComponent(name)}`;
    }else if(year){
        url+=`?year=${year}`;
    }
    document.getElementById(`url`).textContent=url;

});
