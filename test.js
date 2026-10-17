import {
    isDebugMode,
    encodeToBase64,
    encodeToHex,
    decodeFromBase64,
    decodeFromHex,
    safeDecodeFromBase64,
    safeDecodeFromHex,
} from "./main.js";

// #1
console.log("DEBUG MODE TEST");
console.log(isDebugMode());

// #2
console.log("\nENCODING TEST");

const base64 = encodeToBase64("john@email.com", "123", "extraData");

const hex = encodeToHex("john@email.com", "123", "extraData");

console.log(decodeFromBase64(base64));
console.log(decodeFromHex(hex));

// #3
console.log("\nSAFE DECODING TEST");

console.log(safeDecodeFromBase64(base64));
console.log(safeDecodeFromHex(hex));

// Invalid data tests
try {
    safeDecodeFromBase64("invalid!!!");
} catch (error) {
    console.log("Expected error:", error.message);
}

try {
    safeDecodeFromHex("xyz123");
} catch (error) {
    console.log("Expected error:", error.message);
}
