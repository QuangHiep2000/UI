import { Contract as Web3EthContract } from 'web3-eth-contract';
import type {
  IERC20, IStakingRewards,
  CryptoWars, Characters, Weapons, RaidBasic, IRandoms,
  NFTMarket, WaxBridge, Blacksmith, Shields, CharacterRenameTagConsumables,
  WeaponRenameTagConsumables, CharacterFireTraitChangeConsumables, CharacterEarthTraitChangeConsumables,
  CharacterWaterTraitChangeConsumables, CharacterLightningTraitChangeConsumables, SecretBox, CWController,
  CareerMode
} from '../../../build/abi-interfaces';
import { StakeType } from './State';

interface TypeSafeContract<Abi> {
  methods: Abi;
}

export type Contract<Abi> = Omit<Web3EthContract, 'methods'> & TypeSafeContract<Abi>;

export type StakingContracts = Partial<Record<StakeType, {
  StakingRewards: Contract<IStakingRewards>,
  StakingToken: Contract<IERC20>
}>>;

export interface Contracts {
  xBladeToken: Contract<IERC20>;
  staking: StakingContracts;

  CryptoWars?: Contract<CryptoWars>;
  Randoms?: Contract<IRandoms>;
  Characters?: Contract<Characters>;
  Weapons?: Contract<Weapons>;
  Blacksmith?: Contract<Blacksmith>;
  RaidBasic?: Contract<RaidBasic>;
  NFTMarket?: Contract<NFTMarket>;
  WaxBridge?: Contract<WaxBridge>;
  Shields?: Contract<Shields>;
  CharacterRenameTagConsumables?: Contract<CharacterRenameTagConsumables>;
  WeaponRenameTagConsumables?: Contract<WeaponRenameTagConsumables>;
  CharacterFireTraitChangeConsumables?: Contract <CharacterFireTraitChangeConsumables>;
  CharacterEarthTraitChangeConsumables?: Contract <CharacterEarthTraitChangeConsumables>;
  CharacterWaterTraitChangeConsumables?: Contract <CharacterWaterTraitChangeConsumables>;
  CharacterLightningTraitChangeConsumables?: Contract <CharacterLightningTraitChangeConsumables>;
  SecretBox?: Contract<SecretBox>;
  CWController?: Contract<CWController>;
  CareerMode?: Contract<CareerMode>;
}
