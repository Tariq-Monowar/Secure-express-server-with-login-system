require('dotenv').config()

const dev = {
    db:{
        url: process.env.DB_URL || "mongodb://127.0.0.1:27017/chok_kan_khola_rakhis"
    },
    app:{
        port: process.env.PORT || 6006
    }
}

module.exports = dev