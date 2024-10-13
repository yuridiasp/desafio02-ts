import { Center, Flex } from "@chakra-ui/react"

import { DioIcon } from "./DioIcon"

export const Header = () => {
    return (
        <Flex paddingLeft={'20px'} alignItems={'center'} height={'10vh'} gap={'50px'} fontSize={'2rem'} backgroundColor={'rgb(21, 21, 21)'} color={'white'}>
            <DioIcon width="98" height="40" />
            Dio Bank
        </Flex>
    )
}