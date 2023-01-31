## TypeScriptの型
型推論
let username = "Hello";

アノテーション
文字列: let username:string = "Hello";
数値: let dummyNum:number = 2;
真偽値: let bool:boolean = true;
配列: let list: number[] = [1,2,3,4];
      let list: Array<number> = [1,2,3,4];
      let list: Array<number| string> = [1, 'hello', 2];

let list: Array<any> = [1, true, 'hello'];
let taple: [string, number];
taple = ['hello', 10];


Objectの型:
   1. interfaceを使用
         interface NAME {
          first: string;
          last?: string | null; // なければないでOK
        }

        let nameObj: NAME = {
            first: "Yamada",
            last: null,
        }
      2. オブジェクトの型定義
          const obj:{
            foo: number,
            bar: string,
            hoge: number[],
            huga: {
              foo: number,
              bar: boolean,
            }
          } = {
            foo: 1,
            bar: '2',
            hoge: [1,2,3],
            huga: {
              foo: 1,
              bar: false
            }
          }
関数: 関数の型定義
      ````
          const fnc1 = (x: number, y:number):number => x + y;

          const area = (height: number, width: number, unit: string):string => {
            return  height * width  + unit;
          }

          console.log(area(10, 20, 'cm'));

          const sum = (num1: number, num2:number): void => {
            console.log(num1 + num2);
          }

          sum(10, 29);
      ````
      ````
        const add = (n1 : number, n2: number, msg: string, flg: boolean) => {
          if(flg){
            const result = n1 + n2;
            return msg + result;
          }
          return false;
        }

        let num1 = 1;
        let num2 = 2;
        const msg = '合計は、'
        let flg = true;

        const result = add(num1, num2, msg, flg);
        console.log(result);

        console.log( typeof result);
  ````

## InterSection Types
複数のtypeを結合する処理

type PROFILE = {
  age: number,
  city: string,
};

type LOGIN = {
  username: string;
  password: string;
}

type USER = PROFILE & LOGIN;

const user:USER = {
  age:30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
}

## union型、Any型
Union型: 複数の型を定義し、そのどれかに当てはまる型を表している => 変数が受け取れるデータ型を制限することができる
   let a: number | string | boolean
        a = 1;
        a = 'hello';
        a = true;

   let value: boolean | number;
    value = true;
    value = 10;
Any型:任意の型を許容する
   let b: any;
   b = 1;
   b = 'hello';
   b = true;
プリミティブ

配列:
let arrayUni: (number | string)[];
arrayUni = [0,1,2, "Hello"];

## Literal型
決まった値のことを意味する。決められたあたいのみassignすることを許容する
UnionTypeとLiteralを合わせる
let company: "Facebook" | "Google" | "Amazon";
変数companyに代入できるのは, "Facebook"  "Google"  "Amazon だけ
company = "Amazon";
company = "Facebook";
company = "Google";

let memory: 256 | 512;
変数memoryに代入できるのは, 256,512だけ
memory = 256;
memory = 512;

## typeof
宣言済み変数の型を取得する
JSONのデータ型が複雑な構造を持つ時
let msg: string = "hi";
let msg2: typeof msg;
msg2 = "hello";

継承:
let animal = {cat: "small cat"};
let newAnimal: typeof animal = {
  cat: "big cat",
};


## keyof
type KEYS = {
  primary: string;
  secondary: string;
};

let key: keyof KEYS
key = "primary";

typeof + keyofの使い方:
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
}

let keySports: keyof typeof SPORTS;
keySports = "soccer";
keySports = "baseball";



##Enum型
列挙型: 関連する値の集合を編成する方法で、複数の定数を一つにまとめておくことができる形になる。
=> 列挙された順に0.1.2と割り振られる(自動で連番を付与してくれる)
  * 変数とは、プログラムで使われる値を名前付きで管理するラベルのようなのも
  * 繰り返し使う値を格納しておく入れ物
  * 本質的には、値への参照を格納する入れ物
  * 定数とは、一度値を設定するとそれ以降変更できない特殊な変数

```
      enum Role {
        ADMIN = 1,
        READ_ONLY,
        AUTHOR = '書き込み'
      }
      const userA = {
        id: 0,
        name: 'Yamada',
        type: Role.ADMIN,
      }

      const userB = {
        id: 1,
        name: 'Saito',
        type: Role.AUTHOR,
      }

      console.log(userA.type);
      console.log(userB.type);

      console.log(Role[userA.type]);

      namespace Role {
        export function toMessagesKey(role: Role){
          switch(role){
            case Role.ADMIN:
              return '管理者ユーザーです';
            case Role.AUTHOR:
              return '書き込み専門のユーザーです';
          }
        }
      }


      enum OS {
        WIndows,
        Mac,
        Linux,
      }

      interface PC {
        id: number;
        OSType: OS;
      }

      const PC1: PC = {
        id:1,
        OSType: OS.WIndows,
      }
      const PC2: PC = {
        id: 2,
        OSType: OS.Mac
      }

 ```



## 型の互換性
const comp1 = "test";
let comp2: string = comp1;

let comp3: string = "test";
let comp4: "text" = comp3; より抽象度の高いcomp3を入れようとするとエラーが出る
抽象度の高いものに対して代入するのは良いが、その逆はできない

let funcComp1 = (x: number) => {};



## Generics



## JSON型推論



