import {
  AssetRented as AssetRentedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,

} from "../generated/Contract/Contract"
import {
  Rent,
  Land
} from "../generated/schema"

export function handleAssetRented(event: AssetRentedEvent): void {
  let rent = Rent.load(event.transaction.hash.toHex());
  if (rent == null) {
    rent = new Rent(event.transaction.hash.toHex());
  }
  // if (event.params._lessor == n)
  let land = Land.load(event.params._tokenId.toString());
  if (land === null) {
    land = new Land(event.params._tokenId.toString());
    land.save()
  }
  land.contract_address = event.params._contractAddress

  rent.land = land.id;
  rent.rentDays = event.params._rentalDays
  rent.lessor = event.params._lessor
  rent.tenant = event.params._tenant
  rent.pricePerDay = event.params._pricePerDay

  rent.date = event.block.timestamp;
  rent.save()
}



