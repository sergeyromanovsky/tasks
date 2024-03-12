export type AddressesKeys =
  | "staking_program_id"
  | "system_program_id"
  | "locked_token_mint_id"
  | "reward_token_mint_id";

export type Account = { id: string; signer?: boolean; address?: AddressesKeys };

export type Addresses = Record<string, string | { address: AddressesKeys }>;

export type Instructions = Record<
  string,
  {
    accounts: Account[];
  }
>;

export type InstructionsInput = {
  instructions: Instructions;
  addresses: Addresses;
};
