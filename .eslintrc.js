module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "plugins": [
        "security"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:secutiry/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    }
};