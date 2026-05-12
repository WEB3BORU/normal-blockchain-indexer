export class Log {
  address: string;
  blockNumber: number;
  blockHash: string;
  transactionHash: string;
  logIndex: number;
  topics: string[];
  data: string;

  constructor(props: {
    address: string;
    blockNumber: number;
    blockHash: string;
    transactionHash: string;
    logIndex: number;
    topics: string[];
    data: string;
  }) {
    this.address = props.address;
    this.blockNumber = props.blockNumber;
    this.blockHash = props.blockHash;
    this.transactionHash = props.transactionHash;
    this.logIndex = props.logIndex;
    this.topics = props.topics;
    this.data = props.data;
  }
}