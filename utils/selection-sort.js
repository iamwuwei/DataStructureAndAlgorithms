import { useState, useEffect } from "react"
import { Status } from "../constants/status"
import { sleep } from "./timer"

export const SelectionSort = (array, status, setStatus, speed) => {
    const oldArray = [...array];
    const [info, setInfo] = useState(
        {
            "array": array,
            "state": status,
            "comparisonCount": 0,
            "selectedIndex": [], 
            "swapIndex": null, 
            "minimumIndex": null
        }
    )

    useEffect(() => {
        switch (status) {
            case Status.RUNNING:
                selectionSort(info, setInfo, speed)
                break
            case Status.START:
                setInfo(
                    {
                        "array": oldArray,
                        "state": status,
                        "comparisonCount": 0,
                        "selectedIndex": [], 
                        "swapIndex":null,
                        "minimumIndex": null
                    }
                )
        }
    }, [status])

    useEffect(() => {
        switch (info.state) {
            case Status.RESTART:
                setStatus(Status.RESTART)
                break
        }
    }, [info])

    return {"info":info};
} 

const selectionSort = async (info, setInfo, speed) => {
    let sortArray = info.array
    let arrayLength = sortArray.length
    let comparisonCount = 0

    for (let i = 0; i < arrayLength; i++) {
        let min = i
        await sleep(speed)
        setInfo({...info, selectedIndex: [i], minimumIndex:min, comparisonCount: comparisonCount})
        for (let j = i+1; j < arrayLength; j++) {
            if (sortArray[j] < sortArray[min]) {
                min=j
            }
            setInfo({...info, selectedIndex: [i, j], minimumIndex:min, comparisonCount: ++comparisonCount})
            await sleep(speed)
        }

        if (min != i) {
            let temp = sortArray[i]
            setInfo({...info, comparisonCount: comparisonCount, swapIndex: i, minimumIndex:min})
            await sleep(speed)
            sortArray[i] = sortArray[min]
            sortArray[min] = temp
            await sleep(speed)
            setInfo({...info, comparisonCount: comparisonCount, array: sortArray, swapIndex: min, minimumIndex:i})
            await sleep(speed)
        }
    }
    await sleep(speed)
    setInfo({...info, state: Status.RESTART, comparisonCount: comparisonCount, selectedIndex: [], minimumIndex: null })
    return true
}