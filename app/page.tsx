'use client';

import React, { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <h1>Hello world</h1>
      <FunctionComp initNumber={2}></FunctionComp>
      <ClassComp initNumber={2}></ClassComp>
    </main>
  );
}

export const FunctionComp = (props: { initNumber: number }) => {
  const [number, setNumber] = useState<number>(props.initNumber);

  // useSate 활용1.
  // const [date, setDate] = useState<string>(new Date().toString());

  // useState 활용2. 활용1과 동일한 기능
  const dateState = useState<string>(new Date().toString());
  let date = dateState[0];
  const setDate = dateState[1];

  return (
    <div className={styles.container}>
      <h2>function style Component</h2>
      <p>Number : {number}</p>
      <p>Date : {date}</p>
      <input
        type="button"
        value="random"
        onClick={() => {
          setNumber(Math.random());
        }}
      />
      <input
        type="button"
        value="date"
        onClick={(() => {
          setDate(new Date().toString());
        }).bind(this)}
      />
    </div>
  );
};

export class ClassComp extends React.Component {
  state: Readonly<{}> = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };

  render() {
    console.log('class props', this.props);
    return (
      <div className={styles.container}>
        <h2>class style Component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={(() => {
            this.setState({ number: Math.random() });
          }).bind(this)}
        />
        <input
          type="button"
          value="date"
          onClick={(() => {
            this.setState({ date: new Date().toString() });
          }).bind(this)}
        />
      </div>
    );
  }
}
