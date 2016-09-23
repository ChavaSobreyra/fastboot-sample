module.exports = {
    environment: "dev",
    aerospike: {
        namespace: "cqAero",
        connection: {
            hosts: "192.168.5.37:3000",
            user: "spiderman",
            password: "peterparker"
        },
        setNames: {
            tokenSet: "token",
            apiSet: "apiKey"
        },
        token: {
            ttl: 21600, // 6 hours
            hardExpirationDays: 14 * 24 * 60 * 60 * 1000
        }
    },
    stackify: {
        apiKey: "4Vx1Fy2En9Ny4Ox1Lk1Lu4Vb1Or4Cy8Ps2Hl9Bw",
        environment: "dev"
    }
};