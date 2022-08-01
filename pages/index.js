import styles from '../styles/Home.module.css'
import { Input } from 'antd';
const { TextArea } = Input;
import { useEffect, useState } from 'react';

export default function Home() {
  const [text, setTextarea] = useState();
  const [title, setTitle] = useState();
  const changeText = (e) => {
    console.log(e.target.value);
    setTextarea(e.target.value);
  }

  useEffect(() => {
    setTitle('我是新的标题');
  }, [])
  return (
    <div className={styles.container}>
      <div>{title}</div>
      <TextArea rows={4} placeholder="数据展示" showCount autoSize bordered onChange={changeText} />
      <div>{text}</div>
    </div>
  )
}
