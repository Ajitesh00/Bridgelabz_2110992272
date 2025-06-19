class Contact {
    public id: number;
    public name: string;
    private phone: string;
    private address: string;
    
    constructor(id:number,name:string,phone:string,address:string){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.address = address;
    }

    display(): void{
        console.log("-----------");
        console.log(`${this.id} \n${this.name} \n${this.phone} \n${this.address}`);
    }
}

class BusinessContact extends Contact {
    public company: string;

    constructor(id: number, name: string, phone: string, address: string, company: string) {
        super(id, name, phone, address);
        this.company = company;
    }

    // Method overriding
    public override display(): void {
        super.display();
        console.log(`Company: ${this.company}`);
        // console.log("-----------");
    }
}

class AddressBook {
    contacts: Contact[];

    constructor() {
        this.contacts = [];
    }

    addContact(contact: Contact): void {
        this.contacts.push(contact);
    }

    removeContact(id: number): void {
        this.contacts = this.contacts.filter(contact => contact.id !== id);
    }

    displayContacts(): void {
        if (this.contacts.length === 0) {
            console.log("No contacts available.");
            return;
        }
        this.contacts.forEach(contact => contact.display());
    }
}

let contact1 = new Contact(1,"Ajitesh","89508","Hisar");
let contact2 = new Contact(2,"Aryan","93501","Karnal");
let contact3 = new Contact(3,"Om","97290","Barwala");
let contact4 = new Contact(4,"Yash","62803", "Ferozpur");

let contact5 = new BusinessContact(5, "Aman", "83509", "Gurgaon", "Nielsen");


let addressbook1 = new AddressBook();

addressbook1.addContact(contact1);
addressbook1.addContact(contact2);
addressbook1.addContact(contact3);
addressbook1.addContact(contact4);
addressbook1.addContact(contact5);

addressbook1.removeContact(2);

addressbook1.displayContacts();