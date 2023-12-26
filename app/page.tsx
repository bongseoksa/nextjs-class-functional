'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [funcShow, setFuncShow] = useState<boolean>(true);
  const [classShow, setClassShow] = useState<boolean>(true);
  return (
    <main className={styles.container}>
      <h1>Hello world</h1>
      <input
        type="button"
        value="remove func"
        onClick={() => setFuncShow(false)}
      />
      <input
        type="button"
        value="remove class"
        onClick={() => setClassShow(false)}
      />
      {funcShow ? <FunctionComp initNumber={2}></FunctionComp> : null}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </main>
  );
}

export const FunctionComp = (props: { initNumber: number }) => {
  const [number, setNumber] = useState<number>(props.initNumber);
  const funcStyle = `color:blue`;
  let funcId = 0;

  // useSate 활용1.
  // const [date, setDate] = useState<string>();

  // useState 활용2. 활용1과 동일한 기능
  const dateState = useState<string>('');
  let date = dateState[0];
  const setDate = dateState[1];

  // 컴포넌트가 mount 되었을 때, update될 때, unmount 될 때 실행
  useEffect(() => {
    console.log(
      `%cfunc => useEffect (componentDidMount & componentDidUpdate) ${++funcId}`,
      funcStyle,
    );

    // cleanup
    return () => {
      console.log(`%cfunc => useEffect return ${++funcId}`, funcStyle);
    };
  });

  // 컴포넌트가 mount 되었을 때, unmount 될 때 실행
  useEffect(() => {
    console.log(
      `%cfunc => useEffect (componentDidMount) ${++funcId}`,
      funcStyle,
    );
    setDate(new Date().toString());

    // cleanup
    return () => {
      console.log(
        `%cfunc => useEffect return (componentWillUnmount) ${++funcId}`,
        funcStyle,
      );
    };
  }, []);

  // number 값이 변경될 때 실행
  useEffect(() => {
    console.log(`%cfunc => useEffect number ${++funcId}`, funcStyle);
    setDate(new Date().toString());

    // cleanup
    return () => {
      console.log(`%cfunc => useEffect number return ${++funcId}`, funcStyle);
    };
  }, [number]);

  console.log(`%cfunc => render ${++funcId}`, funcStyle);
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
  classStyle = `color:red`;

  // state
  state: Readonly<{}> = {
    number: this.props.initNumber,
    date: '',
  };

  // lifeCycle
  // componentWillMount is deprecated in 16.9
  // componentWillMount(): void {
  //   console.log(`%cclass -> componentWillMount`, this.classStyle);
  // }
  componentDidMount(): void {
    console.log(`%cclass -> componentDidMount`, this.classStyle);
    this.setState({ date: new Date().toString() });
  }

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
