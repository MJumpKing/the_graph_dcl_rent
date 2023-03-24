import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  SetPrice,
  OwnershipTransferred,
  Transfer,
  Approval,
  ApprovalForAll
} from "../generated/Contract/Contract"

export function createSetPriceEvent(
  _tokenId: BigInt,
  _price: BigInt
): SetPrice {
  let setPriceEvent = changetype<SetPrice>(newMockEvent())

  setPriceEvent.parameters = new Array()

  setPriceEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  setPriceEvent.parameters.push(
    new ethereum.EventParam("_price", ethereum.Value.fromUnsignedBigInt(_price))
  )

  return setPriceEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTransferEvent(
  _from: Address,
  _to: Address,
  _tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return transferEvent
}

export function createApprovalEvent(
  _owner: Address,
  _approved: Address,
  _tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("_approved", ethereum.Value.fromAddress(_approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  _owner: Address,
  _operator: Address,
  _approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("_operator", ethereum.Value.fromAddress(_operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("_approved", ethereum.Value.fromBoolean(_approved))
  )

  return approvalForAllEvent
}
