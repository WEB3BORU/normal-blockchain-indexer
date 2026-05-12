export class Transaction {
  hash: string;
  blockNumber: number;
  blockHash: string;
  from: string;
  to: string | null;
  value: bigint;
  input: string;
  gasUsed: number;
  status: 0 | 1;

  constructor(props: {
    hash: string;
    blockNumber: number;
    blockHash: string;
    from: string;
    to: string | null;
    value: bigint;
    input: string;
    gasUsed: number;
    status: 0 | 1;
  }) {
    this.hash = props.hash;
    this.blockNumber = props.blockNumber;
    this.blockHash = props.blockHash;
    this.from = props.from;
    this.to = props.to;
    this.value = props.value;
    this.input = props.input;
    this.gasUsed = props.gasUsed;
    this.status = props.status;
  }
}