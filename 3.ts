import { Instructions } from "./types";

const input: Instructions = {
  admin_init: {
    accounts: [
      { id: "admin_id", signer: true },
      { id: "other_id", signer: false },
      { id: "program_id", address: "staking_program_id" },
      { id: "locked_token_mint_id", address: "locked_token_mint_id" },
      { id: "reward_token_mint_id", address: "reward_token_mint_id" },
      { id: "system_program_id", address: "system_program_id" },
    ],
  },
};

const getIdsWithoutAddress = (instructions: Instructions) => {
  const ids: string[] = [];

  Object.keys(instructions).forEach((key) => {
    const accounts = instructions[key].accounts;

    accounts.forEach((account) => {
      if (!("address" in account)) ids.push(account.id);
    });
  });

  return ids;
};

console.log(getIdsWithoutAddress(input));
