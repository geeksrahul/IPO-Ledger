const executeService = async (callbackMethod) => {
    try {
        const {data, error} = await callbackMethod();
        if(error) {
            return {
                data:null,
                success:false,
                error,
            }
        }
        return {
            data,
            success:true,
            error:null,
        }
    } catch (error) {
        return {
            data:null,
            success:false,
            error
        }
    }
}

export default executeService;