import Product from "../models/product.js";

/*
    Get all products => /api/v1/products
*/
export const getProducts = async(req, res) => {
    try{
        const products = await Product.find();

        res.status(200).json({ 
            success: true,
            products
        });
    }catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

/*
    Create new product=> /api/v1/admin/products
*/
export const newProduct = async(req, res) => {
    const product =  await Product.create(req.body);

    res.status(200).json({
        success: true,
        product
    });
}

/*
    Get single product => /api/v1/product/:id
*/
export const getProductDetails = async(req, res) => {
    const product = await Product.findById(req?.params?.id);

    if(!product){
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    res.status(200).json({
        success: true,
        product
    });    
}         

/*
    Update product => /api/v1/admin/product/:id
*/
export const updateProduct = async(req, res) => {
    let product = await Product.findById(req?.params?.id);
    
    if(!product){   
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    product = await Product.findByIdAndUpdate(req?.params?.id, req.body, {
        new: true,
    });

    res.status(200).json({
        success: true,
        product
    });
}
