import { Card, CardHeader, CardContent, Typography } from "@mui/material"
import Link from "next/link"

type LinkCardProps = {
    title: string,
    index: number,
    link: string
}
const LinkCard = (props: LinkCardProps) => {
    const title = props.title
    const link = props.link
    const index = props.index
    return (
        <Link href={link}>
            <Card key={index}>
                <CardHeader title={title} key={index}>
                </CardHeader>
            </Card>
        </Link>
    )
}

export default LinkCard