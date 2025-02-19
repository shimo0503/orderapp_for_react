import { Card, CardActions, CardContent, Typography, Box } from "@mui/material"

type CardProps = {
    name: String,
    description: String
}

const BodyCard = (props: CardProps) => {
    const name = props.name
    const description = props.description
    return (
        <Card variant="outlined" sx={{mx: 5}}>
            <CardContent>
                <Box>{name}</Box>
                <Box>{description}</Box>
            </CardContent>
        </Card>
    )
}
export default BodyCard