import mongoose from 'mongoose';

const connectDB = () => {
  const url = process.env.MONGODB_URL;

  mongoose.set('strictQuery', true);

  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('connected to mongo'))
    .catch((err) => {
      console.error('failed to connect with mongo');
      console.error(err);
    });
};

export default connectDB;
