import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native"

import { style } from '@/shared/components/Button/styles'


type Props = TouchableOpacityProps & {
    title: string,
    onPress?: () => void
}

export default function Button({ title, ...rest }: Props) {
    return (
        <TouchableOpacity
            style={style.container}
            activeOpacity={0.8}
            {...rest}
        >
            <Text style={style.title}>{title}</Text>
        </TouchableOpacity>
    )
};
