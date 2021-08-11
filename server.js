import app from './app'
import sequalize from './sequelize'
const start = async () => {
    try {
        await sequalize.authenticate();
        await sequalize.sync();
        app.listen(3000);
    } catch (e) {
        console.log(e)
    }
}
start ()