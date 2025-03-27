export const abiBQuery2 = [
  {
    type: 'function',
    name: 'queryBVault',
    inputs: [{ name: 'vault', type: 'address', internalType: 'address' }],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct BVault',
        components: [
          { name: 'epochCount', type: 'uint256', internalType: 'uint256' },
          { name: 'pTokenTotal', type: 'uint256', internalType: 'uint256' },
          { name: 'lockedAssetTotal', type: 'uint256', internalType: 'uint256' },
          { name: 'f2', type: 'uint256', internalType: 'uint256' },
          { name: 'closed', type: 'bool', internalType: 'bool' },
          { name: 'lpLiq', type: 'uint256', internalType: 'uint256' },
          { name: 'lpBase', type: 'uint256', internalType: 'uint256' },
          { name: 'lpQuote', type: 'uint256', internalType: 'uint256' },
          { name: 'Y', type: 'uint256', internalType: 'uint256' },
          {
            name: 'current',
            type: 'tuple',
            internalType: 'struct BVaultEpoch',
            components: [
              { name: 'epochId', type: 'uint256', internalType: 'uint256' },
              { name: 'startTime', type: 'uint256', internalType: 'uint256' },
              { name: 'duration', type: 'uint256', internalType: 'uint256' },
              { name: 'redeemPool', type: 'address', internalType: 'address' },
              { name: 'yTokenTotal', type: 'uint256', internalType: 'uint256' },
              { name: 'vaultYTokenBalance', type: 'uint256', internalType: 'uint256' },
              { name: 'assetTotalSwapAmount', type: 'uint256', internalType: 'uint256' },
              { name: 'yTokenAmountForSwapYT', type: 'uint256', internalType: 'uint256' },
              { name: 'totalRedeemingBalance', type: 'uint256', internalType: 'uint256' },
              { name: 'settled', type: 'bool', internalType: 'bool' },
              { name: 'stakingBribesPool', type: 'address', internalType: 'address' },
              { name: 'adhocBribesPool', type: 'address', internalType: 'address' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'queryBVaultEpoch',
    inputs: [
      { name: 'vault', type: 'address', internalType: 'address' },
      { name: 'epochId', type: 'uint256', internalType: 'uint256' },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct BVaultEpoch',
        components: [
          { name: 'epochId', type: 'uint256', internalType: 'uint256' },
          { name: 'startTime', type: 'uint256', internalType: 'uint256' },
          { name: 'duration', type: 'uint256', internalType: 'uint256' },
          { name: 'redeemPool', type: 'address', internalType: 'address' },
          { name: 'yTokenTotal', type: 'uint256', internalType: 'uint256' },
          { name: 'vaultYTokenBalance', type: 'uint256', internalType: 'uint256' },
          { name: 'assetTotalSwapAmount', type: 'uint256', internalType: 'uint256' },
          { name: 'yTokenAmountForSwapYT', type: 'uint256', internalType: 'uint256' },
          { name: 'totalRedeemingBalance', type: 'uint256', internalType: 'uint256' },
          { name: 'settled', type: 'bool', internalType: 'bool' },
          { name: 'stakingBribesPool', type: 'address', internalType: 'address' },
          { name: 'adhocBribesPool', type: 'address', internalType: 'address' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'queryBVaultEpochUser',
    inputs: [
      { name: 'vault', type: 'address', internalType: 'address' },
      { name: 'epochId', type: 'uint256', internalType: 'uint256' },
      { name: 'user', type: 'address', internalType: 'address' },
    ],
    outputs: [
      {
        name: 'bveu',
        type: 'tuple',
        internalType: 'struct BVaultEpochUser',
        components: [
          { name: 'epochId', type: 'uint256', internalType: 'uint256' },
          {
            name: 'sBribes',
            type: 'tuple[]',
            internalType: 'struct MBribeInfo[]',
            components: [
              { name: 'epochId', type: 'uint256', internalType: 'uint256' },
              { name: 'bribeToken', type: 'address', internalType: 'address' },
              { name: 'bribeAmount', type: 'uint256', internalType: 'uint256' },
              { name: 'bribeSymbol', type: 'string', internalType: 'string' },
              { name: 'bribeTotalAmount', type: 'uint256', internalType: 'uint256' },
            ],
          },
          {
            name: 'aBribes',
            type: 'tuple[]',
            internalType: 'struct MBribeInfo[]',
            components: [
              { name: 'epochId', type: 'uint256', internalType: 'uint256' },
              { name: 'bribeToken', type: 'address', internalType: 'address' },
              { name: 'bribeAmount', type: 'uint256', internalType: 'uint256' },
              { name: 'bribeSymbol', type: 'string', internalType: 'string' },
              { name: 'bribeTotalAmount', type: 'uint256', internalType: 'uint256' },
            ],
          },
          { name: 'redeemingBalance', type: 'uint256', internalType: 'uint256' },
          { name: 'claimableAssetBalance', type: 'uint256', internalType: 'uint256' },
          { name: 'userBalanceYToken', type: 'uint256', internalType: 'uint256' },
          { name: 'userBalanceYTokenSyntyetic', type: 'uint256', internalType: 'uint256' },
          { name: 'userClaimableYTokenSyntyetic', type: 'uint256', internalType: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
] as const

export const codeBQuery2 =
  '0x6080604052348015600e575f5ffd5b506123fd8061001c5f395ff3fe608060405234801561000f575f5ffd5b506004361061003f575f3560e01c806314e8210514610043578063413186e61461007357806376deac97146100a3575b5f5ffd5b61005d6004803603810190610058919061173c565b6100d3565b60405161006a9190611966565b60405180910390f35b61008d600480360381019061008891906119aa565b6100eb565b60405161009a9190611c4c565b60405180910390f35b6100bd60048036038101906100b89190611c6c565b610107565b6040516100ca9190611d9e565b60405180910390f35b6100db611566565b6100e482610121565b9050919050565b6100f36115b8565b6100fe8484846105cd565b90509392505050565b61010f6115f7565b61011983836110c7565b905092915050565b610129611566565b5f8290505f8173ffffffffffffffffffffffffffffffffffffffff166358a06f076040518163ffffffff1660e01b8152600401602060405180830381865afa158015610177573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061019b9190611dcc565b90508173ffffffffffffffffffffffffffffffffffffffff1663cfc42a666040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101e6573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061020a9190611e0b565b835f0181815250508073ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561025b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061027f9190611e0b565b8360200181815250508173ffffffffffffffffffffffffffffffffffffffff1663eaee84256040518163ffffffff1660e01b81526004016102bf90611e5c565b602060405180830381865afa1580156102da573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102fe9190611e0b565b8360600181815250505f5f8573ffffffffffffffffffffffffffffffffffffffff166040516024016040516020818303038152906040527f45b3fe42000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040516103b09190611eb7565b5f60405180830381855afa9150503d805f81146103e8576040519150601f19603f3d011682016040523d82523d5f602084013e6103ed565b606091505b50915091508115610417578080602001905181019061040c9190611e0b565b856101000181815250505b610420866114ee565b85608001901515908115158152505084608001511561052b578373ffffffffffffffffffffffffffffffffffffffff16631083f7616040518163ffffffff1660e01b8152600401602060405180830381865afa158015610482573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104a69190611dcc565b73ffffffffffffffffffffffffffffffffffffffff166370a08231876040518263ffffffff1660e01b81526004016104de9190611edc565b602060405180830381865afa1580156104f9573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061051d9190611e0b565b8560400181815250506105a2565b8373ffffffffffffffffffffffffffffffffffffffff1663c66f24556040518163ffffffff1660e01b8152600401602060405180830381865afa158015610574573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105989190611e0b565b8560400181815250505b5f855f015111156105c4576105ba86865f01516110c7565b8561012001819052505b50505050919050565b6105d56115b8565b5f84905083825f0181815250505f8173ffffffffffffffffffffffffffffffffffffffff166367c0b220866040518263ffffffff1660e01b815260040161061c9190611f04565b60c060405180830381865afa158015610637573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061065b9190612036565b90505f816080015190505f8173ffffffffffffffffffffffffffffffffffffffff16633376a2426040518163ffffffff1660e01b81526004015f60405180830381865afa1580156106ae573d5f5f3e3d5ffd5b505050506040513d5f823e3d601f19601f820116820180604052508101906106d69190612129565b9050805167ffffffffffffffff8111156106f3576106f2611f21565b5b60405190808252806020026020018201604052801561072c57816020015b610719611690565b8152602001906001900390816107115790505b5085602001819052505f8360a0015190505f8173ffffffffffffffffffffffffffffffffffffffff16633376a2426040518163ffffffff1660e01b81526004015f60405180830381865afa158015610786573d5f5f3e3d5ffd5b505050506040513d5f823e3d601f19601f820116820180604052508101906107ae9190612129565b9050805167ffffffffffffffff8111156107cb576107ca611f21565b5b60405190808252806020026020018201604052801561080457816020015b6107f1611690565b8152602001906001900390816107e95790505b5087604001819052505f5f90505b8351811015610aa3575f84828151811061082f5761082e612170565b5b602002602001015190508a8960200151838151811061085157610850612170565b5b60200260200101515f018181525050808960200151838151811061087857610877612170565b5b60200260200101516020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508573ffffffffffffffffffffffffffffffffffffffff1663211dc32d8b836040518363ffffffff1660e01b81526004016108f192919061219d565b602060405180830381865afa15801561090c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109309190611e0b565b8960200151838151811061094757610946612170565b5b602002602001015160400181815250505f8190508073ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b81526004015f60405180830381865afa1580156109a3573d5f5f3e3d5ffd5b505050506040513d5f823e3d601f19601f820116820180604052508101906109cb9190612266565b8a6020015184815181106109e2576109e1612170565b5b6020026020010151606001819052508073ffffffffffffffffffffffffffffffffffffffff166370a0823189608001516040518263ffffffff1660e01b8152600401610a2e9190611edc565b602060405180830381865afa158015610a49573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a6d9190611e0b565b8a602001518481518110610a8457610a83612170565b5b6020026020010151608001818152505050508080600101915050610812565b505f5f90505b8151811015610d3a575f828281518110610ac657610ac5612170565b5b602002602001015190508a89604001518381518110610ae857610ae7612170565b5b60200260200101515f0181815250508089604001518381518110610b0f57610b0e612170565b5b60200260200101516020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508373ffffffffffffffffffffffffffffffffffffffff1663211dc32d8b836040518363ffffffff1660e01b8152600401610b8892919061219d565b602060405180830381865afa158015610ba3573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bc79190611e0b565b89604001518381518110610bde57610bdd612170565b5b602002602001015160400181815250505f8190508073ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b81526004015f60405180830381865afa158015610c3a573d5f5f3e3d5ffd5b505050506040513d5f823e3d601f19601f82011682018060405250810190610c629190612266565b8a604001518481518110610c7957610c78612170565b5b6020026020010151606001819052508073ffffffffffffffffffffffffffffffffffffffff166370a082318960a001516040518263ffffffff1660e01b8152600401610cc59190611edc565b602060405180830381865afa158015610ce0573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d049190611e0b565b8a604001518481518110610d1b57610d1a612170565b5b6020026020010151608001818152505050508080600101915050610aa9565b505f8673ffffffffffffffffffffffffffffffffffffffff166367c0b2208b6040518263ffffffff1660e01b8152600401610d759190611f04565b60c060405180830381865afa158015610d90573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610db49190612036565b6060015190508073ffffffffffffffffffffffffffffffffffffffff16638f7758396040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e03573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610e2791906122d7565b610eb1578073ffffffffffffffffffffffffffffffffffffffff166379e7bcdb8a6040518263ffffffff1660e01b8152600401610e649190611edc565b602060405180830381865afa158015610e7f573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ea39190611e0b565b886060018181525050610f33565b8073ffffffffffffffffffffffffffffffffffffffff1663b3fc6c698a6040518263ffffffff1660e01b8152600401610eea9190611edc565b602060405180830381865afa158015610f05573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f299190611e0b565b8860800181815250505b8673ffffffffffffffffffffffffffffffffffffffff16633f9bb2e98b8b6040518363ffffffff1660e01b8152600401610f6e929190612302565b602060405180830381865afa158015610f89573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fad9190611e0b565b8860a00181815250508273ffffffffffffffffffffffffffffffffffffffff166370a082318a6040518263ffffffff1660e01b8152600401610fef9190611edc565b602060405180830381865afa15801561100a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061102e9190611e0b565b8860c00181815250508273ffffffffffffffffffffffffffffffffffffffff16637810eb9a8a6040518263ffffffff1660e01b81526004016110709190611edc565b6040805180830381865afa15801561108a573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110ae9190612329565b90508860e0018181525050505050505050509392505050565b6110cf6115f7565b5f8390505f8173ffffffffffffffffffffffffffffffffffffffff166367c0b220856040518263ffffffff1660e01b815260040161110d9190611f04565b60c060405180830381865afa158015611128573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061114c9190612036565b9050805f0151835f018181525050806020015183602001818152505080604001518360400181815250508060600151836060019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff16631fb19991856040518263ffffffff1660e01b81526004016111eb9190611f04565b602060405180830381865afa158015611206573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061122a9190611e0b565b8360800181815250508173ffffffffffffffffffffffffffffffffffffffff16633f9bb2e985876040518363ffffffff1660e01b815260040161126e929190612302565b602060405180830381865afa158015611289573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112ad9190611e0b565b8360a00181815250508173ffffffffffffffffffffffffffffffffffffffff1663b63c3ae7856040518263ffffffff1660e01b81526004016112ef9190611f04565b602060405180830381865afa15801561130a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061132e9190611e0b565b8360c0018181525050806080015183610140019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508060a0015183610160019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050806060015173ffffffffffffffffffffffffffffffffffffffff16638f7758396040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113fe573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061142291906122d7565b836101200190151590811515815250508261012001516114b857806060015173ffffffffffffffffffffffffffffffffffffffff1663494fd0396040518163ffffffff1660e01b8152600401602060405180830381865afa158015611489573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114ad9190611e0b565b836101000181815250505b8260a00151836080015111156114e6578260a0015183608001516114dc9190612394565b8360e00181815250505b505092915050565b5f8173ffffffffffffffffffffffffffffffffffffffff1663597e1fb56040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561155757506040513d601f19601f8201168201806040525081019061155491906122d7565b60015b1561156157809150505b919050565b6040518061014001604052805f81526020015f81526020015f81526020015f81526020015f151581526020015f81526020015f81526020015f81526020015f81526020016115b26115f7565b81525090565b6040518061010001604052805f815260200160608152602001606081526020015f81526020015f81526020015f81526020015f81526020015f81525090565b6040518061018001604052805f81526020015f81526020015f81526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f81526020015f81526020015f81526020015f151581526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681525090565b6040518060a001604052805f81526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f8152602001606081526020015f81525090565b5f604051905090565b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61170b826116e2565b9050919050565b61171b81611701565b8114611725575f5ffd5b50565b5f8135905061173681611712565b92915050565b5f60208284031215611751576117506116da565b5b5f61175e84828501611728565b91505092915050565b5f819050919050565b61177981611767565b82525050565b5f8115159050919050565b6117938161177f565b82525050565b6117a281611701565b82525050565b61018082015f8201516117bd5f850182611770565b5060208201516117d06020850182611770565b5060408201516117e36040850182611770565b5060608201516117f66060850182611799565b5060808201516118096080850182611770565b5060a082015161181c60a0850182611770565b5060c082015161182f60c0850182611770565b5060e082015161184260e0850182611770565b50610100820151611857610100850182611770565b5061012082015161186c61012085018261178a565b50610140820151611881610140850182611799565b50610160820151611896610160850182611799565b50505050565b6102a082015f8201516118b15f850182611770565b5060208201516118c46020850182611770565b5060408201516118d76040850182611770565b5060608201516118ea6060850182611770565b5060808201516118fd608085018261178a565b5060a082015161191060a0850182611770565b5060c082015161192360c0850182611770565b5060e082015161193660e0850182611770565b5061010082015161194b610100850182611770565b506101208201516119606101208501826117a8565b50505050565b5f6102a08201905061197a5f83018461189c565b92915050565b61198981611767565b8114611993575f5ffd5b50565b5f813590506119a481611980565b92915050565b5f5f5f606084860312156119c1576119c06116da565b5b5f6119ce86828701611728565b93505060206119df86828701611996565b92505060406119f086828701611728565b9150509250925092565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f611a6582611a23565b611a6f8185611a2d565b9350611a7f818560208601611a3d565b611a8881611a4b565b840191505092915050565b5f60a083015f830151611aa85f860182611770565b506020830151611abb6020860182611799565b506040830151611ace6040860182611770565b5060608301518482036060860152611ae68282611a5b565b9150506080830151611afb6080860182611770565b508091505092915050565b5f611b118383611a93565b905092915050565b5f602082019050919050565b5f611b2f826119fa565b611b398185611a04565b935083602082028501611b4b85611a14565b805f5b85811015611b865784840389528151611b678582611b06565b9450611b7283611b19565b925060208a01995050600181019050611b4e565b50829750879550505050505092915050565b5f61010083015f830151611bae5f860182611770565b5060208301518482036020860152611bc68282611b25565b91505060408301518482036040860152611be08282611b25565b9150506060830151611bf56060860182611770565b506080830151611c086080860182611770565b5060a0830151611c1b60a0860182611770565b5060c0830151611c2e60c0860182611770565b5060e0830151611c4160e0860182611770565b508091505092915050565b5f6020820190508181035f830152611c648184611b98565b905092915050565b5f5f60408385031215611c8257611c816116da565b5b5f611c8f85828601611728565b9250506020611ca085828601611996565b9150509250929050565b61018082015f820151611cbf5f850182611770565b506020820151611cd26020850182611770565b506040820151611ce56040850182611770565b506060820151611cf86060850182611799565b506080820151611d0b6080850182611770565b5060a0820151611d1e60a0850182611770565b5060c0820151611d3160c0850182611770565b5060e0820151611d4460e0850182611770565b50610100820151611d59610100850182611770565b50610120820151611d6e61012085018261178a565b50610140820151611d83610140850182611799565b50610160820151611d98610160850182611799565b50505050565b5f61018082019050611db25f830184611caa565b92915050565b5f81519050611dc681611712565b92915050565b5f60208284031215611de157611de06116da565b5b5f611dee84828501611db8565b91505092915050565b5f81519050611e0581611980565b92915050565b5f60208284031215611e2057611e1f6116da565b5b5f611e2d84828501611df7565b91505092915050565b7f6632000000000000000000000000000000000000000000000000000000000000815250565b5f602082019050611e6e5f8301611e36565b919050565b5f81519050919050565b5f81905092915050565b5f611e9182611e73565b611e9b8185611e7d565b9350611eab818560208601611a3d565b80840191505092915050565b5f611ec28284611e87565b915081905092915050565b611ed681611701565b82525050565b5f602082019050611eef5f830184611ecd565b92915050565b611efe81611767565b82525050565b5f602082019050611f175f830184611ef5565b92915050565b5f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b611f5782611a4b565b810181811067ffffffffffffffff82111715611f7657611f75611f21565b5b80604052505050565b5f611f886116d1565b9050611f948282611f4e565b919050565b5f60c08284031215611fae57611fad611f1d565b5b611fb860c0611f7f565b90505f611fc784828501611df7565b5f830152506020611fda84828501611df7565b6020830152506040611fee84828501611df7565b604083015250606061200284828501611db8565b606083015250608061201684828501611db8565b60808301525060a061202a84828501611db8565b60a08301525092915050565b5f60c0828403121561204b5761204a6116da565b5b5f61205884828501611f99565b91505092915050565b5f5ffd5b5f67ffffffffffffffff82111561207f5761207e611f21565b5b602082029050602081019050919050565b5f5ffd5b5f6120a66120a184612065565b611f7f565b905080838252602082019050602084028301858111156120c9576120c8612090565b5b835b818110156120f257806120de8882611db8565b8452602084019350506020810190506120cb565b5050509392505050565b5f82601f8301126121105761210f612061565b5b8151612120848260208601612094565b91505092915050565b5f6020828403121561213e5761213d6116da565b5b5f82015167ffffffffffffffff81111561215b5761215a6116de565b5b612167848285016120fc565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f6040820190506121b05f830185611ecd565b6121bd6020830184611ecd565b9392505050565b5f5ffd5b5f67ffffffffffffffff8211156121e2576121e1611f21565b5b6121eb82611a4b565b9050602081019050919050565b5f61220a612205846121c8565b611f7f565b905082815260208101848484011115612226576122256121c4565b5b612231848285611a3d565b509392505050565b5f82601f83011261224d5761224c612061565b5b815161225d8482602086016121f8565b91505092915050565b5f6020828403121561227b5761227a6116da565b5b5f82015167ffffffffffffffff811115612298576122976116de565b5b6122a484828501612239565b91505092915050565b6122b68161177f565b81146122c0575f5ffd5b50565b5f815190506122d1816122ad565b92915050565b5f602082840312156122ec576122eb6116da565b5b5f6122f9848285016122c3565b91505092915050565b5f6040820190506123155f830185611ef5565b6123226020830184611ecd565b9392505050565b5f5f6040838503121561233f5761233e6116da565b5b5f61234c85828601611df7565b925050602061235d85828601611df7565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61239e82611767565b91506123a983611767565b92508282039050818111156123c1576123c0612367565b5b9291505056fea2646970667358221220bf362a69464b034ef335e1ff43007fb5dbf84faa8dd5a1a049c1331b0ae6714c64736f6c634300081d0033'
