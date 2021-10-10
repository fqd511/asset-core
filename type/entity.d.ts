// common attribute
interface ICommonAttr {
	created_time:number | string, 
	update_time:number | string, 
}

// user
interface IUser extends ICommonAttr {
	name:string, 
	id:string, 
	avatar:string, 
}
// record
interface IRecord extends ICommonAttr {
	from_account_id:string, 
	to_account_id:string, 
	balance:number, 
	note:string, 
	tag:record_tag[], 
	type:record_type[], 
}

// account
interface Account extends ICommonAttr {
	type:account_type, 
	id:string, 
	title:string, 
	balance:number; 	// ￥100.00 => 10000
}

// financial report record
interface IReportRecord extends ICommonAttr {
account_id:string, 
balance:number, 
year:number, 
month:number, 
}

// record tag
interface ITag extends ICommonAttr {
	id:string, 
	label:string, 
}
interface record_tag extends ITag {}
interface account_type extends ITag {}
interface record_type extends ITag {}

interface Log extends ICommonAttr {
	type:string, 
	label:string, 
	desc:string, 
}