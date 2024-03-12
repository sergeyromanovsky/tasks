import { Addresses } from "./types";

const addresses = (addresses: Addresses) => addresses;

addresses({
  locked_token_mint_id: { address: "locked_token_mint_id" },
  staking_program_id: { address: "system_program_id" },
  system_program_id: "system_program_id",
});
