import React from 'react'

const List = ({ list }) =>
  list.map(({ objectID, ...item }) => <Item key={objectID} {...item} />)

const Item = ({ title, author, url, num_comments, points }) => (
  <div>
    <h3>
      <a href={url}>{title}</a>
    </h3>
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

export default List
