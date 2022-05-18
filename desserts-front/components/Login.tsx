import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const login = async () => {
        /* const {data, error, isLoading} = await useLogin */
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('primary.100', 'primary.800')}
        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Iniciar sesión</Heading>
                    {/* <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                    </Text> */}
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'primary.700')}
                    boxShadow={'lg'}
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl id="username">
                            <FormLabel>Nombre de usuario</FormLabel>
                            <Input onChange={(e) => setUsername(e.target.value)} type="username" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Contraseña</FormLabel>
                            <Input onChange={(e) => setPassword(e.target.value)} type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Recordarme</Checkbox>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={login}
                            >
                                Iniciar sesión
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}