export class User {
  constructor(
    public id: number,
    public name: string,
    public emailAddress: string,
    public username: string,
    public password: string,
    public rep: boolean,
    public lastLoggedInDateTime: string,
    public invoiceAmex: boolean,
    public invoiceDirect: boolean,
    public invoiceCommission: boolean,
    public homepage: string,
    public signatureImage: string
  ) { }
}