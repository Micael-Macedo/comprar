import { TouchableOpacity, Text } from "react-native"
import { style } from '@/shared/components/Button/styles'
export default function Button() {
    return (
        <TouchableOpacity style= {style.container} activeOpacity={0.8}>
            <Text style={style.title}>Button</Text>
        </TouchableOpacity>
    )
};
