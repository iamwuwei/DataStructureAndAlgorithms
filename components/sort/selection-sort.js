import { useState } from "react"
import Head from 'next/head'
import Layout from "./layout"

import Description from "../utils/description"
import CodeBlock from "../utils/code-block"


import { SelectionSort } from '../../utils/selection-sort'
import { Status } from '../../constants/status'

const SelectionSortView = () => {
    //1~50
    const testArray = [1, 5, 9, 22, 4, 6, 8, 3, 7, 11, 15, 20]
    const descriptions = ['配列の最初から最小値（緑）を探し、', '配列の先頭要素（青い）と入れ替えていくことで並べ替える。', '（配列の先頭要素は最小値なら入れ替える動作を行わない）', 'O(n^2)']
    const code = ['for (let i = 0; i < array.length; i++) {',
        '\tlet min = i',
        '\tfor (let j = i+1; j < array.length; j++) {',
            '\t\tif (array[j] < array[min]) {',
                '\t\t\tmin=j',
            '\t\t}',
        '\t}',
        '\tif (min != i) {',
            '\t\tlet temp = array[i]',
            '\t\tarray[i] = array[min]',
            '\t\tarray[min] = temp',
        '\t}',
    '}']
       
    const [status, setStatus] = useState(Status.START)
    const selectionSort = SelectionSort(testArray, status, setStatus, 500)

    return (
        <Layout sort={selectionSort} status={status} setStatus={setStatus}>
            <Head>
                <title>selection sort 選択ソート</title>
                <meta name="description" content="selection sort 選択ソート" />
            </Head>
            <Description descriptions={descriptions} />
            <CodeBlock code={code} />
        </Layout>
    )
}

export default SelectionSortView