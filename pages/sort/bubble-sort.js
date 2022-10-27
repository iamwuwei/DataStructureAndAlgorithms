import { useEffect, useState } from "react"
import Layout from "../../components/sort/layout"
import Description from "../../components/utils/description"
import CodeBlock from "../../components/utils/code-block"

import { BubbleSort } from '../../utils/bubble-sort'
import { Sorts } from '../../constants/sort'
import { Status } from '../../constants/status'

//1~50
const testArray = [1, 5, 9, 22, 4, 6, 8, 3, 7, 11, 15, 20]
const descriptions = ['全ての要素を最初から最後まで見ていき、順序が逆の要素があれば入れ替える', '全ての要素の順序が正しくなるまで、↑を繰り返す。', 'O(n^2)']
const code = ['for (let i = 0; i < array.length; i++) {',
'\tfor (let j = 0; j < array.length - i - 1; j++) {',
    '\t\tif (array[j] > array[j+1]) {',
        '\t\t\tconst buf = array[j]',
        '\t\t\tarray[j] = array[j+1]',
        '\t\t\tarray[j+1] = buf',
        '\t\t}',
    '\t}',
'}']
const BubbleSortView = () => {
    const [status, setStatus] = useState(Status.START)
    const bubbleSort = BubbleSort(testArray, status, setStatus, 100)

    return (
        <Layout sort={bubbleSort} status={status} setStatus={setStatus}>
            <Description descriptions={descriptions} />
            <CodeBlock code={code} />
        </Layout>
    )
}

export default BubbleSortView