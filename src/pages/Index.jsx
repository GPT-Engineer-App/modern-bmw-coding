import { Container, Box, VStack, HStack, Text, Button, Image, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Index = () => {
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box as="header" textAlign="center" py={8}>
          <Text fontSize="4xl" fontWeight="bold" color="blue.600">
            BMW Coding Services
          </Text>
          <Text fontSize="xl" color="gray.600">
            Profesjonalne kodowanie i programowanie BMW
          </Text>
        </Box>

        {/* Hero Section */}
        <Box as="section" textAlign="center" py={8}>
          <Image src="https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibXclMjBjYXIlMjBjb2Rpbmd8ZW58MHx8fHwxNzE3MjY2NDAyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="BMW Coding" borderRadius="md" mb={4} />
          <Text fontSize="2xl" fontWeight="bold" color="blue.600">
            Zoptymalizuj swoje BMW
          </Text>
          <Text fontSize="lg" color="gray.600">
            Oferujemy szeroki zakres usług kodowania i programowania dla Twojego BMW, aby zapewnić najlepsze osiągi i funkcjonalność.
          </Text>
          <Button colorScheme="blue" size={buttonSize} mt={4}>
            Skontaktuj się z nami
          </Button>
        </Box>

        {/* Services Section */}
        <Box as="section" py={8}>
          <Text fontSize="3xl" fontWeight="bold" color="blue.600" textAlign="center" mb={4}>
            Nasze Usługi
          </Text>
          <HStack spacing={8} justify="center" flexWrap="wrap">
            <Box maxW="sm" borderWidth="1px" borderRadius="md" overflow="hidden" p={4} textAlign="center">
              <Image src="https://images.unsplash.com/photo-1679749176733-fa62972cc42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibXclMjBkaWFnbm9zdGljc3xlbnwwfHx8fDE3MTcyNjI3NzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Diagnostyka BMW" borderRadius="md" mb={4} />
              <Text fontSize="xl" fontWeight="bold" color="blue.600">
                Diagnostyka
              </Text>
              <Text color="gray.600">Kompleksowa diagnostyka komputerowa Twojego BMW.</Text>
            </Box>
            <Box maxW="sm" borderWidth="1px" borderRadius="md" overflow="hidden" p={4} textAlign="center">
              <Image src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibXclMjBjb2Rpbmd8ZW58MHx8fHwxNzE3MjYyNzc1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Kodowanie BMW" borderRadius="md" mb={4} />
              <Text fontSize="xl" fontWeight="bold" color="blue.600">
                Kodowanie
              </Text>
              <Text color="gray.600">Personalizacja ustawień i funkcji pojazdu.</Text>
            </Box>
            <Box maxW="sm" borderWidth="1px" borderRadius="md" overflow="hidden" p={4} textAlign="center">
              <Image src="https://images.unsplash.com/photo-1679749176733-fa62972cc42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibXclMjBwcm9ncmFtbWluZ3xlbnwwfHx8fDE3MTcyNjY0MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Programowanie BMW" borderRadius="md" mb={4} />
              <Text fontSize="xl" fontWeight="bold" color="blue.600">
                Programowanie
              </Text>
              <Text color="gray.600">Aktualizacje oprogramowania i modułów.</Text>
            </Box>
          </HStack>
        </Box>

        {/* Contact Section */}
        <Box as="section" py={8} textAlign="center">
          <Text fontSize="3xl" fontWeight="bold" color="blue.600" mb={4}>
            Skontaktuj się z nami
          </Text>
          <Text fontSize="lg" color="gray.600" mb={4}>
            Masz pytania? Skontaktuj się z nami, aby uzyskać więcej informacji.
          </Text>
          <Button colorScheme="blue" size={buttonSize}>
            Wyślij wiadomość
          </Button>
        </Box>

        {/* Footer Section */}
        <Box as="footer" py={8} textAlign="center" borderTopWidth="1px" borderColor="gray.200">
          <Text fontSize="lg" color="gray.600" mb={4}>
            Śledź nas na mediach społecznościowych
          </Text>
          <HStack spacing={4} justify="center">
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" colorScheme="facebook" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" colorScheme="pink" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="twitter" />
          </HStack>
          <Text fontSize="sm" color="gray.500" mt={4}>
            © 2023 BMW Coding Services. Wszelkie prawa zastrzeżone.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
