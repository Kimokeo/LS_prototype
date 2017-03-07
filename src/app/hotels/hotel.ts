export class Hotel {
	constructor(
	public id: number,
	public hotelName: string,
	public hotelType: string,
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