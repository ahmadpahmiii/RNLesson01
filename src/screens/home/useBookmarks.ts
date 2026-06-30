import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const STORAGE_KEY = 'bookmarked_ids'

export function useBookmarks() {
    const [bookmarkIds, setBookmarkIds] = useState<string[]>([]);

    useEffect(() => {
        loadBookmarks();
    }, [])


    async function loadBookmarks() {
        try {
            const stored = await AsyncStorage.getItem(STORAGE_KEY);
            if (stored) {
                setBookmarkIds(JSON.parse(stored))
            }
        } catch (err) {
            console.log('Failed', err)
        }
    }

    async function toggleBookmark(id: string) {
        const updated = bookmarkIds.includes(id)
            ? bookmarkIds.filter(ids => ids !== id)
            : [...bookmarkIds, id];

        setBookmarkIds(updated)
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    }

    function isBookmarked(id: string) {
        return bookmarkIds.includes(id);
    }

    return {bookmarkIds, toggleBookmark, isBookmarked}
}
