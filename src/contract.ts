import {
  SetPrice as SetPriceEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent,
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent
} from "../generated/Contract/Contract"
import {
  SetPrice,
  OwnershipTransferred,
  Transfer,
  Approval,
  ApprovalForAll
} from "../generated/schema"

export function handleSetPrice(event: SetPriceEvent): void {
  let entity = new SetPrice(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._tokenId = event.params._tokenId
  entity._price = event.params._price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._from = event.params._from
  entity._to = event.params._to
  entity._tokenId = event.params._tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._owner = event.params._owner
  entity._approved = event.params._approved
  entity._tokenId = event.params._tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._owner = event.params._owner
  entity._operator = event.params._operator
  entity._approved = event.params._approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
