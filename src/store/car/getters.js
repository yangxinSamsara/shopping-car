import * as untils from "../../untils"
export default {
    getCarList(state) {
        // console.log(state.carList)
        return state.carList;
    },
    getCarInfo(state) {
        state.carInfo.total_nums = 0
        state.carInfo.total_prices = 0
        let carList = state.carList
        let carInfoTemp = []
        if (carList.length > 0) {
            for (let i = 0; i < carList.length; i++) {
                state.carInfo.total_nums += parseInt(carList[i].num)
                carInfoTemp.push(untils.mul(carList[i].num, carList[i].price))
            }
            state.carInfo.total_prices = carInfoTemp.reduce((a, b) => {
                return untils.add(a, b)
            })
        }
        return state.carInfo
    }
}