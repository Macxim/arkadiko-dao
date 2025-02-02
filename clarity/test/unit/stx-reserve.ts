import { Client, Provider, ProviderRegistry } from "@blockstack/clarity";

describe("stacks reserve test suite", () => {
  let trait: Client;
  let vaultTrait: Client;
  let daoClient: Client;
  let stxReserveClient: Client;
  let oracleClient: Client;
  let tokenClient: Client;
  let arkadikoToken: Client;
  let provider: Provider;

  before(async () => {
    provider = await ProviderRegistry.createProvider();
    trait = new Client("SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB.mock-ft-trait", "mock-ft-trait", provider);
    vaultTrait = new Client("SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB.vault-trait", "vault-trait", provider);
    oracleClient = new Client("SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB.oracle", "oracle", provider);
    tokenClient = new Client("SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB.xusd-token", "xusd-token", provider);
    arkadikoToken = new Client("SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB.arkadiko-token", "arkadiko-token", provider);
    daoClient = new Client("SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB.dao", "dao", provider);
    stxReserveClient = new Client("SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB.stx-reserve", "stx-reserve", provider);
  });

  it("should have a valid syntax", async () => {
    await trait.deployContract();
    await vaultTrait.deployContract();
    await tokenClient.deployContract();
    await oracleClient.deployContract();
    await arkadikoToken.deployContract();
    await daoClient.deployContract();
    await stxReserveClient.checkContract();
  });

  after(async () => {
    await provider.close();
  });
});
