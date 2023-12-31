import React, { useState } from 'react'
import ProductForm from '../productForm/ProductForm'
import Cart from '../cart/Cart'
// Crear tres componentes: ContainerProducts, ProductForm y Cart

// ContainerProducts simplemente contiene a los otros componentes y debe manejar la lógica de toda la aplicación.

// ProductForm devuelve un formulario para agregar un nuevo producto a la lista. Contiene una label que muestra "Ingresar nuevo producto a la lista", un input de tipo texto para escribir el producto y un botón para agregarlo a la lista.

// Cart devuelve una lista de los productos envueltos en una etiqueta h3. Ejemplo:
//  <h3>Televisor<h3/>
// <h3>Computadora<h3/>
// <h3>Mesa<h3/>
// Además, se pide que el usuario pueda clickear en cualquier producto de la lista para eliminarlo de ella.

// Considerar:
// -no se pide estilizado
// -todo el ejercicio se logra sólo con useState
// Teoría:
// 1) explicar el segundo argumento (array) de useEffect, para qué sirve (su objetivo) y qué significan cada uno de sus valores 

// 2) Explicar un caso de useContext

const productotos = [{
    name: "play6",
}]

const ContainerProducts = () => {
    const [productos, setProductos] = useState(productotos)

    const setProductosHandler = (value) => {
        setProductos(value)
    }

    console.log(productos)

    return (
        <div>
            <ProductForm setProductosHandler={setProductosHandler} productos={productos}/>
            
            <Cart productos={productos} setProductosHandler={setProductosHandler}/>
        </div>
    )
}

export default ContainerProducts