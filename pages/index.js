import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

const MAX_DISPLAY = 5
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />

      <section className="text-blueGray-700 mb-14">
        <div className="container flex flex-col items-center py-16 mx-auto md:flex-row">
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font dark:text-blue-900">
              {' '}
              Rostocker in Pyjamas{' '}
            </h2>
            <h1 className="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font dark:text-gray-100">
              {' '}
              Welcome to our community blog.{' '}
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600 ">
              {' '}
              We are the RIP clan. On this page you will find all updates to our current projects
              and our development.{' '}
            </p>
            <div className="flex flex-col justify-center lg:flex-row">
              <a
                href={siteMetadata.discordJoinURL || '#'}
                className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
              >
                {' '}
                Join Discord{' '}
              </a>
              <p className="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0">
                {' '}
                You are just interested in our Blog? <br className="hidden lg:block" />
                <Link href="/blog">
                  <a
                    className="inline-flex items-center font-semibold text-blue-500 md:mb-2 lg:mb-0 hover:text-black "
                    title="read more"
                  >
                    {' '}
                    Read more about it »{' '}
                  </a>
                </Link>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
            <img
              className="object-cover object-center rounded-lg "
              alt="hero"
              src="/static/images/undraw_appreciation.svg"
            />
          </div>
        </div>
      </section>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>
                          {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                        </time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
