import React, { FC } from "react";
import {Button, Flex, Link, Stack, Text, Box} from '@chakra-ui/react';

interface Props {
    children: React.ReactNode;
}

const Layout: FC<Props> = ({children}) => {
    return (
        <Stack h="100vh">
            <Flex  bg="purple.200" p={4} justifyContent="space-around" alignItems="center">
                <Box>
                    <Text fontWeight="bold">h662-Animals</Text>
                </Box>
                <Link href="/">
                    <Button size="sm" colorScheme="green">
                        Main
                    </Button>
                </Link>
                <Link href="my-animal">
                    <Button size="sm" colorScheme="red">
                        my-Animal
                    </Button>
                </Link>
            </Flex>
            <Flex direction="column" h="full" justifyContent={"center"} alignItems="center">{children}</Flex>
        </Stack>
    )
}

export default Layout;