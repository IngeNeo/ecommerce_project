import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addProduct } from "utils/productos/api.productos";
import { useHistory } from "react-router";

const initialState = {
	IdProducto : "",
	valorUnitario : "",
	cantidad : "",
	estado : false,
	descriProducto : "",
}

const RegistroProductos = () => {
	const [producto, setproducto] = useState(initialState);
	const {IdProducto, valorUnitario, cantidad, descriProducto} = producto;

	let history = useHistory();

	const addProductDetail = async() => {
		await addProduct(producto);
		history.push('/admin/mproductos')
	}

	const onValueChange = (e) => {
		setproducto({...producto,[e.target.name] : e.target.value});
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4 py-2 bg-gray-50 sm:px-6 lg:px-8">
			<h2 className="mt-6 text-3xl font-extrabold text-center text-blue-600">
				Creación de Productos
			</h2>
			<form className="w-4/12 mt-4 space-y-3 text-xs">
				<div className="grid grid-cols-2 rounded-md shadow-md gap 5">
					<label className="px-3 mt-4 mb-3" htmlFor="IdProducto">
						{" "}
						ID o Código
						<input onChange={(e) => onValueChange(e)} name="IdProducto" value={IdProducto} type="number" required="true"
							className="relative block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-xs"/>
					</label>

					<label className="px-3 mt-4" htmlFor="valorUnitario">
						{" "}
						Valor Unitario
						<input onChange={(e) => onValueChange(e)} name="valorUnitario" value = {valorUnitario} type="number" required="true"
							className="relative block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-xs" />
					</label>

					<label className="px-3 mb-3" htmlFor="cantidad">
						{" "}
						Cantidad
						<input onChange={(e) => onValueChange(e)} name="cantidad" value = {cantidad} type="number" required="false"
							className="relative block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-xs" placeholder="Opcional" />
					</label>

					<label class="mb-3 px-3 block text-left" htmlFor="cantidad">
						{" "}
						Estado
						<span class="text-gray-900"></span>
						<select class="form-select block w-full mt-1 relative px-3 py-2 text-gray-900 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-xs">
							<option></option>
							<option>Disponible</option>
							<option>No Disponible</option>
						</select>
					</label>

					<label className="block px-3 mb-4 text-left" htmlFor="descriProducto">
						{" "}
						Descripción
						<textarea onChange={(e) => onValueChange(e)} name="descriProducto" value = {descriProducto} type="text" required="true"
							className="relative block h-20 px-2 py-2 mt-1 text-gray-900 placeholder-gray-500 border rounded-none appearance-none w-80 border-gray-10 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-10 focus:z-10 sm:text-xs" placeholder="Describe brevemente el producto..." />
					</label>
				</div>

				<div className="px-24">
					<Link to = '/admin/Mproductos'>
						<button type="submit" onClick = {(e) => addProductDetail}className="relative flex justify-center w-full px-4 py-2 text-xs font-medium text-white bg-blue-600 border border-transparent rounded-md group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600" >
							Crear Producto
						</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default RegistroProductos;
