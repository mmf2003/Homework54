console.log("#53. JavaScript homework example file");

// ========================================
// #1. Debug Mode
// ========================================

const isDebugMode = () => {
    const debugMode = process.env.NODE_ENV === "development";

    console.log("NODE_ENV:", process.env.NODE_ENV);
    console.log("Debug mode:", debugMode);

    return debugMode;
};

// ========================================
// #2. Encoding and Decoding
// ========================================

function encodeToBase64(...args) {
    try {
        const data = args.join(":");
        const encoded = Buffer.from(data, "utf8").toString("base64");

        console.log("Base64 encoded:", encoded);
        return encoded;
    } catch (error) {
        console.error("Base64 encoding error:", error.message);
        throw error;
    }
}

function encodeToHex(...args) {
    try {
        const data = args.join(":");
        const encoded = Buffer.from(data, "utf8").toString("hex");

        console.log("Hex encoded:", encoded);
        return encoded;
    } catch (error) {
        console.error("Hex encoding error:", error.message);
        throw error;
    }
}

function decodeFromBase64(base64String) {
    try {
        const decoded = Buffer.from(base64String, "base64").toString("utf8");

        console.log("Base64 decoded:", decoded);
        return decoded;
    } catch (error) {
        console.error("Base64 decoding error:", error.message);
        throw error;
    }
}

function decodeFromHex(hexString) {
    try {
        const decoded = Buffer.from(hexString, "hex").toString("utf8");

        console.log("Hex decoded:", decoded);
        return decoded;
    } catch (error) {
        console.error("Hex decoding error:", error.message);
        throw error;
    }
}

// ========================================
// #3. Safe Decoding
// ========================================

function safeDecodeFromBase64(base64String) {
    try {
        const base64Regex =
            /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;

        if (
            typeof base64String !== "string" ||
            !base64Regex.test(base64String)
        ) {
            throw new Error("Invalid base64 string");
        }

        const decodedBuffer = Buffer.from(base64String, "base64");

        // Reject non-canonical Base64 strings.
        if (decodedBuffer.toString("base64") !== base64String) {
            throw new Error("Invalid base64 string");
        }

        const decoded = decodedBuffer.toString("utf8");

        console.log("Safe Base64 decoded:", decoded);
        return decoded;
    } catch (error) {
        console.error("Safe Base64 decoding error:", error.message);
        throw error;
    }
}

function safeDecodeFromHex(hexString) {
    try {
        const hexRegex = /^(?:[0-9a-fA-F]{2})*$/;

        if (typeof hexString !== "string" || !hexRegex.test(hexString)) {
            throw new Error("Invalid hex string");
        }

        const decoded = Buffer.from(hexString, "hex").toString("utf8");

        console.log("Safe Hex decoded:", decoded);
        return decoded;
    } catch (error) {
        console.error("Safe Hex decoding error:", error.message);
        throw error;
    }
}

// ========================================
// Exports
// ========================================

export {
    isDebugMode,
    encodeToBase64,
    encodeToHex,
    decodeFromBase64,
    decodeFromHex,
    safeDecodeFromBase64,
    safeDecodeFromHex,
};
