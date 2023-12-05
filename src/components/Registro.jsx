

const Registro = () => {

    return(
        <div>
            <form action="submit" data-netlify="true">
                <label>Escribe tu nombre: </label>
                <input type="email" name="email" placeholder="Escribe tu correo aqui" />
                <br />
                <label>Numero de telefono:</label>
                <input type="number" name="telefono" placeholder="Escribe tu numero aqui" />
                <br />
                <label>Municipio:</label>
                <textarea name="municipio" cols="30" rows="10"></textarea>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Registro
