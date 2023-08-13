'use client';
import { AccountsTableWithFilter } from '@/components/TableWithFilter/AccountsTableWithFilter';
import {ClaimPlacingLotTableWithFilter} from "@/components/TableWithFilter/ClaimPlacingLotTableWithFilter";
import {ClaimDeadlineTableWithFilter} from "@/components/TableWithFilter/ClaimDeadlineTableWithFilter";

export default function Accounts() {
  return (
    <div>
      {/*<AccountsTableWithFilter></AccountsTableWithFilter>*/}
      {/*  <ClaimPlacingLotTableWithFilter></ClaimPlacingLotTableWithFilter>*/}
        <ClaimDeadlineTableWithFilter></ClaimDeadlineTableWithFilter>
    </div>
  );
}
