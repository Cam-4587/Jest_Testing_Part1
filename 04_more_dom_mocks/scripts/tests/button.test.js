/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeAll(() => {
    let fs = require("fs");
    const path = require("path");
    const filePath = path.resolve(__dirname, "../../index.html");  // Adjust path as needed
    let fileContents = fs.readFileSync(filePath, "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});