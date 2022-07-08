import styles from '../styles/Home.module.css'
import { Input } from 'antd';
const { TextArea } = Input;
import { useEffect, useState } from 'react';

export default function Home() {
  const [text, setTextarea] = useState();
  const changeText = (e) => {
    console.log(e.target.value);
    setTextarea(e.target.value);
  }
  return (
    <div className={styles.container}>
      <TextArea rows={4} placeholder="数据展示" showCount autoSize bordered onChange={changeText} />
      <div>{text}</div>
    </div>
  )
}
