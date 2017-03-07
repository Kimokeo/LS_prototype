export class Client {
	constructor(
	public id: number,
	public companyName: string,
	public companyType: string,
	public address1: string,
	public address2: string,
	public city: string,
	public state: string,
	public zipCode: string,
	public country: string,
	public email: string,
	public phone: string,
	public contacts: Array<any>
	) { }
}