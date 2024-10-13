'use client'

import { Box, Center, Heading, Input } from "@chakra-ui/react"
import { ButtonLogin } from "./ButtonLogin"
import { login } from "../services/Login"

export const Card = () => {
    return (
        <Box minHeight={'90vh'} backgroundColor={'rgb(30, 25, 44)'} padding={'25px'}>
            <Box backgroundColor={'#FFF'} borderRadius={'25px'} padding={'30px'}>
            <Center>
                <Heading>Faça o Login</Heading >
            </Center>
            <form action="#">
                <Input placeholder='email' type='email' marginTop={'10px'}/>
                <Input placeholder='password' type='password' marginTop={'10px'}/>
                <Center paddingTop={'10px'}>
                <ButtonLogin onClick={login} value='Entrar' />
                </Center>
            </form>
            </Box>
        </Box>
    )
}