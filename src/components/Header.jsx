import {  Button, Flex, Heading } from "@chakra-ui/react";

export function Header() {

    return (
        <Flex  height="100vh" alignItems="center" justifyContent="center">
            <Flex bgPosition="center"  height="190px" backgroundSize="cover"  color="white"  direction="column" bgGradient="url('fondo.jpg')" width="100%">
                <Flex  mt="40px" justifyContent="center">
                    <Heading fontFamily="sans-serif" fontWeight="thin">DOMINA EL TERRENO</Heading>
                </Flex>
                <Flex mt="-20px" justifyContent="center" direction="row">
                    <Button _hover={{backgroundColor:"white", color:"black"}} fontFamily="sans-serif" m="10" p="7" pl="20px" pr="20px" color="white" borderColor="white" backgroundColor="transparent" borderWidth="1.8px">VER DETALLES</Button>
                    <Button  _hover={{backgroundColor:"white", color:"black"}} fontFamily="sans-serif" m="10" p="7" pl="20px" pr="20px" color="white" borderColor="white" backgroundColor="transparent" borderWidth="1.8px">VER VIDEO</Button>
                </Flex>
            </Flex>
        </Flex>
        
    )
}