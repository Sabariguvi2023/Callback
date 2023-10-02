let live =document.getElementById('ampm');
function display(){

    var datetime = new Date();
    let hr = datetime.getHours();
    let minutes = datetime.getMinutes();
    let secounds = datetime.getSeconds();
    if(hr > 12){
        hr = hr - 12
         live.innerHTML ="AM";
    }
    else
        live.innerHTML ="PM";
     document.getElementById('hours').innerHTML =hr;
    document.getElementById('min').innerHTML =minutes;
    document.getElementById('sce').innerHTML =secounds;

}
setInterval(display,1000);