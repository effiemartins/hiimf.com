import Link from 'next/link'
import Header from '../components/header'
import React, { useEffect } from 'react'
import {
  getCategoryLink,
  postIsPublished,
  onlyUnique,
} from '../lib/blog-helpers'
import getBlogIndex from '../lib/notion/getBlogIndex'
import Breadcrumbs from 'nextjs-breadcrumbs'

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()

  const posts: any[] = Object.keys(postsTable)
    .map((slug) => {
      const post = postsTable[slug]

      post.Type = post.Type || []
      //   post.Tags = post.Category.split(',')

      if (!preview && !postIsPublished(post)) {
        return null
      }

      return post
    })
    .filter(Boolean)

  const alltypes: any[] = Object.keys(posts)
    .map((slug) => {
      const type = posts[slug].Type.split(',')

      return type
    })
    .filter(Boolean)
    .filter(onlyUnique)

  const types = [].concat.apply([], alltypes).sort().filter(onlyUnique)

  return {
    props: {
      preview: preview || false,
      types,
    },
    revalidate: 10,
  }
}

const Types = ({ types = [], preview }) => {
  return (
    <>
      <Header titlePre="Types" />

      {preview && (
        <div className="alertContainer">
          <div className="previewAlert">
            <b>Note:</b>
            {` `}Viewing in preview mode{' '}
            <Link href={`/api/clear-preview`}>
              <button aria-label="sair do modo preview" className="escapeAlert">
                Exit Preview
              </button>
            </Link>
          </div>
        </div>
      )}

      <div className="types-container">
        <div className="typesHeader">
          <Breadcrumbs
            containerClassName={'blogBreadcrumb'}
            activeItemClassName={'activeItem'}
            omitIndexList={[1]}
          />
          <h1>Types</h1>
        </div>

        {types.length === 0 && (
          <p className={'noPosts'}>Opa! Ainda tá sem post aqui.</p>
        )}
        <div className="typesList">
          {types.map((type) => {
            return (
              <Link
                key={type}
                href={getCategoryLink(type)}
                as={getCategoryLink(type)}
              >
                <a href={getCategoryLink(type)} className="typeItem">
                  <span>#</span>
                  {type}
                </a>
              </Link>
            )
          })}
        </div>
      </div>
      <div />
    </>
  )
}

export default Types
