import { TextInput, View } from "react-native";
import { Text } from "react-native-svg";

const Input = ({ title }) => {
    return (
        <View>
            <Text
                style={{
                    color: '#70747A',
                    marginVertical: 6,
                    paddingLeft: 16,
                }}
            >
                {title}
            </Text>

            <TextInput
                style={{
                    backgroundColor: '#e1e2e4',
                    borderRadius: 26,
                    height: 52,
                    paddingHorizontal: 16,
                    fontSize: 20,
                }}
            />
        </View>
    )
}

export default Input;