'use client';

import React from 'react';
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
  return (
    <div className={styles.container}>
      <h2>function style Component</h2>
      <p>Number : {props.initNumber}</p>
    </div>
  );
};

export class ClassComp extends React.Component {
  state: Readonly<{}> = {
    number: this.props.initNumber,
  };

  render() {
    console.log('class props', this.props);
    return (
      <div className={styles.container}>
        <h2>class style Component</h2>
        <p>Number : {this.state.number}</p>
        <input
          type="button"
          value="random"
          onClick={(() => {
            this.setState({ number: Math.random() });
          }).bind(this)}
        />
      </div>
    );
  }
}
