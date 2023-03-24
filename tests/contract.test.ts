import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { SetPrice } from "../generated/schema"
import { SetPrice as SetPriceEvent } from "../generated/Contract/Contract"
import { handleSetPrice } from "../src/contract"
import { createSetPriceEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _tokenId = BigInt.fromI32(234)
    let _price = BigInt.fromI32(234)
    let newSetPriceEvent = createSetPriceEvent(_tokenId, _price)
    handleSetPrice(newSetPriceEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("SetPrice created and stored", () => {
    assert.entityCount("SetPrice", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "SetPrice",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_tokenId",
      "234"
    )
    assert.fieldEquals(
      "SetPrice",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_price",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
