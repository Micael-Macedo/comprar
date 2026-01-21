import { FilterStatusEnum } from "../FilterStatus";

export interface IItem {
    id: string,
    description: string,
    status: FilterStatusEnum
}