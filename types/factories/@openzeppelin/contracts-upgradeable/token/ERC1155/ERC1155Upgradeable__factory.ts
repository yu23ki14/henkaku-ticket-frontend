/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC1155Upgradeable,
  ERC1155UpgradeableInterface,
} from "../../../../../@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611766806100206000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f41461010a578063a22cb4651461012a578063e985e9c51461013d578063f242432a1461017957600080fd5b8062fdd58e1461008c57806301ffc9a7146100b25780630e89341c146100d55780632eb2c2d6146100f5575b600080fd5b61009f61009a366004610f97565b61018c565b6040519081526020015b60405180910390f35b6100c56100c0366004610ff2565b61023a565b60405190151581526020016100a9565b6100e86100e3366004611016565b61031d565b6040516100a99190611075565b6101086101033660046111ed565b6103b1565b005b61011d610118366004611297565b610453565b6040516100a9919061139d565b6101086101383660046113b0565b610591565b6100c561014b3660046113ec565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205460ff1690565b61010861018736600461141f565b6105a0565b60006001600160a01b03831661020f5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201527f616c6964206f776e65720000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060008181526065602090815260408083206001600160a01b03861684529091529020545b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a260000000000000000000000000000000000000000000000000000000014806102cd57507fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c00000000000000000000000000000000000000000000000000000000145b8061023457507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610234565b60606067805461032c90611484565b80601f016020809104026020016040519081016040528092919081815260200182805461035890611484565b80156103a55780601f1061037a576101008083540402835291602001916103a5565b820191906000526020600020905b81548152906001019060200180831161038857829003601f168201915b50505050509050919050565b6001600160a01b0385163314806103cd57506103cd853361014b565b61043f5760405162461bcd60e51b815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f7665640000000000000000000000000000000000006064820152608401610206565b61044c858585858561063b565b5050505050565b606081518351146104cc5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d6174636800000000000000000000000000000000000000000000006064820152608401610206565b6000835167ffffffffffffffff8111156104e8576104e8611088565b604051908082528060200260200182016040528015610511578160200160208202803683370190505b50905060005b84518110156105895761055c858281518110610535576105356114d7565b602002602001015185838151811061054f5761054f6114d7565b602002602001015161018c565b82828151811061056e5761056e6114d7565b602090810291909101015261058281611535565b9050610517565b509392505050565b61059c3383836108dc565b5050565b6001600160a01b0385163314806105bc57506105bc853361014b565b61062e5760405162461bcd60e51b815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f7665640000000000000000000000000000000000006064820152608401610206565b61044c85858585856109ee565b81518351146106b25760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d617463680000000000000000000000000000000000000000000000006064820152608401610206565b6001600160a01b03841661072e5760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610206565b3360005b845181101561086e57600085828151811061074f5761074f6114d7565b60200260200101519050600085838151811061076d5761076d6114d7565b60209081029190910181015160008481526065835260408082206001600160a01b038e1683529093529190912054909150818110156108145760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e73666572000000000000000000000000000000000000000000006064820152608401610206565b60008381526065602090815260408083206001600160a01b038e8116855292528083208585039055908b1682528120805484929061085390849061156d565b925050819055505050508061086790611535565b9050610732565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516108be929190611580565b60405180910390a46108d4818787878787610bc8565b505050505050565b816001600160a01b0316836001600160a01b0316036109635760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c6600000000000000000000000000000000000000000000006064820152608401610206565b6001600160a01b0383811660008181526066602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b038416610a6a5760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610206565b336000610a7685610dd5565b90506000610a8385610dd5565b905060008681526065602090815260408083206001600160a01b038c16845290915290205485811015610b1e5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e73666572000000000000000000000000000000000000000000006064820152608401610206565b60008781526065602090815260408083206001600160a01b038d8116855292528083208985039055908a16825281208054889290610b5d90849061156d565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610bbd848a8a8a8a8a610e20565b505050505050505050565b6001600160a01b0384163b156108d4576040517fbc197c810000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063bc197c8190610c2590899089908890889088906004016115ae565b6020604051808303816000875af1925050508015610c60575060408051601f3d908101601f19168201909252610c5d9181019061160c565b60015b610d1557610c6c611629565b806308c379a003610ca55750610c80611645565b80610c8b5750610ca7565b8060405162461bcd60e51b81526004016102069190611075565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e2d4552433131353560448201527f526563656976657220696d706c656d656e7465720000000000000000000000006064820152608401610206565b7fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c810000000000000000000000000000000000000000000000000000000014610dcc5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e730000000000000000000000000000000000000000000000006064820152608401610206565b50505050505050565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610e0f57610e0f6114d7565b602090810291909101015292915050565b6001600160a01b0384163b156108d4576040517ff23a6e610000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063f23a6e6190610e7d90899089908890889088906004016116ed565b6020604051808303816000875af1925050508015610eb8575060408051601f3d908101601f19168201909252610eb59181019061160c565b60015b610ec457610c6c611629565b7fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e610000000000000000000000000000000000000000000000000000000014610dcc5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e730000000000000000000000000000000000000000000000006064820152608401610206565b80356001600160a01b0381168114610f9257600080fd5b919050565b60008060408385031215610faa57600080fd5b610fb383610f7b565b946020939093013593505050565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610fef57600080fd5b50565b60006020828403121561100457600080fd5b813561100f81610fc1565b9392505050565b60006020828403121561102857600080fd5b5035919050565b6000815180845260005b8181101561105557602081850181015186830182015201611039565b506000602082860101526020601f19601f83011685010191505092915050565b60208152600061100f602083018461102f565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b601f19601f830116810181811067ffffffffffffffff821117156110dd576110dd611088565b6040525050565b600067ffffffffffffffff8211156110fe576110fe611088565b5060051b60200190565b600082601f83011261111957600080fd5b81356020611126826110e4565b60405161113382826110b7565b83815260059390931b850182019282810191508684111561115357600080fd5b8286015b8481101561116e5780358352918301918301611157565b509695505050505050565b600082601f83011261118a57600080fd5b813567ffffffffffffffff8111156111a4576111a4611088565b6040516111bb6020601f19601f85011601826110b7565b8181528460208386010111156111d057600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a0868803121561120557600080fd5b61120e86610f7b565b945061121c60208701610f7b565b9350604086013567ffffffffffffffff8082111561123957600080fd5b61124589838a01611108565b9450606088013591508082111561125b57600080fd5b61126789838a01611108565b9350608088013591508082111561127d57600080fd5b5061128a88828901611179565b9150509295509295909350565b600080604083850312156112aa57600080fd5b823567ffffffffffffffff808211156112c257600080fd5b818501915085601f8301126112d657600080fd5b813560206112e3826110e4565b6040516112f082826110b7565b83815260059390931b850182019282810191508984111561131057600080fd5b948201945b838610156113355761132686610f7b565b82529482019490820190611315565b9650508601359250508082111561134b57600080fd5b5061135885828601611108565b9150509250929050565b600081518084526020808501945080840160005b8381101561139257815187529582019590820190600101611376565b509495945050505050565b60208152600061100f6020830184611362565b600080604083850312156113c357600080fd5b6113cc83610f7b565b9150602083013580151581146113e157600080fd5b809150509250929050565b600080604083850312156113ff57600080fd5b61140883610f7b565b915061141660208401610f7b565b90509250929050565b600080600080600060a0868803121561143757600080fd5b61144086610f7b565b945061144e60208701610f7b565b93506040860135925060608601359150608086013567ffffffffffffffff81111561147857600080fd5b61128a88828901611179565b600181811c9082168061149857607f821691505b6020821081036114d1577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361156657611566611506565b5060010190565b8082018082111561023457610234611506565b6040815260006115936040830185611362565b82810360208401526115a58185611362565b95945050505050565b60006001600160a01b03808816835280871660208401525060a060408301526115da60a0830186611362565b82810360608401526115ec8186611362565b90508281036080840152611600818561102f565b98975050505050505050565b60006020828403121561161e57600080fd5b815161100f81610fc1565b600060033d11156116425760046000803e5060005160e01c5b90565b600060443d10156116535790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc803d016004833e81513d67ffffffffffffffff81602484011181841117156116a157505050505090565b82850191508151818111156116b95750505050505090565b843d87010160208285010111156116d35750505050505090565b6116e2602082860101876110b7565b509095945050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a0608083015261172560a083018461102f565b97965050505050505056fea2646970667358221220138e461239e273d1d84fb13e8a4bc3124e3ba554748f9199c0c0073610eb221064736f6c63430008110033";

type ERC1155UpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155UpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155Upgradeable__factory extends ContractFactory {
  constructor(...args: ERC1155UpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC1155Upgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC1155Upgradeable {
    return super.attach(address) as ERC1155Upgradeable;
  }
  override connect(signer: Signer): ERC1155Upgradeable__factory {
    return super.connect(signer) as ERC1155Upgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155UpgradeableInterface {
    return new utils.Interface(_abi) as ERC1155UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Upgradeable;
  }
}