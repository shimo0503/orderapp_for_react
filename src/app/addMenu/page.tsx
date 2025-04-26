'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { Box, Button, ListItem, Stack, TextField, Typography } from "@mui/material"
import { usePostApiMenuNew } from "@/generated/backend/menu/menu"
import { PostApiMenuNewBody } from "@/generated/backend/model"
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

// スキーマ
const Schema = z.object({
    name: z.string().min(1, '1文字以上入力してください。'),
    price: z.number().min(1, '1文字以上入力してください。'),
})

const AddMenu = () => {
    const { data, mutate, isPending } = usePostApiMenuNew()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(Schema)
    })
    const handleSubmitPost: SubmitHandler<params> = (formData:PostApiMenuNewBody ) => {
        mutate(
            {
                data: {
                    name: formData.name,
                    price: formData.price
                }
            },
            {
                onError: (error) => [
                    console.log(error)
                ]
            }
        )
    }
    return (
        <Stack>
            <Box
                component='form'
                onSubmit={(handleSubmit(handleSubmitPost))}
            >
                <ListItem
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start', 
                        gap: 1
                    }}
                >
                    <TextField
                        label='商品名'
                        {...register('name')}
                        variant='outlined'
                        placeholder='商品名を入力してください'
                        error={!!errors.name?.message}
                        helperText={errors.name?.message}
                        sx= {{
                            ml: 1,
                            mr: 1
                        }}
                    >
                    </TextField>
                    <TextField
                        label='値段'
                        {...register('price', { valueAsNumber: true })}
                        variant='outlined'
                        placeholder='値段を入力してください'
                        error={!!errors.price?.message}
                        helperText={errors.price?.message}
                        sx= {{
                            ml: 1,
                            mr: 1
                        }}
                    >
                    </TextField>
                </ListItem>
                <Button
                    type='submit'
                    variant="contained"
                    color='primary'
                    sx={{
                        width: '120px',
                        height: '50px',
                        fontSize: '20px',
                        ml: 3
                    }}
                >
                    送信
                </Button>
            </Box>
        {isPending ? (
            <Typography variant='h2'>送信中</Typography>
        ) : (
            <Typography>{data?.data}</Typography>
        )}
    </Stack>
    )
}

export default AddMenu