// common attribute
declare interface ICommonAttr {
  created_time: number | string;
  update_time: number | string;
}

// user
declare interface IUser extends ICommonAttr {
  name: string;
  id: string;
  avatar: string;
}
// record
declare interface IRecord extends ICommonAttr {
  from_account_id: string;
  to_account_id: string;
  balance: number;
  note: string;
  tag: record_tag[];
  type: record_type[];
}

// account
declare interface Account extends ICommonAttr {
  type: account_type;
  id: string;
  title: string;
  balance: number; // ￥100.00 => 10000
}

// financial report record
declare interface IReportRecord extends ICommonAttr {
  account_id: string;
  balance: number;
  year: number;
  month: number;
}

// record tag
declare interface ITag extends ICommonAttr {
  id: string;
  label: string;
}
declare interface record_tag extends ITag {}
declare interface account_type extends ITag {}
declare interface record_type extends ITag {}

declare interface Log extends ICommonAttr {
  type: string;
  label: string;
  desc: string;
}
