import { StatusBar } from 'expo-status-bar';
import { Box, Text } from "@devsoutinho/sknui/native";

export default function App() {
  return (
    <Box styleSheet={{
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text styleSheet={{
        color: '#fff',
      }}>
        Olá pessoas!
      </Text>
      <StatusBar style="auto" />
    </Box>
  );
}