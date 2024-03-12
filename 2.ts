import { Addresses, AddressesKeys, InstructionsInput } from "./types";

const instructions = ({ instructions, addresses }: InstructionsInput) => {
  return Object.keys(instructions).map((key) => {
    const accounts = instructions[key].accounts;

    return accounts.map((account) => {
      const { address: addressKey } = account;

      if ("signer" in account) return account;

      return {
        ...account,
        address: getAddress(addresses, addressKey),
      };
    });
  });
};

const getAddress = (
  addresses: Addresses,
  key?: AddressesKeys
): string | never => {
  if (!key) throw new Error("Address key is not defined");

  const address = addresses[key];

  if (typeof address === "string") return address;

  return getAddress(addresses, address.address);
};

const result = instructions({
  addresses: {
    staking_program_id: "5XDdQrpNCD89LtrXDBk5qy4v1BW1zRCPyizTahpxDTcZ",
    locked_token_mint_id: "3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR",
    reward_token_mint_id: { address: "locked_token_mint_id" },
    system_program_id: "11111111111111111111111111111111",
  },
  instructions: {
    admin_init: {
      accounts: [
        { id: "admin_id", signer: true },
        { id: "program_id", address: "staking_program_id" },
        { id: "locked_token_mint_id", address: "locked_token_mint_id" },
        { id: "reward_token_mint_id", address: "reward_token_mint_id" },
        { id: "system_program_id", address: "system_program_id" },
      ],
    },
  },
});

console.log(result);
