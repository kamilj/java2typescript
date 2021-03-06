export class MyArrayList<E> implements MyList<E> {
  public add(elem: E): void {}
  public add(index: number, elem: E): void {}
  public remove(elem: E): void {}
  public remove(index: number): void {}
}
export class MyHashMap<K, V> implements MyMap<K, V> {
  public put(key: K, value: V): void {}
  public get(key: K): V {
    return null;
  }
  public remove(key: K): void {}
}
export interface MyList<E> {
  add(elem: E): void;
  add(index: number, elem: E): void;
  remove(elem: E): void;
  remove(index: number): void;
}
export interface MyMap<K, V> {
  put(key: K, value: V): void;
  get(key: K): V;
  remove(key: K): void;
}
export class UseGeneric {
  public strList: MyList<string>;
  public map: MyMap<string, number>;
  public static LEVELA: number = 0;
  public static LEVELB: number = UseGeneric.LEVELA;
  public static LEVEL: string = "" + UseGeneric.LEVELA;
  constructor() {
    this.strList = new MyArrayList<string>();
    this.map = new MyHashMap<string, number>();
  }
  public arrayAsGenType(list: MyList<MyList[]>): void {}
}