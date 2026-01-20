import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";
import { FilterStatusEnum } from "@/shared/types/FilterStatus";

type Props = TouchableOpacityProps & {
    status: FilterStatusEnum,
    isActive: boolean
}

export default function Filter({ status, isActive, ...rest }: Props) {
    return (
        <TouchableOpacity
            style={[styles.container, { opacity: isActive ? 1 : 0.5 }]}
            activeOpacity={0.8}
            {...rest}
        >
            <Text style={styles.title}>
                {status === FilterStatusEnum.DONE ? "Comprados" : "Pendentes"}
            </Text>
        </TouchableOpacity>
    )
};
