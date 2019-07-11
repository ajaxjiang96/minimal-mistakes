declare module "*.png" {
    const value: string;
    export = value;
}
declare module '*.jpg';
declare module '*.json';
declare module '*.svg';
declare module '*.md';
declare module "*!text" {
    const value: any;
    export default value;
}