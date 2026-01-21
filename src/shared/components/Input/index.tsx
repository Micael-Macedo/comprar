import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

type Props = TextInputProps & {

}

export default function Input({...rest}: Props) {
    return (
        <TextInput 
        placeholderTextColor="#74798B"
        style={ styles.container } {...rest} />
    )    
}