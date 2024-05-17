import {
  BuyLotClaimsPage,
  BuyLotRequest,
  GetBuyLotClaimsApiArg,
  GetBuyedLotsApiArg,
  GetListLotClaimsApiArg,
  GetLotsForMarketPlaceApiArg,
  GetSellingLotsApiArg,
  GetTransferClaimsApiArg,
  ListLotClaimsPage,
  ListLotRequest,
  ListLotCreateRequestAdmin,
  LotsPage,
  TransferClaim,
  TransferClaimsPage,
  TransferRequest,
  ListLotUpdateRequestAdmin,
  GetLotsApiArg,
} from './../../../types/api';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ClaimStatus, LotStatus, Role } from '@/types/common';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useCallback } from 'react';
import { BuyLotClaim, ListLotClaim, Lot } from '@/types/api';
import { useAuth } from '../authSlice';
import { deserializeStateFromLocalStorage } from '../helpers';
import { MARKET_STATE_LOCAL_STORAGE_KEY } from './constants';

export type MarketStateType = {
  lots: Lot[];
  buyLotClaims: BuyLotClaim[];
  listLotClaims: ListLotClaim[];
  transferClaims: TransferClaim[];
  balances: {
    userId: string;
    balance: number;
  }[];
};

const defaultInitialState: MarketStateType = {
  balances: [],
  buyLotClaims: [],
  listLotClaims: [],
  lots: [],
  transferClaims: [],
};

const deserializedState = deserializeStateFromLocalStorage<MarketStateType>(
  MARKET_STATE_LOCAL_STORAGE_KEY
);

export const marketSlice = createSlice({
  name: 'market',
  initialState: defaultInitialState,
  reducers: {
    createBuyLotClaim: (
      state,
      action: PayloadAction<{ claim: BuyLotClaim; userId: string }>
    ) => {
      const buyer = state.balances.find(
        (user) => user.userId === action.payload.userId
      );
      if (buyer) {
        buyer.balance -= action.payload.claim.lot.price;
        state.buyLotClaims.push(action.payload.claim);
      }
    },
    createListLotClaim: (state, action: PayloadAction<ListLotClaim>) => {
      state.listLotClaims.push(action.payload);
      state.lots.push(action.payload.lot);
    },
    createTransferLotClaim: (state, action: PayloadAction<TransferClaim>) => {
      const sender = state.balances.find(
        (user) => user.userId === action.payload.sender.id
      );
      if (sender) {
        sender.balance -= action.payload.sum;
        state.transferClaims.push(action.payload);
      }
    },
    withdrawLot: (state, action: PayloadAction<{ id: string }>) => {
      const lotToWithDraw = state.lots.find(
        (lot) => lot.id === action.payload.id
      );
      if (lotToWithDraw) {
        lotToWithDraw.status = LotStatus.Withdrawn;
      }
    },
    approveBuyLotClaim: (state, action: PayloadAction<{ id: string }>) => {
      const claimToApprove = state.buyLotClaims.find(
        (claim) => claim.id === action.payload.id
      );
      if (claimToApprove) {
        claimToApprove.status = ClaimStatus.Approved;
      }
    },
    rejectBuyLotClaim: (state, action: PayloadAction<{ id: string }>) => {
      const claimToReject = state.buyLotClaims.find(
        (claim) => claim.id === action.payload.id
      );
      if (claimToReject) {
        claimToReject.status = ClaimStatus.Declined;
        const buyer = state.balances.find(
          (user) => user.userId === claimToReject.buyer.id
        );
        if (buyer) {
          buyer.balance += claimToReject.lot.price;
        }
      }
    },
    approveListLotClaim: (state, action: PayloadAction<{ id: string }>) => {
      const claimToApprove = state.listLotClaims.find(
        (claim) => claim.id === action.payload.id
      );
      if (claimToApprove) {
        claimToApprove.status = ClaimStatus.Approved;
        const lot = state.lots.find((lot) => lot.id === claimToApprove.lot.id);
        if (lot) {
          lot.status = LotStatus.OnSale;
          lot.listingDate = new Date();
        }
      }
    },
    rejectListLotClaim: (state, action: PayloadAction<{ id: string }>) => {
      const claimToReject = state.listLotClaims.find(
        (claim) => claim.id === action.payload.id
      );
      if (claimToReject) {
        claimToReject.status = ClaimStatus.Declined;
      }
    },
    approveTransferClaim: (state, action: PayloadAction<{ id: string }>) => {
      const claimToApprove = state.transferClaims.find(
        (claim) => claim.id === action.payload.id
      );
      if (claimToApprove) {
        claimToApprove.status = ClaimStatus.Approved;
        const receiver = state.balances.find(
          (user) => user.userId === claimToApprove.receiver.id
        );
        if (receiver) {
          receiver.balance += claimToApprove.sum;
        }
      }
    },
    rejectTransferClaim: (state, action: PayloadAction<{ id: string }>) => {
      const claimToReject = state.transferClaims.find(
        (claim) => claim.id === action.payload.id
      );
      if (claimToReject) {
        claimToReject.status = ClaimStatus.Declined;
        const sender = state.balances.find(
          (user) => user.userId === claimToReject.sender.id
        );
        if (sender) {
          sender.balance += claimToReject.sum;
        }
      }
    },
    placeLotAdmin: (state, action: PayloadAction<Lot>) => {
      state.lots.push(action.payload);
    },
    updateLotAdmin: (
      state,
      action: PayloadAction<ListLotUpdateRequestAdmin>
    ) => {
      const lot = state.lots.find((lot) => lot.id === action.payload.id);
      if (!lot) return;
      lot.title = action.payload.title;
      lot.description = action.payload.description;
      lot.price = action.payload.price;
      lot.terms = action.payload.terms;
    },
  },
});

export const {
  approveBuyLotClaim,
  approveListLotClaim,
  approveTransferClaim,
  createBuyLotClaim,
  createListLotClaim,
  createTransferLotClaim,
  placeLotAdmin,
  rejectBuyLotClaim,
  rejectListLotClaim,
  rejectTransferClaim,
  withdrawLot,
  updateLotAdmin,
} = marketSlice.actions;

export default marketSlice.reducer;

export function useMarketplace({
  lotNumber,
  lotTitle,
  page = 1,
  performerId,
  priceFrom,
  priceTo,
  size = 10,
}: GetLotsForMarketPlaceApiArg): LotsPage {
  const lots = useSelector((state: RootState) => state.market.lots);

  const filteredLots = lots.filter((lot) => {
    return (
      (!lotNumber || lot.number === lotNumber) &&
      (!lotTitle || lot.title.includes(lotTitle)) &&
      (!performerId || lot.performer.id === performerId) &&
      (!priceFrom || lot.price >= priceFrom) &&
      (!priceTo || lot.price <= priceTo) &&
      lot.status === LotStatus.OnSale
    );
  });

  return {
    page: {
      totalElements: filteredLots.length,
      totalPages: Math.ceil(filteredLots.length / size),
    },
    lots: filteredLots.slice((page - 1) * size, page * size),
  };
}

export function useBuyedLots({
  lotNumber,
  lotTitle,
  page = 1,
  performerId,
  priceFrom,
  priceTo,
  size = 10,
}: GetBuyedLotsApiArg): LotsPage {
  const [authState] = useAuth();
  const userClaims = useSelector(
    (state: RootState) => state.market.buyLotClaims
  );

  const lots = userClaims
    .filter(
      (claim) =>
        claim.buyer.id === authState.userId &&
        claim.status === ClaimStatus.Approved
    )
    .map((claim) => claim.lot);

  const filteredLots = lots.filter((lot) => {
    return (
      (!lotNumber || lot.number === lotNumber) &&
      (!lotTitle || lot.title.includes(lotTitle)) &&
      (!performerId || lot.performer.id === performerId) &&
      (!priceFrom || lot.price >= priceFrom) &&
      (!priceTo || lot.price <= priceTo)
    );
  });

  return {
    page: {
      totalElements: filteredLots.length,
      totalPages: Math.ceil(filteredLots.length / size),
    },
    lots: filteredLots.slice((page - 1) * size, page * size),
  };
}

export function useSellingLots({
  lotNumber,
  lotTitle,
  page = 1,
  performerId,
  priceFrom,
  priceTo,
  status,
  size = 10,
}: GetSellingLotsApiArg): LotsPage {
  const [authState] = useAuth();
  const lots = useSelector((state: RootState) => state.market.lots);

  const lotsInSale = lots.filter(
    (lot) =>
      lot.performer.id === authState.userId && lot.status === LotStatus.OnSale
  );

  const filteredLots = lotsInSale.filter((lot) => {
    return (
      (!lotNumber || lot.number === lotNumber) &&
      (!lotTitle || lot.title.includes(lotTitle)) &&
      (!performerId || lot.performer.id === performerId) &&
      (!priceFrom || lot.price >= priceFrom) &&
      (!priceTo || lot.price <= priceTo) &&
      (!status || lot.status === status)
    );
  });

  return {
    page: {
      totalElements: filteredLots.length,
      totalPages: Math.ceil(filteredLots.length / size),
    },
    lots: filteredLots.slice((page - 1) * size, page * size),
  };
}

export function useBuyLotClaims({
  lotNumber,
  buyerId,
  sellerId,
  dateFrom,
  dateTo,
  page = 1,
  status,
  size = 10,
}: GetBuyLotClaimsApiArg): BuyLotClaimsPage {
  const claims = useSelector((state: RootState) => state.market.buyLotClaims);

  const dateFromDate = dateFrom ? new Date(dateFrom) : null;
  const dateToDate = dateTo ? new Date(dateTo) : null;

  const filteredClaims = claims.filter((claim) => {
    return (
      (!lotNumber || claim.lot.number === lotNumber) &&
      (!buyerId || claim.buyer.id === buyerId) &&
      (!sellerId || claim.lot.performer.id === sellerId) &&
      (!dateFromDate || claim.date >= dateFromDate) &&
      (!dateToDate || claim.date <= dateToDate) &&
      (!status || claim.status === status)
    );
  });

  return {
    page: {
      totalElements: filteredClaims.length,
      totalPages: Math.ceil(filteredClaims.length / size),
    },
    claims: filteredClaims.slice((page - 1) * size, page * size),
  };
}

export function useListLotClaims({
  lotNumber,
  lotTitle,
  dateFrom,
  dateTo,
  page = 1,
  status,
  size = 10,
}: GetListLotClaimsApiArg): ListLotClaimsPage {
  const claims = useSelector((state: RootState) => state.market.listLotClaims);

  const dateFromDate = dateFrom ? new Date(dateFrom) : null;
  const dateToDate = dateTo ? new Date(dateTo) : null;

  const filteredClaims = claims.filter((claim) => {
    return (
      (!lotNumber || claim.lot.number === lotNumber) &&
      (!lotTitle || claim.lot.title.includes(lotTitle)) &&
      (!dateFromDate || claim.date >= dateFromDate) &&
      (!dateToDate || claim.date <= dateToDate) &&
      (!status || claim.status === status)
    );
  });

  return {
    page: {
      totalElements: filteredClaims.length,
      totalPages: Math.ceil(filteredClaims.length / size),
    },
    claims: filteredClaims.slice((page - 1) * size, page * size),
  };
}

export function useTransferClaims({
  claimStatus,
  receiverId,
  senderId,
  dateFrom,
  dateTo,
  page = 1,
  size = 10,
}: GetTransferClaimsApiArg): TransferClaimsPage {
  const claims = useSelector((state: RootState) => state.market.transferClaims);

  const dateFromDate = dateFrom ? new Date(dateFrom) : null;
  const dateToDate = dateTo ? new Date(dateTo) : null;

  const filteredClaims = claims.filter((claim) => {
    return (
      (!claimStatus || claim.status === claimStatus) &&
      (!receiverId || claim.receiver.id === receiverId) &&
      (!senderId || claim.sender.id === senderId) &&
      (!dateFromDate || claim.date >= dateFromDate) &&
      (!dateToDate || claim.date <= dateToDate)
    );
  });

  return {
    page: {
      totalElements: filteredClaims.length,
      totalPages: Math.ceil(filteredClaims.length / size),
    },
    claims: filteredClaims.slice((page - 1) * size, page * size),
  };
}

export function useTransferClaimsLearner({
  claimStatus,
  receiverId,
  senderId,
  dateFrom,
  dateTo,
  page = 1,
  size = 10,
}: GetTransferClaimsApiArg): TransferClaimsPage {
  const [authState] = useAuth();
  const claims = useSelector((state: RootState) => state.market.transferClaims);

  const dateFromDate = dateFrom ? new Date(dateFrom) : null;
  const dateToDate = dateTo ? new Date(dateTo) : null;

  const myClaims = claims.filter(
    (claim) =>
      claim.sender.id === authState.userId ||
      claim.receiver.id === authState.userId
  );

  const filteredClaims = myClaims.filter((claim) => {
    return (
      (!claimStatus || claim.status === claimStatus) &&
      (!receiverId || claim.receiver.id === receiverId) &&
      (!senderId || claim.sender.id === senderId) &&
      (!dateFromDate || claim.date >= dateFromDate) &&
      (!dateToDate || claim.date <= dateToDate)
    );
  });

  return {
    page: {
      totalElements: filteredClaims.length,
      totalPages: Math.ceil(filteredClaims.length / size),
    },
    claims: filteredClaims.slice((page - 1) * size, page * size),
  };
}

export function useLotsList({
  lotNumber,
  lotTitle,
  lotStatus,
  performerId,
  dateFrom,
  dateTo,
  page = 1,
  size = 10,
}: GetLotsApiArg): LotsPage {
  const lots = useSelector((state: RootState) => state.market.lots);

  const dateFromDate = dateFrom ? new Date(dateFrom) : null;
  const dateToDate = dateTo ? new Date(dateTo) : null;

  const filteredLots = lots.filter((lot) => {
    return (
      (!lotNumber || lot.number === lotNumber) &&
      (!lotTitle || lot.title.includes(lotTitle)) &&
      (!lotStatus || lot.status === lotStatus) &&
      (!performerId || lot.performer.id === performerId) &&
      (!dateFromDate || lot.listingDate! >= dateFromDate) &&
      (!dateToDate || lot.listingDate! <= dateToDate)
    );
  });

  return {
    page: {
      totalElements: filteredLots.length,
      totalPages: Math.ceil(filteredLots.length / size),
    },
    lots: filteredLots.slice((page - 1) * size, page * size),
  };
}

export function useGetBuylotClaimById(id: string): BuyLotClaim | undefined {
  const claims = useSelector((state: RootState) => state.market.buyLotClaims);
  return claims.find((claim) => claim.id === id);
}

export function useGetListLotClaimById(id: string): ListLotClaim | undefined {
  const claims = useSelector((state: RootState) => state.market.listLotClaims);
  return claims.find((claim) => claim.id === id);
}

export function useGetTransferClaimById(id: string): TransferClaim | undefined {
  const claims = useSelector((state: RootState) => state.market.transferClaims);
  return claims.find((claim) => claim.id === id);
}

export function useGetLotById(id: string): Lot | undefined {
  const lots = useSelector((state: RootState) => state.market.lots);
  return lots.find((lot) => lot.id === id);
}

export function useGetBalance(): number {
  const [authState] = useAuth();
  const balances = useSelector((state: RootState) => state.market.balances);
  const balance = balances.find((user) => user.userId === authState.userId);
  return balance?.balance || 0;
}

export function useCreateBuyLotClaim() {
  const dispatch = useDispatch();
  const lots = useSelector((state: RootState) => state.market.lots);
  const [authState] = useAuth();
  const balances = useSelector((state: RootState) => state.market.balances);
  return useCallback(
    ({ lotId }: BuyLotRequest) => {
      const lot = lots.find((lot) => lot.id === lotId);
      if (!lot) return false;
      const balance = balances.find((user) => user.userId === authState.userId);
      if (!balance || balance.balance < lot.price) return false;
      const claim: BuyLotClaim = {
        id: Math.random().toString(),
        buyer: {
          id: authState.userId!,
          name: authState.name!,
          surname: authState.surname!,
          patronymic: authState.patronymic!,
        },
        date: new Date(),
        lot: lot,
        status: ClaimStatus.Waiting,
      };

      dispatch(createBuyLotClaim({ claim, userId: authState.userId! }));
      return true;
    },
    [
      authState.name,
      authState.patronymic,
      authState.surname,
      authState.userId,
      balances,
      dispatch,
      lots,
    ]
  );
}

export function useCreateListLotClaim() {
  const dispatch = useDispatch();
  const lots = useSelector((state: RootState) => state.market.lots);
  const [authState] = useAuth();
  return useCallback(
    ({ description, price, terms, title }: ListLotRequest) => {
      const lastLotNumber = lots.length + 1;
      const lot: Lot = {
        description,
        id: Math.random().toString(),
        number: lastLotNumber,
        performer: {
          id: authState.userId!,
          name: `${authState.name} ${authState.surname}`,
        },
        price,
        status: LotStatus.Approval,
        terms,
        title,
        listingDate: null,
      };

      const claim: ListLotClaim = {
        id: Math.random().toString(),
        date: new Date(),
        lot: lot,
        status: ClaimStatus.Waiting,
      };

      dispatch(createListLotClaim(claim));
    },
    [authState.name, authState.surname, authState.userId, dispatch, lots.length]
  );
}

export function useCreateTransferClaim() {
  const dispatch = useDispatch();
  const [authState] = useAuth();
  const balances = useSelector((state: RootState) => state.market.balances);
  return useCallback(
    ({ receiver, sum }: TransferRequest) => {
      const sender = balances.find((user) => user.userId === authState.userId);
      if (!sender || sender.balance < sum) return false;

      const claim: TransferClaim = {
        date: new Date(),
        id: Math.random().toString(),
        receiver,
        sender: {
          id: authState.userId!,
          name: authState.name!,
          surname: authState.surname!,
          patronymic: authState.patronymic!,
        },
        status: ClaimStatus.Waiting,
        sum,
      };

      dispatch(createTransferLotClaim(claim));
      return true;
    },
    [
      authState.name,
      authState.patronymic,
      authState.surname,
      authState.userId,
      balances,
      dispatch,
    ]
  );
}

export function useWithdrawLot() {
  const dispatch = useDispatch();
  return useCallback(
    (id: string) => {
      dispatch(withdrawLot({ id }));
    },
    [dispatch]
  );
}

export function useApproveBuyLotClaim() {
  const dispatch = useDispatch();
  return useCallback(
    (id: string) => {
      dispatch(approveBuyLotClaim({ id }));
    },
    [dispatch]
  );
}

export function useRejectBuyLotClaim() {
  const dispatch = useDispatch();
  return useCallback(
    (id: string) => {
      dispatch(rejectBuyLotClaim({ id }));
    },
    [dispatch]
  );
}

export function useApproveListLotClaim() {
  const dispatch = useDispatch();
  return useCallback(
    (id: string) => {
      dispatch(approveListLotClaim({ id }));
    },
    [dispatch]
  );
}

export function useRejectListLotClaim() {
  const dispatch = useDispatch();
  return useCallback(
    (id: string) => {
      dispatch(rejectListLotClaim({ id }));
    },
    [dispatch]
  );
}

export function useApproveTransferClaim() {
  const dispatch = useDispatch();
  return useCallback(
    (id: string) => {
      dispatch(approveTransferClaim({ id }));
    },
    [dispatch]
  );
}

export function useRejectTransferClaim() {
  const dispatch = useDispatch();
  return useCallback(
    (id: string) => {
      dispatch(rejectTransferClaim({ id }));
    },
    [dispatch]
  );
}

export function useCreateLotAdmin() {
  const dispatch = useDispatch();
  const lotsLength = useSelector(
    (state: RootState) => state.market.lots.length
  );
  return useCallback(
    ({
      description,
      performer,
      price,
      terms,
      title,
    }: ListLotCreateRequestAdmin) => {
      const lot: Lot = {
        description,
        id: Math.random().toString(),
        number: lotsLength + 1,
        performer,
        price,
        status: LotStatus.OnSale,
        terms,
        title,
        listingDate: new Date(),
      };
      dispatch(placeLotAdmin(lot));
    },
    [dispatch, lotsLength]
  );
}

export function useUpdateLotAdmin() {
  const dispatch = useDispatch();
  const lots = useSelector((state: RootState) => state.market.lots);
  return useCallback(
    (request: ListLotUpdateRequestAdmin) => {
      const lot = lots.find((lot) => lot.id === request.id);
      if (!lot) return false;

      dispatch(updateLotAdmin(request));
    },
    [dispatch, lots]
  );
}

export function useGetLotBuyers(lotId: string): BuyLotClaim[] {
  const claims = useSelector((state: RootState) => state.market.buyLotClaims);
  return claims.filter((claim) => claim.lot.id === lotId);
}
