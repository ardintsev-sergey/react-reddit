import React from 'react';

interface Props {
  title: string
}

export function PostHeader(title: Props) {
  return (
    <h1>{Object.values(title)}</h1>
  )
}
