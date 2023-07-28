import { instance, removeTokenInterceptor, tokenInterceptor } from "./index";

/**
 * 주문하기
 * @returns 
 */
export const orderSave = () => {
    tokenInterceptor();
    return instance.post("/orders/save");
}

/**
 * 주문결과 확인
 * @param {Number} orderId
 * @returns 
 */
export const getOrderResult = (orderId = 1) => {
    removeTokenInterceptor();
    return instance.get(`/orders/${orderId}`)
}