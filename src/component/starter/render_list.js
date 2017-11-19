import React from 'react';

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]

export const MapListOf = (props) => {
  const userEl = []
  for (let user of users) {
    userEl.push(
      <div key={user.username}>
        <div>姓名：{user.username}</div>
        <div>年龄：{user.age}</div>
        <div>性别：{user.gender}</div>
        <hr/>
      </div>
    )
  }
  return (
    <div>
      { userEl }
    </div>
  )
}

export const MapListMap = (props) => {
  return (
    <div>
      {
        users.map(user => {
         return (
           <div key={user.username}>
             <div>姓名：{user.username}</div>
             <div>年龄：{user.age}</div>
             <div>性别：{user.gender}</div>
             <hr />
           </div>
         )
        })
      }
    </div>
  )
}

const User = (props) => {
  const { user } = props
  return (
    <div>
      <div>姓名：{user.username}</div>
      <div>年龄：{user.age}</div>
      <div>性别：{user.gender}</div>
      <hr />
    </div>
  )
}

export const MapList = (props) => {
  return (
    <div>
      {
        users.map(user => <User key={user.username} user={ user }/>)
      }
    </div>
  )
}