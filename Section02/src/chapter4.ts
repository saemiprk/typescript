// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

let user: User = {
    id: 1,
    name: "개미새",
    nickname: "개미",
    birth: "1994",
    bio: "안녕하세요.",
    location: "고양시"
}

let user2: User = {
    id: 2,
    name: "개미",
    nickname: "개미새",
    birth: "1994",
    bio: "안녕하세요.",
    location: "고양시"
}

// 인덱스 시그니처
type CountryCodes = {
    [key: string] : string;
}

let CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk"
}

type CountryNumberCodes = {
    [key: string] : number
}

let CountryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
}