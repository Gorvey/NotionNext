import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { checkContainHttp, sliceUrlFromHttp } from '@/lib/utils'
import NotionIcon from '@/components/NotionIcon'
import Badge from '@/components/Badge'
import CONFIG from '../config'

const BlogPostCard = ({ post, className }) => {
  const router = useRouter()
  const currentSelected = router.asPath.split('?')[0] === '/' + post.slug
  const url = checkContainHttp(post.slug) ? sliceUrlFromHttp(post.slug) : `${siteConfig('SUB_PATH', '')}/${post.slug}`
  return (
    <Link href={url} passHref>
      <div key={post.id} className={`${className} relative py-1.5 cursor-pointer px-1.5 hover:bg-gray-50 rounded-md dark:hover:bg-transparent  ${currentSelected ? ' bg-gray-100 font-bold  dark:bg-transparent dark:text-blue-600' : ''}`}>
        <div className="w-full select-none">
          <NotionIcon icon={post?.pageIcon} /> {post.title}
        </div>
        {/* 最新文章加个红点 */}
        {post?.isLatest && siteConfig('GITBOOK_LATEST_POST_RED_BADGE', false, CONFIG) && <Badge />}
      </div>
    </Link>
  )
}

export default BlogPostCard
