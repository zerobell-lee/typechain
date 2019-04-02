import * as CryptoJS from 'crypto-js';

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (index: number, previousHash: string, timestamp: number, data: string): string => {
        return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
    }

    constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock = new Block(0, "2020220023920392039", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock]; // 타입 지정에는 [Block] 식으로 특정 자료형만 받는 array를 강제할 수 있다.

const getBlockchain = (): Block[] => blockchain;
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];
const getNewTimestamp = (): number => Math.round(new Date().getTime()/1000);

const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimeStamp: number = getNewTimestamp();
    const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimeStamp, data);
    const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp);

    return newBlock;
}

blockchain.push(createNewBlock("hello"));
blockchain.push(createNewBlock("bye"));

console.log(blockchain);

export {};