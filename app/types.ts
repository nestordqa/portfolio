export interface props{
    name: string
}
export interface Project{
    name: string,
    content: string[],
    deploy: string,
    repository: string,
    img: any
}
export interface ProjectProps{
    name: string,
    content: string[],
    deploy: string,
    repository: string,
    img: any,
    index: number
}
export interface ContentProps{
    name:string,
    content: string[],
    deploy: string,
    repository: string,
}
export interface ButtonProps{
    deploy: string,
    repository: string,
}
export interface Form{
    name: string,
    lastName: string,
    code: number,
    phone: number,
    email: string,
    content: string

}