import { FilterStatusEnum } from "@/shared/types/FilterStatus"
import { CircleDashed, CircleCheck } from "lucide-react-native"

export default function StatusIcon({ status }: {status: FilterStatusEnum}) {
    return status === FilterStatusEnum.DONE ? (
        <CircleCheck size={18} color={"#2c46b1"} />
    ) : (
        <CircleDashed size={18} color={"#000"} />
    )
};
