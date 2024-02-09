import React, { useState } from "react";

export default function Admin(){

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [ratings, setRatings] = useState('');
    const [imageURLs, setImageURLs] = useState([]); 
    const [category, setCategory] = useState('');
    const [seller, setSeller] = useState('');
    const [stock, setStock] = useState('');

    const addProducts = async (event) => {
        event.preventDefault();
        
        const productData = { name, price, description, ratings, images: imageURLs, category, seller, stock };

        try {
            const response = await fetch(process.env.REACT_APP_API_URL + '/admin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productData)
                
            });

            if (!response.ok) {
                throw new Error('Failed to add product');
            }

            alert('Product added successfully!');
            // setName('');
            // setPrice('');
            // setDescription('');
            // setRatings('');
            // setImageURLs([]);
            // setCategory('');
            // setSeller('');
            // setStock('');
        } catch (error) {
            console.error('Error:', error.message);
            alert('Failed to add product');
        }
    }

    const handleImageURLChange = (e) => {
        const urlsArray = e.target.value.split(',');
        const imagesArray = urlsArray.map(url => ({ image: url.trim() }));
        setImageURLs(imagesArray);
    }
    
    return (
        <form onSubmit={addProducts} className="container mt-5">
            <h1 className="mb-5">Add Products</h1>
    <div className="row">
        <div className="col-md-6">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Name" className="form-control mb-2" />
        </div>
        <div className="col-md-6">
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} name="price" placeholder="Price" className="form-control mb-2" />
        </div>
        <div className="col-md-6">
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} name="description" placeholder="Description" className="form-control mb-2" />
        </div>
        <div className="col-md-6">
            <input type="text" value={ratings} onChange={(e) => setRatings(e.target.value)} name="ratings" placeholder="Ratings" className="form-control mb-2" />
        </div>
        <div className="col-md-6">
            <input type="text" onChange={handleImageURLChange} name="imageURLs" placeholder="Image URL" className="form-control mb-2" />
        </div>
        <div className="col-md-6">
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" className="form-control mb-2" />
        </div>
        <div className="col-md-6">
            <input type="text" value={seller} onChange={(e) => setSeller(e.target.value)} placeholder="Seller" className="form-control mb-2" />
        </div>
        <div className="col-md-6">
            <input type="text" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock" className="form-control mb-2" />
        </div>
    </div>
    <button type="submit" className="btn btn-primary mt-3">Submit</button>
</form>

    );
}

