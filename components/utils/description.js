import styles from '../../styles/utils/description.module.scss'

const Description = ({descriptions}) => {
    const showDescriptionInList = descriptions.map((desc, index) => <h1 key={index}>・{desc}</h1>)
    return (
        <div className={styles.container}>
            {showDescriptionInList}
        </div>
    )
}
export default Description