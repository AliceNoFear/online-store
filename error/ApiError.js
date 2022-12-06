class ApiError extends Error{
    //Конструктор принимает статус Код и сообщение
    constructor(status, message){ 
        super();
        this.message = message
        this.status = status
    }
   static badRequest(message){
        return new ApiError(404, message)

   }
   static internal(message){
    return new ApiError(500, message)
    
}
    //доступа нет 
    static forbidden(message){ 
    return new ApiError(403, message)
    
}
}

module.exports = ApiError;