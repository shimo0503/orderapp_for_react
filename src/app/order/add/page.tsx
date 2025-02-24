import { Box, Typography } from "@mui/material";
import { ProductData, ProductItem } from "../ProductType";
import Product from "../_components/Product";

// apiで全商品データを取得
const getData = async () => {
    const response = await fetch('http://localhost:8000/api/product', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data: ProductItem = await response.json()
    return data.data
}
const Addorder = async () => {
    const products: ProductData[] = await getData()
    return(
        <Box>
            <Product data={products}/>
        </Box>
    )
}

export default Addorder