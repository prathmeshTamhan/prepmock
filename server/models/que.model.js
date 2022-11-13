const mongoose = require('mongoose')

const subjects = ['CN', 'DBMS', 'OS', 'HR']

const CN = new mongoose.Schema(
    {
        difficultyLevel: { type: String },
        que: { type: String },
        ansLink: { type: String },
    }
)

const DBMS = new mongoose.Schema(
    {
        difficultyLevel: { type: String },
        que: { type: String },
        ansLink: { type: String },
    }
)

const OS = new mongoose.Schema(
    {
        difficultyLevel: { type: String },
        que: { type: String },
        ansLink: { type: String },
    }
)

const HR= new   mongoose.Schema(
    {
        que: { type: String },
        ansLink: { type: String },
    }
)

const DBMSSchema = mongoose.model('DBMS', DBMS)
const OSSchema = mongoose.model('OS', OS)
const CNSchema = mongoose.model('CN', CN)
const HRSchema= mongoose.model('HR',HR)

module.exports = {OSSchema: OSSchema , DBMSSchema : DBMSSchema , CNSchema : CNSchema , HRSchema: HRSchema}