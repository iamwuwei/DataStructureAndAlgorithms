import { useState, useEffect } from 'react'
import styles from '../../../styles/sort/bar-chart.module.scss'

import Bar from './bar'

const BarChart = ({data}) => {
    const bars = data.array.map( (value, index) => 
        <Bar key={index} value={value} index={index} selectedIndex={data.selectedIndex} swapIndex={data.swapIndex}/>
    )
    return (
        <div className={styles.container}>
            <div className={styles.chart}>
            { bars }
            </div>
        </div>
    )
}

export default BarChart