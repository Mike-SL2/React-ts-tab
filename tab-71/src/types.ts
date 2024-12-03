export type TGender = "М" | "ж";
interface IUser0 {
    name:string
    secondName:string
    gender:TGender
    age:number
    rank:number
};
export interface IUser extends IUser0 {
    lineColor:string
    userNumer:number
}
export type TArrayOfUsers=IUser0[];