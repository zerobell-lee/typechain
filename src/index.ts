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

    static validateStructure = (block: Block): boolean => 
        typeof block.index === "number" &&
        typeof block.hash === "string" &&
        typeof block.previousHash === "string" &&
        typeof block.timestamp === "number" &&
        typeof block.data === "string";

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

const createNewBlock = (data: string): void => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimeStamp: number = getNewTimestamp();
    const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimeStamp, data);
    const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp);

    addBlock(newBlock);
}

const getHashforBlock = (block: Block): string => Block.calculateBlockHash(block.index, block.previousHash, block.timestamp, block.data);

const isBlockValid = (candidate: Block, previous: Block): boolean => {
    if (!Block.validateStructure(candidate)) {
        return false;
    } else if (previous.index + 1 !== candidate.index) {
        return false;
    } else if (previous.hash !== candidate.previousHash) {
        return false;
    } else if (getHashforBlock(candidate) != candidate.hash) {
        return false;
    } else {
        return true;
    }
}

const addBlock = (candidate: Block): void => {
    if (isBlockValid(candidate, getLatestBlock())) {
        blockchain.push(candidate);
    }
}

createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");

console.log(blockchain);

export {};