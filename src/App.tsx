import React from 'react';
import './App.css';


// Generics ジェネリクス
// Reactのpropsにはジェネリクスが使用されている
// テンプレートだけ用意して、具体的に使用するときに型を動的に決定することができる


interface GEN<T> {
  item: T;
}

const gen0: GEN<string> = { item: "hello" };
// const gen1: GEN = { item: "hello"}; // エラー 
const gen2 : GEN<number> = { item: 1};

// defaultで型を設定
interface GEN1<T = string> {
  item: T;
}

// extends: 指定できるデータ型を制限するこ
interface GEN2<T extends string | number >{
  item: T;
}

const gen3: GEN1 = { item: "hello" };
const gen4: GEN2<string> = { item: "hello" };

// 関数のGenericsの使い方
function funcGen<T>(props: T){
  return { item: props };
}

const gen6 = funcGen<string>("test");
const gen7 = funcGen<string | null>("test");

// function funcGen1<T extends string | null>{

// }




function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}
// keys() メソッドは、配列内の各インデックスのキーを含む、新しい配列反復子オブジェクトを返します。
export default App;
