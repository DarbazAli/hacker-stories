import React from 'react'

const Item = ({ item: { title, url, author, num_comments, points } }) => (
  <div>
    <p>
      <a href={url}>{title}</a>
    </p>
    <p>
      Author: <b>{author}</b>
    </p>
    <p>
      Comments: <b>{num_comments}</b>
    </p>
    <p>
      Points: <b>{points}</b>
    </p>
    <hr />
  </div>
)

export default Item
