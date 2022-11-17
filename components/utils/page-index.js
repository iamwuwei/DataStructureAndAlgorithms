import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from '../../styles/utils/page-index.module.scss'

import { Sorts } from '../../constants/sort'
import Sort from '../../pages/sort/[sort]'

const PageIndex = () => {
    const router = useRouter()
    const paths = router.asPath.split('/')
    
    const getTitle = () => {
        const { sort } = router.query
        switch(sort) {
            case Sorts.BUBBLE_SORT:
                return "バブルソート"
            case Sorts.SELECTION_SORT:
                return "選択ソート"
            default:
                return ''
        }
    }

    return (
        <h1 className={styles.container}>
            {
                paths.map((path, index) => (
                    <p key={index} style={{fontSize: index == paths.length-1 ? '1.3rem' : '.9rem'}}>
                        <Link href={path ? index == paths.length-1 ? path : `/${path}` : '/'}><a style={{margin:'0 4px'}}>{ path ? index == paths.length-1 ? getTitle() : path : 'home' }</a></Link>
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