export class IndexerCheckpoint {
  chainId: number;
  startBlock: number;
  lastProcessedBlock: number;
  updatedAt: Date;

  constructor(props: {
    chainId: number;
    startBlock: number;
    lastProcessedBlock: number;
  }) {
    this.chainId = props.chainId;
    this.startBlock = props.startBlock;
    this.lastProcessedBlock = props.lastProcessedBlock;
    this.updatedAt = new Date();
  }
}