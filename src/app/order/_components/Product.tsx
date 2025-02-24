'use client'

import { Card, CardContent, CardActions, Typography, Button, CardHeader, Box, Stack } from "@mui/material"
import { ReactEventHandler, useState } from "react"
import { ProductData, ProductItem } from "../ProductType";

type ProductProps = {
    data: ProductData[]
}

const Product = (props: ProductProps) => {
    const products: ProductData[] = props.data
    const [orderNum, setOrderNum] = useState<number[]>(new Array(products.length))

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
        event.preventDefault()
        if ((event.target as HTMLButtonElement).value === '+') {
            orderNum[index]++
            setOrderNum(orderNum)
        }
        else if ((event.target as HTMLButtonElement).value === '-') {
            orderNum[index]--
            setOrderNum(orderNum)
        }
    }
    return (
        <Box sx={
            {
                display: "grid",
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '64px'
            }
        }>
            {products.map(
                (product, index) => (
                    <Card key={index}>
                        <CardHeader title={product.name} key={product.name}>
                        </CardHeader>
                        <CardContent key={index}>
                            <Box>残数: {product.rest}</Box>
                            <Box>
                                <Button variant="outlined" value='+'>+</Button>
                                <Button variant="outlined">-</Button>
                            </Box>
                        </CardContent>
                    </Card>
                )
            )}
        </Box>
    )
}
export default Product