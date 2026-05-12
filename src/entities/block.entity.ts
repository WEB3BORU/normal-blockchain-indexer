export class Block {
  blockNumber: number;
  blockHash: string;
  parentHash: string;
  miner: string;
  timestamp: number;
  transactionHashes: string[];
  gasLimit: number;
  gasUsed: number;

  constructor(props: {
    blockNumber: number;
    blockHash: string;
    parentHash: string;
    miner: string;
    timestamp: number;
    transactionHashes: string[];
    gasLimit: number;
    gasUsed: number;
  }) {
    this.blockNumber = props.blockNumber;
    this.blockHash = props.blockHash;
    this.parentHash = props.parentHash;
    this.miner = props.miner;
    this.timestamp = props.timestamp;
    this.transactionHashes = props.transactionHashes;
    this.gasLimit = props.gasLimit;
    this.gasUsed = props.gasUsed;
  }
}