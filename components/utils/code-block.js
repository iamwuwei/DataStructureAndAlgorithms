import styles from '../../styles/utils/code-block.module.scss'

const CodeBlock = ({code}) => {
    const renderCode = code.map((desrc, index) => <pre key={index}>{desrc}</pre>)
    return (
        <div className={styles.container}>
            <div className={styles.code}>
                {renderCode}
            </div>
        </div>
    )
}

export default CodeBlock