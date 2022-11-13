import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from '../../styles/utils/page-index.module.scss'

import { Sorts } from '../../constants/sort'

const PageIndex = () => {
    const router = useRouter()
    const paths = router.asPath.split('/')

    const getTitle = () => {
        const { sort } = router.query
        switch(sort) {
            case Sorts.BUBBLE_SORT:
                return "バブルソート"
            default:
                return ''
        }
    }

    return (
        <h1 className={styles.container}>
            {
                paths.map((path, index) => (
                    <p>
                        <Link href={path ? path : '/'}><a>{ path ? index == paths.length-1 ? getTitle() : path : 'home' }</a></Link>
                        {
                            index < paths.length-1 ? '/' : '' 
                        }
                    </p>
                ))
            }
        </h1> 
    )
}

export default PageIndex