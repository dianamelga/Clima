import React from 'react';

const Formulario = () => {
    const handleChange = e => {
        //cambiar el state
    }

    return (
        <form>
            <div className="input-field col s12">
                <input
                type="text"
                name="ciudad"
                id="ciudad"
                onChange={handleChange}
                ></input>
                <label htmlFor="ciudad">Ciudad:</label>
            </div>

            <div className="input-field col s12">
                <select onChange={handleChange} name="pais">
                    <option value="">Selecciona un País</option>
                    <option value="US">Estados Unidos</option>
                    <option value="PY">Paraguay</option>
                    <option value="MX">México</option>
                </select>
            </div>

            <div className="input-field col s12">
                <input type="submit" className="wave-effect waves-light btn-large 
                btn-block yellow accent-4" value="Buscar Clima"/>
            </div>
        </form>
    )
}

export default Formulario;