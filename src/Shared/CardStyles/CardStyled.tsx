import { Card, CardProps } from "@mui/material";
import { styled } from "@mui/material/styles";


export const CardStyled = styled(Card)<CardProps>(
    ({theme}) => 
    `background: ${theme.palette.primary.main};`
)