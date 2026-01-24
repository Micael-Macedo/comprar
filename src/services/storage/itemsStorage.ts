import AsyncStorage from "@react-native-async-storage/async-storage";

import { FilterStatusEnum } from "@/shared/types/FilterStatus";
import { IItem } from "@/shared/types/interfaces/item.interface";

const ITEMS_STORAGE_KEY = "@comprar:items"

async function getAll(): Promise<IItem[]> {
    try {
        const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY)

        return storage ? JSON.parse(storage) : []
    } catch (error) {
        throw new Error("ITEMS_GET_ALL: " + error)
    }
}

async function getByStatus(status: FilterStatusEnum): Promise<IItem[]> {
    try {
        const items = await getAll()
        return items.filter((item) => item.status === status)
    } catch (error) {
        throw new Error("ITEMS_GET_BY_STATUS: " + error)
    }
}

async function save(items: IItem[]): Promise<void> {
    try {
        await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items))
    } catch (error) {
        throw new Error("ITEMS_SAVE: " + error)
    }
}

async function add(newItem: IItem): Promise<IItem[]> {
    const items = await getAll()
    const updatedItems = [...items, newItem]

    await save(updatedItems)

    return updatedItems
}

async function remove(selected: IItem): Promise<IItem[]> {
    const items = await getAll()

    const updatedItems = items.filter((item) => item.id !== selected.id)

    await save(updatedItems)

    return updatedItems
}

async function update(updatedItem: IItem): Promise<IItem[]> {
    const items = await getAll()

    const itemPosition = items.findIndex((item) => item.id === updatedItem.id)
    items[itemPosition] = updatedItem

    const updatedItems = items
    await save(updatedItems)

    return updatedItems
}



export const itemsStorage = {
    getAll,
    getByStatus,
    add,
    remove,
    update
}
