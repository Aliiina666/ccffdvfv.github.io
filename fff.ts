class User {  
    private _name: string;  
    private readonly _login: string;  
    private _password: string;  
    private readonly _grade: number;  
    static count: number = 0;  
  
    constructor(name: string, login: string, password: string, grade: number) {  
        this._name = name;  
        this._login = login;  
        this._password = password;  
        this._grade = grade;  
        User.count++;  
    }  
  
    get name(): string {  
        return this._name;  
    }  
  
    set name(value: string) {  
        this._name = value;  
    }  
  
    get login(): string {  
        return this._login;  
    }  
  
    get password(): string {  
        return '*'.repeat(this._password.length);  
    }  
  
    set password(value: string) {  
        this._password = value;  
    }  
  
    showInfo(): void {  
        console.log(`Name: ${this._name}, Login: ${this._login}`);  
    }  
  
    eq(user: User): boolean {  
        return this._grade === user._grade;  
    }  
  
    lt(user: User): boolean {  
        return this._grade < user._grade;  
    }  
  
    gt(user: User): boolean {  
        return this._grade > user._grade;  
    }  
}  
  
class SuperUser extends User {  
    private _role: string;  
    static count: number = 0;  
  
    constructor(name: string, login: string, password: string, role: string, grade: number) {  
        super(name, login, password, grade);  
        this._role = role;  
        SuperUser.count++;  
    }  
  
    get role(): string {  
        return this._role;  
    }  
  
    set role(value: string) {  
        this._role = value;  
    }  
  
    showInfo(): void {  
        super.showInfo();  
        console.log(`Role: ${this._role}`);  
    }  
  
    get grade(): string {  
        return 'Неизвестное свойство grade';  
    }  
  
    set grade(value: number) {  
        console.log('Неизвестное свойство grade');  
    }  
}
