import React from 'react'

interface Props {
  descr: string;
  url: string
}

function PostDescr({descr, url}: Props) {
  return (
    <div>
      <p>{descr}</p>
      <a href={url} target="_blank" style={{ textDecoration: 'underline' }}>{url}</a>
    </div>
  )
}

export default PostDescr
