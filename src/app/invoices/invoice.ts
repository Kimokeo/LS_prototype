export class Invoice {
  constructor(
  	public id: number,
  	public reservationTitle: string,
		public workAddress: string,
		public city: string,
		public state: string,
		public zip: string,
		public firstName: string,
		public lastName: string,
		public phone: string,
		public email: string,
		public company: string
	) { }
}