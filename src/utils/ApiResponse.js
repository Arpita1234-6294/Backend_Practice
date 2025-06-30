class ApiRespons{
    constructor(statusCode,data,message = "Sucess"){
        this.statusCode=statusCode
        this.data =Date
        this.message=message
        this.success = statusCode<400
    }
}