import { useRouter } from 'next/router'
import { Sorts } from '../../constants/sort'

import BubbleSortView from '../../components/sort/bubble-sort'
import SelectionSortView from '../../components/sort/selection-sort'

const Sort = () => {
    const router = useRouter()
    const {sort} = router.query

    switch(sort) {
        case Sorts.BUBBLE_SORT:
            return <BubbleSortView />
        case Sorts.SELECTION_SORT:
            return <SelectionSortView />
        default:
            return (
                <div></div>
            )
    }
    
}

export default Sort