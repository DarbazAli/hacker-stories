import React from 'react'

const ListItem = ({ item: { title, url, author, num_comments, points } }) => {
  return (
    <div>
      <h3>
        <a href={url}>{title}</a>
      </h3>
      <p>
        Author: <b>{author}</b>
      </p>
      <p>
        Number of comments: <b>{num_comments}</b>
      </p>
      <p>
        Points: <b>{points}</b>
      </p>
    </div>
  )
}

export default ListItem
