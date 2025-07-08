 export class ApiResponse{
    constructor(statusCode,data,message = "Success"){
        this.statusCode=statusCode
        this.data =Date
        this.message=message
        this.success = statusCode<400
    }
}

