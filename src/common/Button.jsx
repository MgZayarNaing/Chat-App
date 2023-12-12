import { TouchableOpacity } from "react-native";
import { Text } from "react-native-svg";

const Button = ({ title }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#f5f5f5',
                height: 52,
                borderRadius: 26,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20
            }}
        >
            <Text
                style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: 'bold',
                }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;