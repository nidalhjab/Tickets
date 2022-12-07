import axios from "axios";
import { useEffect, useState } from "react";
import { ListItemData } from "../components/ListItem/ListItemData";

export const useGetListItems = () => {
    const [items, setItems] = useState<ListItemData>();
    const [error, setError] = useState<string>();

    useEffect(() => {
        const getITems = async () => {
            try {
                const response = await axios.get<ListItemData>('/listItems.json');
                if (response.status === 200) {
                    setItems(response.data)
                }
            } catch (err: any) {
                setError(err)
            }
        }
        getITems()
    }, [])

    return { items, error }
}