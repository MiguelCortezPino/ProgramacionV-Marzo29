let producto = {
    Nombre: "SIN ESPECIFICAR",
    SkuP: "SIN ESPECIFICAR",
    Descripcion: "SIN ESPECIFICAR",
    Comprobar: true,
    Mensaje: "SIN ESPECIFICAR",
    SetProducto: function () {
        this.Nombre = "SIN ESPECIFICAR";
        this.SkuP = "SIN ESPECIFICAR";
        this.Descripcion = "SIN ESPECIFICAR";
        this.Comprobar = true;
    },
    ValNombre: function (IdNombre) {
        NombreP = document.querySelector(IdNombre);
        //valida que no tenga caracteres especiales
        Validnombre = new RegExp("^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$");
        if (Validnombre.test(NombreP)) {
            this.Nombre = NombreP;
        } else {
            this.Comprobar = false;
            this.Mensaje = "Ingrese un nombre válido";

        }
    },
    ValNombreVacio: function (IdNombre) {
        NombreP = document.querySelector(IdNombre);
        //valida que no se deja vacio el campo de nombre
        if (NombreP.value == "") {
            this.Comprobar = false;
            this.Mensaje = "Debe ingresar un nombre";
            return;
        }
    },
    ValSku: function (IdSku) {
        SkuPr = document.querySelector(IdSku).value;
        //valida que no tenga caracteres especiales
        skuPattern = new RegExp("/^[A-Z]{2}\d{6}$/");
        if (skuPattern.test(SkuPr)) {
            this.SkuP = SkuPr;
        } else {
            this.Comprobar = false;
            this.Mensaje = "Ingrese un SKU válido";
        }
    },
    ValSkuVacio: function (IdSku) {
        SkuPr = document.querySelector(IdSku);
        //valida que no se deja vacio el campo de nombre
        if (SkuPr.value == "") {
            this.Comprobar = false;
            this.Mensaje = "Debe ingresar un SKU";
            return;
        }
    },
    ValDescripcion: function (IdDescripcion) {
        DescripcionP = document.querySelector(IdDescripcion).value;
        if (DescripcionP.length == 0) {
            this.Comprobar = false;
            this.Mensaje = "Ingrese una descripción";
        } else {
            this.Descripcion = DescripcionP;
        }
    }
}

const RegistrarElProducto = () => {
    producto.SetProducto();
    producto.ValNombre('#NombreProducto')
    producto.ValSku('#skuP')
    producto.ValDescripcion('#DescripcionP')
    if (producto.Comprobar) {
        let url = 'http://localhost/PROGV/EXAMEN/Servicios/procesarproducto.php';
        let Metodo = 'POST';

        feth(url, {
            method: Metodo,
            body: JSON.stringify(producto),
            headers: { "Content-Type": "application/json charset=utf-8" }
        })
            .then(response => response.json())
            .then(datos => RRegistrarElProducto(datos))
            .catch(err => console.log(err));
        //console.log("Dato listo para enviar");
    } else {
        let ImprimirError = document.querySelector('#MensajeDeEnvio');
        ImprimirError.innerHTML = producto.Mensaje;
        console.log(producto);
    }


}
const RRegistrarElProducto = (datos) => {
    console.log(datos);
    let MostrarElHtml = "";
    if (datos.respuesta == "PROCESADO") {
        MostrarElHtml += `<p>PRODUCTO PROCESADO CORRECTAMENTE</p>
        <table>
            <tr><td>Nombre</td><td>td>SKU</td><td>Descripcion</td></tr>
            <tr><td>${datos.Nombre}</td><td>${datos.SkuP}</td><td>${datos.Descripcion}</td></tr>
        </table>`;

    }
}

function ObtenerCookies(ClaveCookie) {
    var valor = 0;
    ArrCookies = document.cookie.split(';');
    ArrCookies.forEach((ValoresCookies) => {
        var ArrCookie = ValoresCookies.split('=');
        if (ArrCookie[0] == ClaveCookie) {
            valor = ArrCookie[1];
        }
    });
    return valor;
}

const MostrarTodasLasFaltas = () => {
    IdUsuario = ObtenerCookies(' Id');
    //ArrCokies = document.cookie.split(';');
    console.log(IdUsuario);
}



/*const RegistrarElProducto = () => {
    alert("Estamos  Funcionando");
    let producto = {
        Nombre: "SIN ESPECIFICAR",
        Skup: "SIN ESPECIFICAR",
        Descripcion: "SIN ESPECIFICAR"
    }
    producto.Nombre = document.querySelector('#NombreProducto').value;
    producto.Skup = document.querySelector('#skuP').value;
}*/