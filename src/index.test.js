import { capitalize , reverseString, calculator, analyzer} from "./index.js";

// testing a single word string
it("capitalization faild", () =>{
    expect(capitalize("hello")).toBe("Hello")
})
// testing a mutiple word string
it("capitalization test case 2", () =>{
    expect(capitalize("javascript is chill")).toBe("Javascript is chill")
})

// testing string reversing(one string)

it("reversing string test case 1" ,() =>{
    expect(reverseString("javascript")).toBe("tpircsavaj")
})
// esting string reversing(multiple string)
it("reverse String test case 2", () =>{
    expect(reverseString("i am happy")).toBe("yppah ma i")
})

// adding operation

it("calculator test case 1", () =>{
    expect(calculator.add(5,6)).toBe(11)
})

// substracting operation

it("calculator test case 2", () =>{
    expect(calculator.substract(1, 3)).toBe(-2)
})

//mutiply operation

it("calculator test case 2", () =>{
    expect(calculator.mutiply(4,5)).toBe(20)
})

// divide operation

it("calculator test case 2", () =>{
    expect(calculator.divide(4,2)).toBe(2)
})
// checking the min
it("analyzer test case 1",() =>{
    expect(analyzer([1,2,3,4,5]).min).toBe(1)
})
it("analyzer test case 2",() =>{
    expect(analyzer([1,2,3,4,5]).average).toBe(3)
})
it("analyzer test case 3",() =>{
    expect(analyzer([2,3,4,5,11]).max).toBe(11)
})
it("analyzer test case 4",() =>{
    expect(analyzer([4,5,6,7,8]).length).toBe(5)
})
