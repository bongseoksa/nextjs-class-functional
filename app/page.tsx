'use client'

import React from 'react';
import styles from './page.module.css'

export default function Home() {
  return (
    <main className="container">
      <h1>Hello world</h1>
      <FunctionComp></FunctionComp>
      <ClassComp></ClassComp>
    </main>
  )
}

export const FunctionComp = () => {
  return (
    <div className='container'>
      <h2>function style Component</h2>
    </div>
  )
}

export class ClassComp extends React.Component {
  render() {
    return (
      <div className='container'>
        <h2>class style Component</h2>
      </div>
    )
  }
}