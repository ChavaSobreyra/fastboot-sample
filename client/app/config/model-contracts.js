export default {
    "Credentials": {
        "properties": {
            "username": {
                "type": "string"
            },
            "password": {
                "type": "string"
            }
        },
        "required": [
            "username",
            "password"
        ]
    },
    "GenericRequestHeaders": {
        "properties": {
            "CQ-SESSION-ID": {
                "type": "string"
            }
        },
        "required": [
            "session"
        ]
    },
    "GenericResponse": {
        "properties": {
            "status": {
                "$ref": "Status"
            },
            "data": {
                "$ref": "Session"
            }
        },
        "required": [
            "status",
            "data"
        ]
    },
    "LoginRequest": {
        "properties": {
            "data": {
                "$ref": "Credentials"
            },
            "headers": {
                "$ref": "GenericRequestHeaders"
            }
        },
        "required": [
            "data",
            "headers"
        ]
    },
    "LoginResponse": {
        "properties": {
            "status": {
                "$ref": "Status"
            },
            "data": {
                "$ref": "Session"
            }
        },
        "required": [
            "status",
            "data"
        ]
    },
    "LogoutRequest": {
        "properties": {
            "headers": {
                "$ref": "GenericRequestHeaders"
            }
        },
        "required": [
            "headers"
        ]
    },
    "Session": {
        "properties": {
            "id": {
                "type": "string"
            },
            "tsStart": {
                "type": "string"
            },
            "tsEnd": {
                "type": "string"
            },
            "user": {
                "$ref": "User"
            }
        },
        "required": [
            "id"
        ]
    },
    "Status": {
        "properties": {
            "code": {
                "type": "number"
            },
            "message": {
                "type": "string"
            },
            "errors": {
                "type": "array",
                "item": {
                    "$ref": "Status"
                }
            }
        },
        "required": [
            "code"
        ]
    },
    "User": {
        "properties": {
            "id": {
                "type": "string"
            },
            "firstName": {
                "type": "string"
            },
            "lastName": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "dateRegistered": {
                "type": "string"
            },
            "isCreditVerified": {
                "type": "boolean"
            },
            "isQualified": {
                "type": "boolean"
            },
            "maxDPM": {
                "type": "number"
            },
            "creditScore": {
                "type": "number"
            },
            "estCreditScore": {
                "type": "number"
            }
        },
        "required": [
            "email",
            "firstName",
            "lastName"
        ]
    }
};