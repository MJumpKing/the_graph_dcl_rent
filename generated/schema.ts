// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Rent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Rent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Rent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Rent", id.toString(), this);
    }
  }

  static load(id: string): Rent | null {
    return changetype<Rent | null>(store.get("Rent", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get land(): string {
    let value = this.get("land");
    return value!.toString();
  }

  set land(value: string) {
    this.set("land", Value.fromString(value));
  }

  get rentDays(): BigInt | null {
    let value = this.get("rentDays");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set rentDays(value: BigInt | null) {
    if (!value) {
      this.unset("rentDays");
    } else {
      this.set("rentDays", Value.fromBigInt(<BigInt>value));
    }
  }

  get lessor(): Bytes | null {
    let value = this.get("lessor");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set lessor(value: Bytes | null) {
    if (!value) {
      this.unset("lessor");
    } else {
      this.set("lessor", Value.fromBytes(<Bytes>value));
    }
  }

  get tenant(): Bytes | null {
    let value = this.get("tenant");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set tenant(value: Bytes | null) {
    if (!value) {
      this.unset("tenant");
    } else {
      this.set("tenant", Value.fromBytes(<Bytes>value));
    }
  }

  get date(): BigInt | null {
    let value = this.get("date");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set date(value: BigInt | null) {
    if (!value) {
      this.unset("date");
    } else {
      this.set("date", Value.fromBigInt(<BigInt>value));
    }
  }

  get pricePerDay(): BigInt | null {
    let value = this.get("pricePerDay");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set pricePerDay(value: BigInt | null) {
    if (!value) {
      this.unset("pricePerDay");
    } else {
      this.set("pricePerDay", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class Land extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Land entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Land must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Land", id.toString(), this);
    }
  }

  static load(id: string): Land | null {
    return changetype<Land | null>(store.get("Land", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract_address(): Bytes | null {
    let value = this.get("contract_address");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set contract_address(value: Bytes | null) {
    if (!value) {
      this.unset("contract_address");
    } else {
      this.set("contract_address", Value.fromBytes(<Bytes>value));
    }
  }

  get Rent(): Array<string> {
    let value = this.get("Rent");
    return value!.toStringArray();
  }

  set Rent(value: Array<string>) {
    this.set("Rent", Value.fromStringArray(value));
  }
}
