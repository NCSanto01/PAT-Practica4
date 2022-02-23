

let llamarBinance=async ()=>{
    let peticion = await fetch("https://api2.binance.com/api/v3/ticker/24hr", {
        method: "GET",
    });

    if(peticion.status==200){
        let datos= await peticion.json();
        selectDatos(datos,symbols);
        console.log(select);
        genera_tabla();

    }
    else{
        console.log(peticion.status);
    }
};

let select=[];

let symbols=["BTCUSDT","ETHUSDT","ADAUSDT","LTCUSDT","SOLUSDT","XRPUSDT","BNBUSDT","AVAXUSDT","XLMUSDT"]
let selectDatos = (datos,symbols)=>{
    
    for(let dato of datos)
    {
        if(symbols.includes(dato.symbol))
        {
            select.push(dato);
        }
    }
}

llamarBinance();



function genera_tabla() {
    // Obtener la referencia del elemento tbody
    tblBody=document.getElementsByTagName("tbody")[0];
    console.log(tblBody)

    // Crea las celdas
    for (let sel of select) {
      // Crea las hileras de la tabla
      let hilera = document.createElement("tr");
      console.log(hilera);

      

      let info =[sel.symbol,sel.lastPrice,sel.priceChangePercent];
      
      for (let i of info) {
        // Crea un elemento <td> y un nodo de texto, hace que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        let celda = document.createElement("td");
        let textoCelda = document.createTextNode(i);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        if(i==info[2]){
            if(i.includes("-")){
                celda.setAttribute("class","text-danger");
            }
            else{
                celda.setAttribute("class","text-primary");

            }
        }
        
      }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
   
    
  }

  