import { Box } from "@mui/material";
import BodyCard from "@/components/BodyCard";

const SelectMenu = () => {
  return(
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)', // 2列
      gridTemplateRows: 'repeat(4, 1fr)',    // 4行
      gap: 2,  // アイテム間の隙間
      width: '80%',
      margin: '0 auto'
    }}>
      <BodyCard name='hoge' description='hogehoge' />
      <BodyCard name='hoge' description='hogehoge' />
    </Box>
  )
}

export default SelectMenu