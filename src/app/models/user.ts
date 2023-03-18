export class User {
  
  id: number;
  name: string;
  email: string;
  password!: string;
  phone: string;
  role: string;
  

  constructor(id: number, name: string, email: string, password: string, phone: string, role: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.role = role;
  }

}
