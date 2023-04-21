import mongoose from 'mongoose';
const Schema=mongoose.Schema;

const ModelSchema=new Schema({
    text: {
        type: String,
        required:true
    },
    
     timestamp:{
        type: String,
        default:Date.now()
    }
});

    const Model=mongoose.model('Model', ModelSchema)
    export default Model
