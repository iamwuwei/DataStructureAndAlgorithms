import styles from '../../../styles/sort/bar.module.scss'

const Bar = ({value, index, selectedIndex, swapIndex}) => {
    const isSelected = () => {
        if (selectedIndex.length > 0) {
            for (let i = 0; i < selectedIndex.length; i++) {
                if (index == selectedIndex[i]) {
                    return true
                }
            }
        }
        
        return false
    }
    const isSwap = () => {
        if (index == swapIndex) {
            return true
        }
        return false
    }
    return (
        <div className={`${styles.container} ${isSelected() ? styles.selected : ''} ${isSwap() ? styles.swap : ''}`}>
            <div className={styles.bar} style={{height:`${value * 2}%`}} data-value={value}></div>
        </div>
    )
}

export default Bar