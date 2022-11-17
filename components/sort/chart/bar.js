import styles from '../../../styles/sort/bar.module.scss'

const Bar = ({value, index, data}) => {
    const isSelected = () => {
        if(data.minimumIndex == index) {
            return styles.minimum
        }
        if (data.selectedIndex.length > 0) {
            for (let i = 0; i < data.selectedIndex.length; i++) {
                if (index == data.selectedIndex[i]) {
                    return styles.selected
                }
            }
        }
        
        return styles.null
    }
    const barColor = () => {
        if (index == data.swapIndex) {
            return styles.swap
        }
        if (index == data.minimumIndex) {
            return styles.minimum
        }
        return styles.null
    }
    return (
        <div className={`${styles.container} ${isSelected()} ${barColor()}`}>
            <div className={styles.bar} style={{height:`${value * 2}%`}} data-value={value}></div>
        </div>
    )
}

export default Bar