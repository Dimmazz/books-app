import React from 'react'

const Author = ({author}: {author: string}) => {
  return (
    <li className="card_author">
      {author}
    </li>
  )
}

export default Author