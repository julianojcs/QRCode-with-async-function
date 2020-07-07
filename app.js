window.onload = function () {
    //new QRCode(document.getElementById("qrcode"), "http://www.google.com");

    let qrc = document.getElementById("qrc");
    let url, bgcolor, color, size;
    loadValues();

    let qrcode = new QRCode("qrc", {
        text: url,
        width: size,
        height: size,
        colorDark : bgcolor,
        colorLight : color,
        correctLevel : QRCode.CorrectLevel.H
    });

    document.getElementById("size").onchange = () => {
        let size = document.getElementById("size").value;
        [document.getElementById("size2").value, qrc.style.width, qrc.style.height] = [size, size+"px", size+"px"]; 
        document.getElementById("btnQRC").click();
    }

    document.getElementById("size2").onchange = () => {
        let size = document.getElementById("size2").value;
        [document.getElementById("size").value, qrc.style.width, qrc.style.height] = [size, size+"px", size+"px"]; 
        document.getElementById("btnQRC").click();
    }

    document.getElementById("download").onclick = () => {
        loadValues();
        criarQRC(url, bgcolor, color, size).then(x => {
            document.getElementById("download").href = qrc.querySelector("canvas").toDataURL();
        }).else(x => {
            
        });
    }

    document.getElementById("btnQRC").onclick = () => {
        loadValues();
        criarQRC(url, bgcolor, color, size).then(x => {
            document.getElementById("download").href = qrc.querySelector("canvas").toDataURL();
        });
    };

    async function criarQRC(url, bgcolor, color, size) {
        qrc.innerHTML = "";
        
        let qrcode = await new QRCode("qrc", {
            text: url,
            width: size,
            height: size,
            colorDark : bgcolor,
            colorLight : color,
            correctLevel : QRCode.CorrectLevel.H
        });
    }

    function loadValues(){
        url = document.getElementById("url").value;
        bgcolor = document.getElementById("bgcolor").value;
        color = document.getElementById("color").value;
        size = document.getElementById("size").value;
    }

    // var x=document.getElementById("demo");

    // document.getElementById("btnGetLocation").onclick = () => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(showPosition);
    //     } else {
    //         x.innerHTML="O seu navegador não suporta Geolocalização.";
    //     }
    // }
    function showPosition(position){
        x.innerHTML="Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude; 
    }
};

