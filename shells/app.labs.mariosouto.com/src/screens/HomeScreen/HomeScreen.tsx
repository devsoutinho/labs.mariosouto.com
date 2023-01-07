import { Box, Text } from "@devsoutinho/sknui/native";

export function HomeScreen() {
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
</Box>
);
}