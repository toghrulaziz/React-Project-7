import { useContext, useState } from "react";
import { MyContext } from "./App";

function A() {
    let { arr, setObj, obj, add, deleteGoods, edit } = useContext(MyContext);
    const [editingProduct, setEditingProduct] = useState('');


    const openEditModal = (index) => {
        setEditingProduct({ ...arr[index], index });
    };

    return (
        <div>
            <input type="text" onChange={(ev) => setObj({ ...obj, "product_name": ev.target.value })} />
            <input type="text" onChange={(ev) => setObj({ ...obj, "product_description": ev.target.value })} />
            <input type="number" onChange={(ev) => setObj({ ...obj, "product_price": ev.target.value })} />


            <button onClick={() => {
                add();
            }}>ADD</button>

            <br />

            <ul>
                {arr.map((product, index) => (
                    <li key={index}>
                        <strong>{product.product_name}</strong>: {product.product_description}, Price: {product.product_price}
                        <button onClick={() => openEditModal(index)}>Edit</button>
                        <button onClick={() => {
                            deleteGoods(product.product_name);
                        }}>DELETE</button>
                    </li>
                ))}
            </ul>



            {editingProduct && (
                <div className="modal">
                    <h2>Edit Product</h2>
                    <input
                        type="text"
                        value={editingProduct.product_name}
                        onChange={(ev) =>
                            setEditingProduct({
                                ...editingProduct,
                                product_name: ev.target.value,
                            })
                        }
                    />
                    <input
                        type="text"
                        value={editingProduct.product_description}
                        onChange={(ev) =>
                            setEditingProduct({
                                ...editingProduct,
                                product_description: ev.target.value,
                            })
                        }
                    />
                    <input
                        type="number"
                        value={editingProduct.product_price}
                        onChange={(ev) =>
                            setEditingProduct({
                                ...editingProduct,
                                product_price: ev.target.value,
                            })
                        }
                    />
                    <br />
                    <button
                        onClick={() => {
                            edit(editingProduct.index, editingProduct);
                            setEditingProduct(null);
                            console.log(arr);
                            console.log(editingProduct.index);
                            console.log(editingProduct);
                        }}
                    >
                        SAVE
                    </button>
                </div>
            )}
        </div>
    );
}


export default A;