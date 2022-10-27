import { useState, useEffect } from "react"
import { Status } from "../constants/status"
import { sleep } from "./timer"

export const BubbleSort = (array, status, setStatus, speed) => {
    const oldArray = [...array];
    const [info, setInfo] = useState(
        {
            "array": array,
            "state": status,
            "comparisonCount": 0,
            "selectedIndex": [], 
            "swapIndex":null 
        }
    )

    useEffect(() => {
        switch (status) {
            case Status.RUNNING:
                bubbleSort(info, setInfo, speed)
                break
            case Status.START:
                setInfo(
                    {
                        "array": oldArray,
                        "state": status,
                        "comparisonCount": 0,
                        "selectedIndex": [], 
                        "swapIndex":null 
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
const bubbleSort = async (info, setInfo, speed) => {
    let sortArray = info.array
    let arrayLength = sortArray.length
    let comparisonCount = 0
    for (let i = 0; i < arrayLength; i++) {
        for (let j = 0; j < arrayLength - i - 1; j++) {
            await sleep(speed)
            if (sortArray[j] > sortArray[j+1]) {
                setInfo({...info, array: sortArray, comparisonCount: ++comparisonCount, selectedIndex: [j, j+1], swapIndex: j})
                await sleep(speed)
                let buf = sortArray[j]
                sortArray[j] = sortArray[j+1]
                sortArray[j+1] = buf
                setInfo({...info, array: sortArray, comparisonCount: comparisonCount, selectedIndex: [j, j+1]})
            }
            else {
                setInfo({...info, comparisonCount: ++comparisonCount, selectedIndex: [j, j+1] })
            }
        }   
    }
    setInfo({...info, state: Status.RESTART, comparisonCount: comparisonCount, selectedIndex: [] })
    return true
}